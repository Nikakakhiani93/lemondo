import React from 'react';
import styles from './navmenu.module.scss';
type MenuItem = {
  label: string;
};

const StaticNavMenu: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href='#'>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StaticNavMenu;
