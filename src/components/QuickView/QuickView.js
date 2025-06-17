import React, { useState, useContext } from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import SizeList from '../SizeList';
import SwatchList from '../SwatchList';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

import * as styles from './QuickView.module.css';
import { toOptimizedImage } from '../../helpers/general';

// ✅ Define sampleProduct here
const sampleProduct = {
  name: 'Cozy Oversized Sweater',
  vendor: 'Babygamy',
  image: '/images/product1.jpg',
  alt: 'Image of Cozy Oversized Sweater',
  price: 1899,
  description:
    'Made from a soft blend of cotton and recycled fibers. Perfect for layering in all seasons.',
  productCode: 'BG1234',
  colorOptions: [
    { name: 'Pink', hex: '#FFC0CB' },
    { name: 'Blue', hex: '#ADD8E6' },
    { name: 'Beige', hex: '#F5F5DC' }
  ],
  sizeOptions: ['XS', 'S', 'M', 'L', 'XL']
};

const QuickView = (props) => {
  const { close, buttonTitle = 'Add to Bag' } = props;

  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;

  const [activeSwatch, setActiveSwatch] = useState(sampleProduct.colorOptions[0]);
  const [activeSize, setActiveSize] = useState(sampleProduct.sizeOptions[0]);

  const handleAddToBag = () => {
    close();
    showNotification();
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Select Options</h4>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.productContainer}>
          <span className={styles.productName}>{sampleProduct.name}</span>
          <div className={styles.price}>
            <CurrencyFormatter amount={sampleProduct.price} />
          </div>
          <div className={styles.productImageContainer}>
            <img
              alt={sampleProduct.alt}
              src={toOptimizedImage(sampleProduct.image)}
            />
          </div>
        </div>

        <div className={styles.sectionContainer}>
          <SwatchList
            swatchList={sampleProduct.colorOptions}
            activeSwatch={activeSwatch}
            setActiveSwatch={setActiveSwatch}
          />
        </div>

        <div className={styles.sectionContainer}>
          <SizeList
            sizeList={sampleProduct.sizeOptions}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
          />
        </div>

        <Button onClick={handleAddToBag} fullWidth level="primary">
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default QuickView;
