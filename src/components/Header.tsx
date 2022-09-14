import React from 'react';
import styles from "./Header.module.css";
import todoLogo from "../assets/img/rocket.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={todoLogo} alt="rocket todo logotipo" />
      <span>to</span>
      <span>do</span>
    </div>
  )
}