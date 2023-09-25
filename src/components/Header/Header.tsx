import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <header className={styles.header_nav}>
        <div className={styles.logo}>
          <a href='#'>
            <img src='images/logo.svg' alt='' />
          </a>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href='#'>
                <img src='images/notification.svg' alt='' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src='images/cart.svg' alt='' />
              </a>
            </li>

            <li>
              <a href='#'>Username</a>
            </li>
            <li>
              <a href='#'>
                <img src='images/flag.svg' alt='' />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
