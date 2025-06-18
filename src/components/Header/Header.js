import React, { useState, useEffect, useRef } from 'react';
import { Link, navigate } from 'gatsby';

import { isAuth } from '../../helpers/general';

import AddNotification from '../AddNotification';
import Brand from '../Brand';
import Container from '../Container';
import Config from '../../config.json';
import Drawer from '../Drawer';
import ExpandedMenu from '../ExpandedMenu';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import MiniCart from '../MiniCart';

import * as styles from './Header.module.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [activeMenu, setActiveMenu] = useState(undefined);
  const [showSearch, setShowSearch] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 100 || currentY < lastScrollY.current) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
        setShowSearch(false);
        setActiveMenu(undefined);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop', name: 'shop' },
    { label: 'About', path: '/about', name: 'about' },
  ];

  return (
    <div className={`${styles.root} ${showMenu ? styles.show : styles.hide}`}>
      <Container>
        <div className={styles.header}>
          <div className={styles.links}>
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={styles.navLink}
                activeClassName={styles.activeLink}
                onMouseEnter={() => setActiveMenu(link.name)}
                onMouseLeave={() => setActiveMenu(undefined)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Brand />

          <div className={styles.actions}>
            <div onClick={() => setShowSearch(!showSearch)} className={styles.icon}>
              <Icon name="search" />
            </div>
            <div onClick={() => setDrawerOpen(true)} className={styles.icon}>
              <Icon name="menu" />
            </div>
            <div className={styles.icon}>
              <MiniCart />
            </div>
            <div className={styles.icon}>
              {isAuth() ? (
                <Link to="/account">
                  <Icon name="user" />
                </Link>
              ) : (
                <Link to="/login">
                  <Icon name="user" />
                </Link>
              )}
            </div>
          </div>
        </div>

        <ExpandedMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        {showSearch && (
          <div className={styles.searchBox}>
            <h4>What are you looking for?</h4>
            <form onSubmit={(e) => {
              e.preventDefault();
              const q = e.target.search.value.trim();
              if (q) {
                navigate(`/search?q=${q}`);
                setShowSearch(false);
              }
            }}>
              <FormInputField name="search" placeholder="Search here..." />
            </form>
          </div>
        )}
      </Container>
      <Drawer open={drawerOpen} setOpen={setDrawerOpen} />
    </div>
  );
};

export default Header;
