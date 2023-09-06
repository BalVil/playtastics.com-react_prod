import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  NavigateBeforeRounded,
  NavigateNextRounded,
} from '@mui/icons-material';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import products from '../../data/products.json';
import styles from './Slider.module.scss';

const MOBILE_BREAKPOINT = 720;
const SLIDE_INTERVAL = 56000; // 6 seconds

function Slider({ name }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [numSlides, setNumSlides] = useState(0);

  const popularProducts = products.filter(item => item.category === name);
  const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

  const updateNumSlides = useCallback(() => {
    const newNumSlides = !isMobile
      ? Math.ceil(popularProducts.length / 2)
      : Math.ceil(popularProducts.length);
    setNumSlides(newNumSlides);
  }, [popularProducts, isMobile]);

  useEffect(() => {
    // Update the number of slides on component mount and window resize
    updateNumSlides();

    const handleResize = () => updateNumSlides();
    window.addEventListener('resize', handleResize);

    // Set interval to automatically slide to the next item
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => {
        if (isMobile) {
          return prev === numSlides - 1 ? 0 : prev + 1;
        } else {
          return prev === numSlides ? 0 : prev + 1;
        }
      });
    }, SLIDE_INTERVAL);

    // Clean up event listener and interval on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(slideInterval);
    };
  }, [isMobile, numSlides, updateNumSlides]);

  const prevSlide = () => {
    setCurrentSlide(prev => {
      if (isMobile) {
        return prev === 0 ? numSlides - 1 : prev - 1;
      } else {
        return prev === 0 ? numSlides : prev - 1;
      }
    });
  };

  const nextSlide = () => {
    setCurrentSlide(prev => {
      if (isMobile) {
        return prev === numSlides - 1 ? 0 : prev + 1;
      } else {
        return prev === numSlides ? 0 : prev + 1;
      }
    });
  };

  const calculateSlideTransform = () => {
    if (isMobile) {
      return `translateX(-${currentSlide * (100 / popularProducts.length)}%)`;
    } else {
      return `translateX(-${currentSlide * (100 / popularProducts.length)}%)`;
    }
  };

  return (
    <Section variant="products">
      <Container>
        <h2 className={styles.sectionTitle}>{name}</h2>
        <div className={styles.slider}>
          <div
            className={styles.itemList}
            style={{
              transform: calculateSlideTransform(),
              transition: 'transform 1s ease',
            }}
          >
            {popularProducts.map(item => (
              <Link
                to={`/product/${item?.id}`}
                className={styles.cardLink}
                key={item.id}
              >
                <div className={styles.card}>
                  <ul className={styles.cardImage}>
                    <li>
                      <img
                        src={item?.image}
                        alt={item?.title}
                        className={styles.mainImage}
                      />
                    </li>
                    {item.image2 && (
                      <li>
                        <img
                          src={item?.image2}
                          alt={item?.title}
                          className={styles.secondImage}
                        />
                      </li>
                    )}
                  </ul>
                  <div className={styles.desc}>
                    <h2 className={styles.title}>{item?.title}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <ul className={styles.controls}>
            <li onClick={prevSlide}>
              <NavigateBeforeRounded color="error" sx={{ fontSize: '44px' }} />
            </li>
            <li onClick={nextSlide}>
              <NavigateNextRounded color="error" sx={{ fontSize: '44px' }} />
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export default Slider;
