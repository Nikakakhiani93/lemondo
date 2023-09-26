import react from 'react';
import styles from './Banner.module.scss';

import React from 'react';

export default function Banner() {
  return (
    <div>
      <img className={styles.banner} src='images/banner.png' alt='banner' />
    </div>
  );
}
