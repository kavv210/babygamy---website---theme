import React, { useState } from 'react';
import * as styles from './shopV2.module.css';

import Accordion from '../components/Accordion';
import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import Checkbox from '../components/Checkbox';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
import Button from '../components/Button';

import Config from '../config.json';

// ✅ Declare filters (You must define this or import it from somewhere)
const filters = [
  {
    category: 'Size',
    items: [
      { name: 'S', value: false },
      { name: 'M', value: false },
      { name: 'L', value: false },
    ],
  },
  {
    category: 'Color',
    items: [
      { name: 'Red', value: false },
      { name: 'Blue', value: false },
    ],
  },
];

const data = []; // ✅ Dummy data for ProductCardGrid

const ShopV2Page = () => {
  const [filterState, setFilterState] = useState(filters);

  const filterTick = (e, categoryIndex, labelIndex) => {
    const filterStateCopy = [...filterState];
    filterStateCopy[categoryIndex].items[labelIndex].value = !filterStateCopy[categoryIndex].items[labelIndex].value;
    setFilterState(filterStateCopy);
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[{ link: '/', label: 'Home' }, { label: 'Woman' }]}
          />
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Woman`}
          subtitle={
            'Look to our women’s sweaters for modern takes on one-and-done dressing. From midis in bold prints to dramatic floor-sweeping styles and easy all-in-ones, our edit covers every mood.'
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <div className={styles.filterContainer}>
              {filterState.map((category, categoryIndex) => {
                return (
                  <div key={categoryIndex}>
                    <Accordion customStyle={styles} title={category.category}>
                      {category.items.map((item, itemIndex) => {
                        return (
                          <div key={itemIndex} className={styles.filters}>
                            <Checkbox
                              size={'sm'}
                              action={(e) =>
                                filterTick(e, categoryIndex, itemIndex)
                              }
                              label={item.name}
                              value={item.value}
                              id={item.name}
                              name={item.name}
                            />
                          </div>
                        );
                      })}
                    </Accordion>
                  </div>
                );
              })}
            </div>
            <div>
              <div className={styles.metaContainer}>
                <span className={`standardSpan`}>476 items</span>
              </div>
              <ProductCardGrid height={'440px'} data={data}></ProductCardGrid>
            </div>
          </div>
          <div className={styles.loadMoreContainer}>
            <span>6 of 456</span>
            <Button fullWidth level={'secondary'}>
              LOAD MORE
            </Button>
          </div>
        </Container>
      </div>
      <LayoutOption />
    </Layout>
  );
};

export default ShopV2Page;
