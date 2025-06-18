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

  // Handle scroll-based header visibility
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuHover = (menuName) => {
    if (window.innerWidth > 800) {
      setActiveMenu(menuName);
    }
  };

  const handleMenuLeave = () => {
    if (window.innerWidth > 800) {
      setActiveMenu(undefined);
    }
  };

  const navLinks = [
    { label: 'Shop', path: '/shop', name: 'shop' },
    { label: 'About', path: '/about', name: 'about' },
  ];

  return (
    <div className={`${styles.root} ${showMenu ? styles['show-header'] : styles['hide-header']}`}>
      <Container>
        <div className={styles.header}>
          {/* Left Nav Links */}
          <div className={styles.linkContainer}>
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={styles.navLink}
                activeClassName={styles.activeLink}
                onMouseEnter={() => handleMenuHover(link.name)}
                onMouseLeave={handleMenuLeave}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center Brand */}
          <Brand />

          {/* Right Action Icons */}
          <div className={styles.actionContainers}>
            <div className={styles.iconContainer} onClick={() => setShowSearch(!showSearch)}>
              <Icon name="search" />
            </div>

            <div className={styles.iconContainer} onClick={() => setDrawerOpen(true)}>
              <Icon name="menu" />
            </div>

            <div className={styles.iconContainer}>
              <MiniCart />
            </div>

            <div className={styles.iconContainer}>
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

        {/* Expanded Menu */}
        <ExpandedMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        {/* Search */}
        {showSearch && (
          <div className={styles.searchContainer}>
            <h4>What are you looking for?</h4>
            <form className={styles.searchForm} onSubmit={(e) => {
              e.preventDefault();
              const query = e.target.search.value.trim();
              if (query) {
                navigate(`/search?q=${query}`);
                setShowSearch(false);
              }
            }}>
              <FormInputField name="search" placeholder="Search here..." />
            </form>
          </div>
        )}
      </Container>

      {/* Drawer */}
      <Drawer open={drawerOpen} setOpen={setDrawerOpen} />
    </div>
  );
};

export default Header;
