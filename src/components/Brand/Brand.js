import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* Replaced SVG with babygamylogo.jpg image */}
      <img
        src="/babygamylogo.jpg"
        alt="Babygamy"
        width={127}
        height={24}
        className={styles.logo}
      />
    </div>
  );
};

export default Brand;
