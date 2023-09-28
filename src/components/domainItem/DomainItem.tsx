import React from 'react';
import styles from './DomainItem.module.scss';
import Image from 'next/image';

export default function DomainItem() {
  return (
    <div className={styles.domainItem}>
      <div className={styles.nameSide}>
        <Image
          src='../images/chevronDown.svg'
          alt='chevronDown'
          width={36}
          height={36}
        />
        <Image
          src='../images/chevronDownGrn.svg'
          alt='chevronDown'
          width={36}
          height={36}
        />
        <span className={styles.domainName}>gijashvili.com.ge</span>
      </div>
      <div className={styles.amountSide}>
        <div className={styles.domainPrice}>
          <div className={styles.gel}>40 000 ₾</div>
          <div className={styles.usd}> 14 285.7 $</div>
        </div>
        <div className={styles.cartBtn}>
          <>
            <Image
              src='../images/checkIcon.svg'
              alt='cartbtn'
              width={20}
              height={20}
            />
            <span>კალათაშია</span>
          </>
          <>
            <span>დამატება</span>
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
}
