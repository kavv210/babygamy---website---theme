import React, { useState, useContext, useEffect } from 'react';
import * as styles from './sample.module.css';

import Accordion from '../../components/Accordion';
import AdjustItem from '../../components/AdjustItem';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import SizeList from '../../components/SizeList';
import SwatchList from '../../components/SwatchList';
import Layout from '../../components/Layout/Layout';
import Icon from '../../components/Icons/Icon';
import ProductCardGrid from '../../components/ProductCardGrid';
import { navigate } from 'gatsby';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

// 🧠 Safe dynamic import for Gallery to avoid SSR crash
let Gallery = () => null;
if (typeof window !== 'undefined') {
  Gallery = require('../../components/Gallery').default;
}

// ✅ Updated dummy product
const sampleProduct = {
  name: 'Cozy Oversized Sweater',
  vendor: 'Babygamy',
  gallery: [
    { src: '/images/product1.jpg', alt: 'Front view' },
    { src: '/images/product2.jpg', alt: 'Side view' },
  ],
  colorOptions: ['Blue', 'Pink', 'Mint'],
  sizeOptions: ['XS', 'S', 'M', 'L'],
  price: 1899,
  description:
    'Our Cozy Oversized Sweater is made from a soft blend of cotton and recycled fibers. Perfect for layering in all seasons.',
  productCode: 'BG1234',
};

const suggestions = [
  {
    id: 1,
    title: 'Soft Hoodie',
    image: '/images/suggest1.jpg',
    price: 1499,
  },
  {
    id: 2,
    title: 'Knitted Beanie',
    image: '/images/suggest2.jpg',
    price: 799,
  },
  {
    id: 3,
    title: 'Chic Cropped Jacket',
    image: '/images/suggest3.jpg',
    price: 2499,
  },
  {
    id: 4,
    title: 'Rainbow Scarf',
    image: '/images/suggest4.jpg',
    price: 599,
  },
];

const ProductPage = () => {
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;

  const [qty, setQty] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);
  const [activeSwatch, setActiveSwatch] = useState(sampleProduct.colorOptions[0]);
  const [activeSize, setActiveSize] = useState(sampleProduct.sizeOptions[0]);

  return (
    <Layout>
      <div className={styles.root}>
        <Container size="large" spacing="min">
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Home' },
              { label: 'Men', link: '/shop' },
              { label: 'Sweater', link: '/shop' },
              { label: `${sampleProduct.name}` },
            ]}
          />
          <div className={styles.content}>
            <div className={styles.gallery}>
              <Gallery images={sampleProduct.gallery} />
            </div>
            <div className={styles.details}>
              <h1>{sampleProduct.name}</h1>
              <span className={styles.vendor}>by {sampleProduct.vendor}</span>

              <div className={styles.priceContainer}>
                <CurrencyFormatter appendZero amount={sampleProduct.price} />
              </div>

              <SwatchList
                swatchList={sampleProduct.colorOptions}
                activeSwatch={activeSwatch}
                setActiveSwatch={setActiveSwatch}
              />

              <div className={styles.sizeContainer}>
                <SizeList
                  sizeList={sampleProduct.sizeOptions}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
              </div>

              <div className={styles.quantityContainer}>
                <span>Quantity</span>
                <AdjustItem qty={qty} setQty={setQty} />
              </div>

              <div className={styles.actionContainer}>
                <div className={styles.addToButtonContainer}>
                  <Button onClick={showNotification} fullWidth level="primary">
                    Add to Bag
                  </Button>
                </div>
                <div
                  className={styles.wishlistActionContainer}
                  role="presentation"
                  onClick={() => setIsWishlist(!isWishlist)}
                >
                  <Icon symbol="heart" />
                  <div
                    className={`${styles.heartFillContainer} ${
                      isWishlist ? styles.show : styles.hide
                    }`}
                  >
                    <Icon symbol="heartFill" />
                  </div>
                </div>
              </div>

              <div className={styles.description}>
                <p>{sampleProduct.description}</p>
                <span>Product code: {sampleProduct.productCode}</span>
              </div>

              <div className={styles.informationContainer}>
                <Accordion type="plus" customStyle={styles} title="composition & care">
                  <p className={styles.information}>{sampleProduct.description}</p>
                </Accordion>
                <Accordion type="plus" customStyle={styles} title="delivery & returns">
                  <p className={styles.information}>{sampleProduct.description}</p>
                </Accordion>
                <Accordion type="plus" customStyle={styles} title="help">
                  <p className={styles.information}>{sampleProduct.description}</p>
                </Accordion>
              </div>
            </div>
          </div>

          <div className={styles.suggestionContainer}>
            <h2>You may also like</h2>
            <ProductCardGrid
              spacing
              showSlider
              height={400}
              columns={4}
              data={suggestions}
            />
          </div>
        </Container>

        <div className={styles.attributeContainer}>
          <Split
            image="/images/sustainability.jpg"
            alt="attribute description"
            title="Sustainability"
            description="We design our products to look good and to be used on a daily basis. This is why quality over quantity is a cornerstone of our ethos and we have no interest in trends or seasonal collections."
            ctaText="learn more"
            cta={() => navigate('/blog')}
            bgColor="var(--standard-light-grey)"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
