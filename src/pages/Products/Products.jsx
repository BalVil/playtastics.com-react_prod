import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from 'components/List';
import styles from './Products.module.scss';

function Products() {
  const cat = useParams().category;
  const [maxPrice, setMaxPrice] = useState(100);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div className={styles.products}>
        <ul className={styles.left}>
          <li className={styles.leftItem}>
            <h2 className={styles.itemName}>Filter by price</h2>
            <div className={styles.inputItem}>
              <span>0</span>
              <input
                type="range"
                min={0}
                max={100}
                onChange={e => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </li>
          <li className={styles.leftItem}>
            <h2 className={styles.itemName}>Sort by</h2>
            <div className={styles.inputItem}>
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={() => setSort('asc')}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className={styles.inputItem}>
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={() => setSort('desc')}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </li>
        </ul>
        <div className={styles.right}>
          <List cat={cat} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
    </>
  );
}

export default Products;
