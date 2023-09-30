'use client';

import React, { FC, useState } from 'react';
import styles from './DomainItem.module.scss';
import Image from 'next/image';
import { Domain } from '@/app/core/types/domain.types';
import { useCart } from '../cart/cart';

interface DomainProps {
  value: Domain;
}

export const DomainItem: FC<DomainProps> = ({ value }) => {
  const [onHover, setOnHover] = useState(false);
  const [mouseClick, setOnMouseClick] = useState(false);
  const [onIcon, setOnIcon] = useState(false);
  const { cartItem, addToCart, removeFromCart } = useCart();

  const handleTouch = () => {
    setOnHover(true);
  };

  const handleLeave = () => {
    setOnHover(false);
  };

  const handleClick = () => {
    setOnMouseClick(!mouseClick);
    setOnIcon(!onIcon);

    const inCart = cartItem.find((item) => item.id === value.id);

    if (mouseClick) {
      if (inCart) {
        removeFromCart(value.id);
      }
    } else {
      if (!inCart) {
        addToCart(value);
      }
    }
  };

  return (
    <div className={`${styles.domainItem} ${onHover ? styles.hoveredBg : ''}`}>
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
          className={`${styles.cartBtn} ${mouseClick ? styles.mouseClick : ''}`}
          onMouseEnter={handleTouch}
          onMouseOut={handleLeave}
          onClick={handleClick}
        >
          {mouseClick ? (
            <>
              <Image
                src={
                  onIcon ? '../images/checkIcon.svg' : '../images/cartBtn.svg'
                }
                alt='cartbtn'
                width={onIcon ? 20 : 20}
                height={onIcon ? 20 : 20}
              />
              <span className={styles.alreadyInCart}>კალათაშია</span>
            </>
          ) : (
            <>
              <span className={styles.addToCart}>დამატება</span>
              <Image
                src={
                  onIcon ? '../images/checkIcon.svg' : '../images/cartBtn.svg'
                }
                alt='cartbtn'
                width={onIcon ? 20 : 20}
                height={onIcon ? 20 : 20}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
