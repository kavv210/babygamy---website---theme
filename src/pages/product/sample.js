import React from 'react';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Button from '../../components/Button';

// Define your sampleProduct here
const sampleProduct = {
  name: 'Cozy Oversized Sweater',
  vendor: 'Babygamy',
  image: '/images/product1.jpg',
  price: 1899,
  description:
    'Our Cozy Oversized Sweater is made from a soft blend of cotton and recycled fibers. Perfect for layering in all seasons.',
  productCode: 'BG1234',
};

const ProductPage = () => {
  return (
    <Layout>
      <Container size="medium">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '40px 0' }}>
          <img
            src={sampleProduct.image}
            alt={sampleProduct.name}
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '12px',
              objectFit: 'cover',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
          />
          <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>{sampleProduct.name}</h1>
          <p style={{ fontStyle: 'italic', color: '#777' }}>by {sampleProduct.vendor}</p>
          <CurrencyFormatter appendZero amount={sampleProduct.price} />
          <p>{sampleProduct.description}</p>
          <p style={{ fontSize: '0.85rem', color: '#888' }}>
            Product Code: {sampleProduct.productCode}
          </p>
          <Button fullWidth level="primary">Add to Bag</Button>
        </div>
      </Container>
    </Layout>
  );
};

export default ProductPage;
