import { useEffect, useState } from 'react';

const useStickyHeader = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    document.body.style.overflow = 'unset';
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isCartOpen]);

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return {
    isCartOpen,
    showNavbar,
    isSticky: scrollPosition >= 100,
    handleShowNavbar,
    toggleCartOpen,
  };
};

export default useStickyHeader;
