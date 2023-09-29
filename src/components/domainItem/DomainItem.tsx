'use client';

import React, { FC, useState } from 'react';
import styles from './DomainItem.module.scss';
import Image from 'next/image';
import { Domain } from '@/app/core/types/domain.types';

interface DomainProps {
  value: Domain;
}

export const DomainItem: FC<DomainProps> = ({ value }) => {
  const [onHover, setOnHover] = useState(false);

  const handleTouch = () => {
    setOnHover(true);
  };

  const handleLeave = () => {
    setOnHover(false);
  };

  return (
    <div className={`${styles.domainItem} ${onHover ? styles.hoveredBcg : ''}`}>
      <span className={styles.nameSide}>
        {onHover ? (
          <Image
            src='../images/chevronDownGrn.svg'
            alt='chevronDown'
            width={36}
            height={36}
          />
        ) : (
          <Image
            src='../images/chevronDown.svg'
            alt='chevronDown'
            width={36}
            height={36}
          />
        )}
        <span className={styles.domainName}>{value.domainName}</span>
      </span>
      <div className={styles.amountSide}>
        <span className={styles.domainPrice}>
          <span className={styles.gel}>{value.priceGel} ₾</span>
          <div className={styles.usd}> {value.priceUsd} $</div>
        </span>
        <div
          className={styles.cartBtn}
          onMouseEnter={handleTouch}
          onMouseOut={handleLeave}
        >
          <>
            <Image
              src='../images/checkIcon.svg'
              alt='cartbtn'
              width={20}
              height={20}
            />
            <span className={styles.alreadyInCart}>კალათაშია</span>
          </>
          <>
            <span className={styles.addToCart}>დამატება</span>
            <Image
              src='../images/cartBtn.svg'
              alt='cartbtn'
              width={20}
              height={20}
            />
          </>
        </div>
      </div>
    </div>
  );
};
