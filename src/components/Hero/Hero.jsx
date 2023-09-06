import { NavLink } from 'react-router-dom';
import styles from './Hero.module.scss';

function Hero() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.linkWrap}>
          <NavLink to={'/products'} className={styles.link}>
            <span>View all</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Hero;
