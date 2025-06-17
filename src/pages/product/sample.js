import React from 'react';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Button from '../../components/Button';

const sampleProduct = {
  name: 'Cozy Oversized Sweater',
  vendor: 'Babygamy',
  image: '/images/product1.jpg', // Make sure this exists in static/images/
  price: 1899,
  description:
    'Our Cozy Oversized Sweater is made from a soft blend of cotton and recycled fibers. Perfect for layering in all seasons.',
  productCode: 'BG1234',
};

const ProductPage = () => {
  return (
    <Layout>
      <Container size="medium">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            padding: '40px 0',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <img
            src={sampleProduct.image}
            alt={sampleProduct.name}
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />
          <h1
            style={{
              fontSize: '2.2rem',
              marginBottom: '4px',
              fontFamily: 'cursive',
              color: '#FF69B4',
              textAlign: 'center',
            }}
          >
            {sampleProduct.name}
          </h1>
          <p style={{ fontStyle: 'italic', color: '#888' }}>
            by {sampleProduct.vendor}
          </p>
          <div>
            <CurrencyFormatter appendZero amount={sampleProduct.price} />
          </div>
          <p
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              color: '#444',
              maxWidth: '600px',
              lineHeight: '1.6',
            }}
          >
            {sampleProduct.description}
          </p>
          <p style={{ fontSize: '0.9rem', color: '#777' }}>
            Product Code: {sampleProduct.productCode}
          </p>
          <Button fullWidth level="primary">Add to Bag</Button>
        </div>
      </Container>
    </Layout>
  );
};

export default ProductPage;
