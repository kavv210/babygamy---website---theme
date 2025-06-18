import React, { useState, useEffect, createRef } from 'react';
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
import MobileNavigation from '../MobileNavigation';
import * as styles from './Header.module.css';

const Header = () => {
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [menu, setMenu] = useState();
  const [activeMenu, setActiveMenu] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [hideHeader, setHideHeader] = useState(false);

  const searchRef = createRef();
  const searchSuggestions = ['Oversize sweaters', 'Lama Pajamas', 'Candles Cinnamon'];

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY && currentY > 100) {
        setHideHeader(true); // scrolling down
      } else if (currentY <= 10) {
        setHideHeader(false); // back to top
      }
      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showMenu === false) setActiveMenu(false);
  }, [showMenu]);

  useEffect(() => {
    if (showSearch === true) {
      setTimeout(() => {
        searchRef.current?.focus();
      }, 250);
    }
  }, [showSearch]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
    setShowSearch(false);
  };

  const handleHover = (navObject) => {
    if (navObject.category) {
      setShowMenu(true);
      setMenu(navObject.category);
      setShowSearch(false);
    } else {
      setMenu(undefined);
    }
    setActiveMenu(navObject.menuLabel);
  };

  return (
    <div className={`${styles.root} ${hideHeader ? styles.hidden : ''}`}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.header}>
          <nav className={styles.linkContainer} onMouseLeave={() => setShowMenu(false)}>
            {Config.headerLinks.map((navObject) => (
              <Link
                key={navObject.menuLink}
                to={navObject.menuLink}
                onMouseEnter={() => handleHover(navObject)}
                className={`${styles.navLink} ${
                  activeMenu === navObject.menuLabel ? styles.activeLink : ''
                }`}
              >
                {navObject.menuLabel}
              </Link>
            ))}
          </nav>

          <div className={styles.brandWrapper}>
            <Brand />
          </div>

          <div className={styles.actions}>
            <button onClick={() => setShowSearch(!showSearch)} className={styles.icon}>
              <Icon symbol="search" />
            </button>
            <Link to="/account/favorites" className={styles.icon}>
              <Icon symbol="heart" />
            </Link>
            <Link to={isAuth() ? '/login' : '/account/orders/'} className={styles.icon}>
              <Icon symbol="user" />
            </Link>
            <button
              onClick={() => {
                setShowMiniCart(true);
                setMobileMenu(false);
              }}
              className={styles.icon}
            >
              <Icon symbol="bag" />
              <div className={styles.bagNotification}>
                <span>1</span>
              </div>
            </button>
          </div>
        </div>

        {showSearch && (
          <div className={styles.searchContainer}>
            <h4>What are you looking for?</h4>
            <form onSubmit={handleSearch} className={styles.searchForm}>
              <FormInputField
                ref={searchRef}
                icon={'arrow'}
                id={'searchInput'}
                value={search}
                placeholder={''}
                type={'text'}
                handleChange={(_, e) => setSearch(e)}
              />
            </form>
            <div className={styles.suggestions}>
              {searchSuggestions.map((suggestion, idx) => (
                <p
                  key={idx}
                  onClick={() => {
                    setShowSearch(false);
                    navigate(`/search?q=${suggestion}`);
                  }}
                  className={styles.suggestion}
                >
                  {suggestion}
                </p>
              ))}
            </div>
          </div>
        )}
      </Container>

      <div
        onMouseLeave={() => setShowMenu(false)}
        onMouseEnter={() => setShowMenu(true)}
        className={`${styles.menuContainer} ${showMenu ? styles.show : ''}`}
      >
        <Container size="large" spacing="min">
          <ExpandedMenu menu={menu} />
        </Container>
      </div>

      <Drawer visible={showMiniCart} close={() => setShowMiniCart(false)}>
        <MiniCart />
      </Drawer>

      <Drawer
        hideCross
        top="80px"
        isReverse
        visible={mobileMenu}
        close={() => setMobileMenu(false)}
      >
        <MobileNavigation close={() => setMobileMenu(false)} />
      </Drawer>
    </div>
  );
};

export default Header;
