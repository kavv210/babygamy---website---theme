import React from 'react';
import { parse } from 'query-string';

import Breadcrumbs from '../components/Breadcrumbs';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';
import ProductCardGrid from '../components/ProductCardGrid';

import * as styles from './search.module.css';

// ✅ Define sample data for testing/demo purposes
const sampleData = [
  {
    id: 1,
    name: 'Cozy Oversized Sweater',
    price: 1899,
    vendor: 'Babygamy',
    image: '/images/product1.jpg',
    description: 'A soft and cozy sweater perfect for layering.',
    productCode: 'BG1234',
  },
  {
    id: 2,
    name: 'Y2K Baby Tee',
    price: 899,
    vendor: 'Babygamy',
    image: '/images/product2.jpg',
    description: 'Cute and cropped with a Y2K vibe.',
    productCode: 'BG2345',
  },
  {
    id: 3,
    name: 'Aquamarine Mini Skirt',
    price: 1299,
    vendor: 'Babygamy',
    image: '/images/product3.jpg',
    description: 'Shimmery and soft, perfect for summer.',
    productCode: 'BG3456',
  },
];

const SearchPage = (props) => {
  const params = parse(props.location.search);
  const searchQuery = params.q ? params.q : '';

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Home' },
              { label: `Search results for '${searchQuery}'` },
            ]}
          />
          <div className={styles.searchLabels}>
            <h4>Search results for '{searchQuery}'</h4>
            <span>{sampleData.length} results</span>
          </div>
          <ProductCardGrid
            showSlider={false}
            height={580}
            columns={3}
            data={sampleData}
          />
        </Container>
      </div>
    </Layout>
  );
};

export default SearchPage;
