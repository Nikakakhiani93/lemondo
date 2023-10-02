'use client';

import styles from './page.module.css';
import Header from '../components/header/Header';
import StaticNavMenu from '@/components/navmenu/Navmenu';
import Banner from '@/components/mainbanner/Banner';
import DomainItems from '@/containers/domainItems/DomainItems';
import DomainSort from '@/components/domainSort/DomainSort';
import { useState } from 'react';

export default function Home() {
  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);

  const container1Items = [
    { label: 'დომენი' },
    { label: 'ტრანსფერი' },
    { label: 'ჰოსტინგი' },
    { label: 'Gmail' },
    { label: 'ვებგვერდი' },
    { label: 'დომენის მარკეტი' },
  ];

  const container2Items = [
    { label: 'ჩვენს შესახებ' },
    { label: 'ფასები' },
    { label: 'ბლოგი' },
    { label: 'დახმარება' },
  ];

  const onFilterClick = () => {
    setIsMobileFilterVisible(!isMobileFilterVisible);
  };

  const onFilterClose = () => {
    setIsMobileFilterVisible(false);
  };

  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.navContainer}>
          <div className={styles.navMenus}>
            <StaticNavMenu items={container1Items} />
            <StaticNavMenu items={container2Items} />
          </div>
        </div>
        <Banner />
        <DomainSort onFilterClick={onFilterClick} />
        <DomainItems
          isModalVisible={isMobileFilterVisible}
          onFilterClose={onFilterClose}
        />
      </main>
    </>
  );
}
