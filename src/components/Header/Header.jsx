import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import useStickyHeader from 'hooks/useStickyHeader ';
import Cart from 'components/Cart';
import ExpandableSearchIcon from 'components/ExpandableSearchIcon';
import DarkMode from 'components/DarkMode';
import { ReactComponent as Logo } from 'assets/images/playtastics.svg';
import styles from './Header.module.scss';

function Header() {
  const { isCartOpen, isSticky, toggleCartOpen } = useStickyHeader();
  const products = useSelector(state => state.cart.products);
  const matches = useMediaQuery('(min-width:720px)');

  return (
    <header className={`${styles.header} ${isSticky && styles.sticky}`}>
      <div className={styles.container}>
        <ExpandableSearchIcon />

        <NavLink className={styles.logo} to="/">
          <Logo />
        </NavLink>
        <div className={styles.icons}>
          <DarkMode />
          <IconButton onClick={toggleCartOpen}>
            <ShoppingCartOutlinedIcon
              sx={{
                width: `${matches ? '1.8rem' : '1.5rem'}`,
                height: `${matches ? '1.8rem' : '1.5rem'}`,
                position: 'relative',
                borderRadius: '4px',
                transition: 'opacity 0.9s',
                color: products.length > 0 ? '#585BAD' : 'rgba(0, 0, 0, 0.54)',
              }}
            />
            <span className={styles.amount}>{products.length}</span>
          </IconButton>
        </div>
      </div>
      {isCartOpen && <Cart close={toggleCartOpen} />}
    </header>
  );
}

export default Header;
