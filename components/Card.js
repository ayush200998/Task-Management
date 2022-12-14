import React from 'react';
import styles from '../styles/Home.module.css';

const Card = (props) => {
  const { children } = props;
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
};

export default Card;
