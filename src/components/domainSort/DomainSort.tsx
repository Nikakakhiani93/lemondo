import React from 'react';
import styles from './DomainSort.module.scss';
import Image from 'next/image';

export default function DomainSort() {
  return (
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
  );
}
