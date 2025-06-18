.root {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--standard-white);
  z-index: 50;
  transition: transform 0.3s ease, padding 0.3s ease;
}

/* Removes drop shadow */
.root.hide-header {
  transform: translateY(-100%);
}

.root.show-header {
  transform: translateY(0);
}

.iconButton {
  border: none;
  background-color: unset;
  overflow: visible;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

.header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 36px 0;
  margin: 0 auto;
  transition: padding 0.3s ease;
}

.headerMessageContainer {
  background-color: var(--bg-grey);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.headerMessageContainer span {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: var(--grey-crumb);
}

.linkContainer {
  display: flex;
  justify-content: flex-start;
}

.navLink {
  margin-right: 40px;
  text-transform: uppercase;
  color: var(--standard-black);
  font-weight: 500;
  padding-bottom: 50px;
  font-size: 12px;
  line-height: 15px;
  border-bottom: 2px solid transparent;
  transition: border 0.3s ease-in-out;
}

.activeLink {
  border-bottom: 2px solid var(--standard-black);
}

.actionContainers {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.actionContainers > * {
  margin-right: 32px;
  cursor: pointer;
  color: var(--standard-black);
}

.iconContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.iconContainer svg {
  width: 20px;
  height: 20px;
}

.menuContainer {
  position: absolute;
  background-color: var(--standard-white);
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.show {
  opacity: 1 !important;
  visibility: visible !important;
  max-height: 500px !important;
}

.hide {
  opacity: 0 !important;
  visibility: hidden !important;
  max-height: 0px !important;
  height: 0px;
}

.searchContainer {
  width: 500px;
  margin: 0 auto;
  text-align: center;
  transition: all 0.3s ease-in-out;
  z-index: 51;
}

.searchContainer h4 {
  font-weight: normal;
  font-size: 32px;
  line-height: 38px;
}

.searchForm {
  margin-top: 40px;
  margin-bottom: 40px;
}

.searchForm input {
  width: 95% !important;
  border-bottom: 1px solid var(--standard-black) !important;
  border-left: none !important;
  border-right: none !important;
  border-top: none !important;
}

.suggestionContianer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
}

.suggestion {
  padding: 14px 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: var(--standard-black);
  border: 1px solid var(--bg-light-gray);
  cursor: pointer;
}

.suggestion:hover {
  background-color: var(--standard-gold);
  color: var(--standard-white);
  border: 1px solid transparent;
}

.backdrop {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: -1;
}

.notificationContainer {
  position: relative;
}

.burgerIcon {
  display: none;
}

.mobileMenuContainer {
  display: none;
}

.bagIconContainer {
  position: relative;
}

.bagNotification {
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 14px;
  height: 14px;
  background-color: var(--standard-gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bagNotification span {
  color: var(--standard-white);
  font-size: 9px;
}

@media (max-width: 800px) {
  .mobileMenuContainer {
    display: block;
  }

  .linkContainer {
    display: none;
  }

  .burgerIcon {
    display: flex;
    align-items: center;
  }

  .burgerIcon svg {
    width: 20px;
    height: 20px;
  }

  .hideOnMobile {
    display: none;
  }

  .actionContainers > * {
    margin-right: 16px;
  }

  .actionContainers > *:last-child {
    margin-right: 0px;
  }

  .header {
    padding: 20px 8px;
    margin: 0 8px;
  }

  .searchContainer {
    width: auto;
    padding: 0 32px;
  }

  .searchContainer h4 {
    font-size: 32px;
    line-height: 42px;
  }

  .navLink {
    font-size: 16px;
    position: relative;
    padding: 4px 0;
  }

  .navLink:hover::after,
  .activeLink::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: black;
  }
}
