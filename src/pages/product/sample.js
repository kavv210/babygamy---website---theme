// src/pages/account/viewed.js

import React from 'react';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container';
import Breadcrumbs from '../../components/Breadcrumbs';

// A simple, safe "Recently Viewed" page with no runtime errors
const ViewedPage = () => {
  return (
    <Layout>
      <Container size="medium">
        <Breadcrumbs
          crumbs={[
            { link: '/', label: 'Home' },
            { label: 'Recently Viewed' },
          ]}
        />
        <div style={{ padding: '40px 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>
            Recently Viewed
          </h2>
          <p style={{ color: '#777' }}>
            You haven’t viewed any products yet.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default ViewedPage;
