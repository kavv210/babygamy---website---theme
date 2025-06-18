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
  const searchRef = createRef();
  const bannerMessage = 'Free shipping worldwide';
  const searchSuggestions = ['Oversize sweaters', 'Lama Pajamas', 'Candles Cinnamon'];

  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isScrolled, setIsScrolled] = useState(false);

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

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
    setShowSearch(false);
  };

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const headerClasses = `
    ${styles.root}
    ${scrollDirection === 'down' ? styles.hidden : styles.visible}
    ${isScrolled ? styles.shrink : ''}
  `;

  return (
    <div className={headerClasses}>
      <div className={styles.headerMessageContainer}>
        <span>{bannerMessage}</span>
      </div>

      <Container size={'large'} spacing={'min'}>
        <div className={styles.header}>
          <div className={styles.linkContainer}>
            <nav onMouseLeave={() => setShowMenu(false)}>
              {Config.headerLinks.map((navObject) => (
                <Link
                  key={navObject.menuLink}
                  onMouseEnter={() => handleHover(navObject)}
                  className={`${styles.navLink} ${
                    activeMenu === navObject.menuLabel ? styles.activeLink : ''
                  }`}
                  to={navObject.menuLink}
                >
                  {navObject.menuLabel}
                </Link>
              ))}
            </nav>
          </div>

          <div
            onClick={() => setMobileMenu(!mobileMenu)}
            className={styles.burgerIcon}
            role="presentation"
          >
            <Icon symbol={mobileMenu ? 'cross' : 'burger'} />
          </div>

          <Brand />

          <div className={styles.actionContainers}>
            <button
              className={`${styles.iconButton} ${styles.iconContainer}`}
              onClick={() => setShowSearch(!showSearch)}
              aria-label="Search"
            >
              <Icon symbol={'search'} />
            </button>

            <Link
              to="/account/favorites"
              className={`${styles.iconContainer} ${styles.hideOnMobile}`}
              aria-label="Favorites"
            >
              <Icon symbol={'heart'} />
            </Link>

            <Link
              to={isAuth() ? '/login' : '/account/orders/'}
              className={`${styles.iconContainer} ${styles.hideOnMobile}`}
              aria-label="Orders"
            >
              <Icon symbol={'user'} />
            </Link>

            <button
              onClick={() => {
                setShowMiniCart(true);
                setMobileMenu(false);
              }}
              className={`${styles.iconButton} ${styles.iconContainer} ${styles.bagIconContainer}`}
              aria-label="Cart"
            >
              <Icon symbol={'bag'} />
              <div className={styles.bagNotification}>
                <span>1</span>
              </div>
            </button>

            <div className={styles.notificationContainer}>
              <AddNotification openCart={() => setShowMiniCart(true)} />
            </div>
          </div>
        </div>

        <div className={`${styles.searchContainer} ${showSearch ? styles.show : ''}`}>
          <h4>What are you looking for?</h4>
          <form className={styles.searchForm} onSubmit={handleSearch}>
            <FormInputField
              ref={searchRef}
              icon="arrow"
              id="searchInput"
              value={search}
              placeholder=""
              type="text"
              handleChange={(_, e) => setSearch(e)}
            />
          </form>
          <div className={styles.suggestionContianer}>
            {searchSuggestions.map((suggestion, index) => (
              <p
                key={index}
                className={styles.suggestion}
                onClick={() => {
                  setShowSearch(false);
                  navigate(`/search?q=${suggestion}`);
                }}
              >
                {suggestion}
              </p>
            ))}
          </div>
          <div
            className={styles.backdrop}
            onClick={(e) => {
              e.stopPropagation();
              setShowSearch(false);
            }}
            role="presentation"
          />
        </div>
      </Container>

      <div
        className={`${styles.menuContainer} ${showMenu ? styles.show : ''}`}
        onMouseLeave={() => setShowMenu(false)}
        onMouseEnter={() => setShowMenu(true)}
        role="presentation"
      >
        <Container size="large" spacing="min">
          <ExpandedMenu menu={menu} />
        </Container>
      </div>

      <Drawer visible={showMiniCart} close={() => setShowMiniCart(false)}>
        <MiniCart />
      </Drawer>

      <div className={styles.mobileMenuContainer}>
        <Drawer
          hideCross
          top="98px"
          isReverse
          visible={mobileMenu}
          close={() => setMobileMenu(false)}
        >
          <MobileNavigation close={() => setMobileMenu(false)} />
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
