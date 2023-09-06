import Hero from 'components/Hero';
import ProductsBlock from 'components/ProductsBlock';
import TextBlock from 'components/TextBlock';
import Slider from 'components/Slider';

function Home() {
  return (
    <>
      <Hero />
      <ProductsBlock type="new arrivals" />
      <TextBlock title="Why Choose Us: Elevate Your Artistic Journey" />
      <Slider name="best sellers" />
    </>
  );
}

export default Home;
