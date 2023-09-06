import Section from 'components/Section';
import Container from 'components/Container';
import Card from 'components/Card';
import styles from './ProductsBlock.module.scss';
import products from '../../data/products.json';

function ProductsBlock({ type }) {
  return (
    <Section variant="products">
      <Container>
        <h2 className={styles.sectionTitle}>{type}</h2>
        <div className={styles.products}>
          {products?.map(item =>
            item.type === type ? (
              <li className={styles.productsItem} key={item.id}>
                <Card item={item} type={type} />
              </li>
            ) : null
          )}
        </div>
      </Container>
    </Section>
  );
}

export default ProductsBlock;
