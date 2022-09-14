import React from 'react';

import todoLogo from '../assets/img/rocket.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <img src={todoLogo} alt="rocket todo logotipo" />
      <span>to</span>
      <span>do</span>
    </div>
  )
}