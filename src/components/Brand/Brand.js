import React from 'react';
import { navigate } from 'gatsby';
import * as styles from './Brand.module.css';
import babygamyLogo from './babygamylogo.jpg'; // ✅ import the image

const Brand = () => {
  return (
    <div
      className={styles.root}
      role="presentation"
      onClick={() => navigate('/')}
    >
      <img
        src={babygamyLogo}
        alt="Babygamy Logo"
        className={styles.logo}
      />
    </div>
  );
};

export default Brand;
