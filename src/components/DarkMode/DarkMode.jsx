import React from 'react';
import { ReactComponent as Sun } from 'assets/images/sun.svg';
import { ReactComponent as Moon } from 'assets/images/moon.svg';
import styles from './DarkMode.module.scss';

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
  };

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
  };

  const toggleTheme = e => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className={styles.darkMode}>
      <input
        className={styles.input}
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className={styles.label} htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
