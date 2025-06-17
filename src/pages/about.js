import React, { useRef } from 'react';
import Container from '../components/Container';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';
import * as styles from './about.module.css';

const AboutPage = () => {
  const storyRef = useRef();
  const valuesRef = useRef();
  const sustainabilityRef = useRef();

  const handleScroll = (ref) => {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100, // Adjust scroll padding
        behavior: 'smooth',
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Header with logo and nav */}
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src="/babygamylogo.jpg" alt="Babygamy Logo" />
          </div>
          <div className={styles.navContainer}>
            <ThemeLink onClick={() => handleScroll(storyRef)} to="#story">Our Story</ThemeLink>
            <ThemeLink onClick={() => handleScroll(valuesRef)} to="#values">Why Babygamy</ThemeLink>
            <ThemeLink onClick={() => handleScroll(sustainabilityRef)} to="#sustainability">Sustainability</ThemeLink>
          </div>
        </div>

        {/* Section: Our Story */}
        <Container size="large" spacing="min">
          <div ref={storyRef} id="story">
            <h3>Babygamy — Organic Love, Woven Gently</h3>
            <p>
              Born from the hands of a mother, Babygamy is a promise of softness and care. Founded with a single goal—to make baby essentials that feel like a hug—every piece we create is rooted in trust, tenderness, and the belief that less is more.
            </p>
            <p>
              Our 100% cotton muslin swaddles are crafted from the softest natural fibres, sourced and made entirely in India. They’re lightweight, breathable, and versatile—designed to calm your baby, keep them cosy, and help them sleep longer and better (while you catch a few extra minutes of rest too).
            </p>
          </div>
        </Container>

        {/* Section: Why Babygamy */}
        <Container size="large" spacing="min">
          <div ref={valuesRef} id="values">
            <h3>Why Babygamy?</h3>
            <p>
              Every Babygamy product is created with intention. We focus on gentle materials, clean designs, and essentials that truly matter—no fuss, just functional beauty.
            </p>
            <ul>
              <li>100% organic cotton muslin — soft, breathable, and naturally antibacterial</li>
              <li>Chemical-free and safe for delicate skin</li>
              <li>Designed for warmth, comfort, and everyday magic</li>
              <li>Made in India with love and care</li>
            </ul>
            <p>
              We don't follow trends. We follow feelings. Everything we make is built to support little ones and soothe new parents in life’s tenderest moments.
            </p>
          </div>
        </Container>

        {/* Section: Sustainability */}
        <Container size="large" spacing="min">
          <div ref={sustainabilityRef} id="sustainability">
            <h3>Sustainability at Heart</h3>
            <p>
              Babygamy believes in conscious choices. All our fabrics are organic, and our process is rooted in simplicity and sustainability. By using natural materials and local sourcing, we reduce our footprint while offering products you can feel proud to use.
            </p>
            <p>
              Soft on the skin. Kind to the planet. That's the Babygamy way.
            </p>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default AboutPage;
