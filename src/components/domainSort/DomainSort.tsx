'use client';

import React, { FC, useState } from 'react';
import styles from './DomainSort.module.scss';
import Image from 'next/image';

type FProps = {
  onFilterClick(): void;
};

const DomainSort: FC<FProps> = ({ onFilterClick }) => {
  const handleModal = () => {
    onFilterClick();
  };

  return (
    <>
      <div className={styles.domainSort}>
        <div className={styles.domainsOnMarket}>
          <span className={styles.onMarket}>
            <b>დომენები მარკეტზე:</b>
          </span>
          <span>
            {' '}
            <b>703</b>
          </span>
        </div>
        <div className={styles.sortItems}>
          <span>
            <b>სორტირება: </b>
          </span>
          <span>
            დამატების თარიღით{' '}
            <Image
              src='../images/sortIcon.svg'
              alt='sortIcon'
              width={18}
              height={9}
            />
          </span>
          <span>ვადის ამოწურვით</span>
          <span>ფასით</span>
          <span>ანბანით</span>
        </div>
        <div className={styles.howToBuy}>
          <span>
            <b>როგორ ვიყიდოთ დომენი?</b>
          </span>
        </div>
      </div>

      <>
        <div className={styles.mobileSortAndFilter}>
          <button onClick={handleModal}>
            ფილტრი
            <Image
              src='../images/filter.svg'
              alt='logo'
              width={18}
              height={18}
            />
          </button>
          <button onClick={handleModal}>
            სორტირება
            <Image
              src='../images/dropdown.svg'
              alt='logo'
              width={10}
              height={10}
            />
          </button>
        </div>
      </>
    </>
  );
};

export default DomainSort;
