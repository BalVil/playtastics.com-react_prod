import React, { useState } from 'react';
import styles from './Button.module.scss';

function Button({
  variant = 'btn',
  ariaLabel,
  title,
  type = 'button',
  onClick,
  component,
}) {
  const [mouseX, setMouseX] = useState('0px');
  const [mouseY, setMouseY] = useState('0px');

  const handleMouseMove = e => {
    const x = e.nativeEvent.offsetX + 'px';
    const y = e.nativeEvent.offsetY + 'px';
    setMouseX(x);
    setMouseY(y);
  };

  return (
    <button
      aria-label={ariaLabel}
      type={type}
      className={styles[variant]}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      style={{ '--mouse-x': mouseX, '--mouse-y': mouseY }}
    >
      {component} {title}
    </button>
  );
}

export default Button;
