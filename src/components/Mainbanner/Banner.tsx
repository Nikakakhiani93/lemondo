import react from 'react';
import styles from './Banner.module.scss';

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}></div>
      <p className={styles.textOnBanner}>გაყიდე და იყიდე დომენი მარტივად</p>
    </div>
  );
}
