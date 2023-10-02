'use client';

import React from 'react';
import styles from './Header.module.scss';
import { useCart } from '../cart/cart';

const Header: React.FC = () => {
  const { ItemCount } = useCart();
  return (
    <>
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
                <a href='#' className={styles.cart}>
                  <img src='images/cart.svg' alt='' />
                  <div className={styles.cartBadge}>{ItemCount}</div>
                </a>
              </li>

              <li>
                <a href='#' className={styles.username}>
                  <img className={styles.human} src='images/human.svg' alt='' />{' '}
                  Username
                  <img
                    className={styles.expand}
                    src='images/expand.svg'
                    alt=''
                  />
                </a>
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

      <div className={styles.header_mob}>
        <header className={styles.header_nav__mobile}>
          <div className={styles.logo_mob}>
            <a href='#'>
              <img className={styles.burger} src='images/burger.svg' alt='' />
              <img src='images/logo.svg' alt='' />
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <a href='#'>
                  <img src='images/notification.svg' alt='' />
                </a>
              </li>
              <li>
                {' '}
                <a href='#' className={styles.mobileBadge}>
                  <img src='images/cart.svg' alt='' />
                  <div className={styles.cartBadge}>{ItemCount}</div>
                </a>
              </li>
              <li>
                <a href='#' className={styles.username}>
                  <img src='images/human.svg' alt='' />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
