import React, { FC, useState } from 'react';
import styles from './MobileFilter.module.scss';
import Image from 'next/image';
import FullFilter from '@/components/filter/fullFilter/FullFilter';
import { Domain } from '@/app/core/types/domain.types';
import { IFilters } from '@/app//core/types/filter.types';

type FProps = {
  onClose(): void;
  onFltrApply(filters: IFilters): void;
  domain: Domain[];
};

const MobileFilter: FC<FProps> = ({ onClose, onFltrApply, domain }) => {
  const [filters, setFilters] = useState<IFilters>();

  const onFilter = (filter: IFilters) => {
    setFilters(filter);
  };

  const handleFltrClick = () => {
    if (filters) {
      onFltrApply(filters);
    }
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalHeader}>
        <span>ფილტრი</span>
        <Image
          onClick={() => {
            handleFltrClick();
          }}
          src='images/btn-close.svg'
          width={36}
          height={36}
          alt='img'
        />
      </div>
      <FullFilter onSearch={onFilter} domain={domain} isContentVisible />
      <div className={styles.approveButton}>
        <button onClick={handleFltrClick}>ძიება</button>
      </div>
    </div>
  );
};

export default MobileFilter;
