'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Domain } from '@/app/core/types/domain.types';
import { DomainItem } from '@/components/domainItem/DomainItem';
import { fetchDomain } from '@/app/core/services/domain.service';
import styles from './DomainItems.module.scss';
import FullFilter from '@/components/filter/fullFilter/FullFilter';
import { IFilters } from '@/app/core/types/filter.types';
import { filterDomains } from '@/app/core/helpers/filter';

export default function DomainItems() {
  const [domain, setDomain] = useState<Domain[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [searchedItems, setSearchedItems] = useState<Domain[]>(domain);

  useEffect(() => {
    let isMounted = true;

    async function getData() {
      try {
        const data = await fetchDomain();
        // If component is mounted, update state with new data
        if (isMounted) {
          setDomain(data);
          setSearchedItems(data);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err);
        }
      }
    }

    getData();

    return () => {
      isMounted = false;
    };
  }, []);

  const onSearch = (filters: IFilters) => {
    // Filter the domain list based on the filters
    const filterdList = filterDomains(domain, filters);
    setSearchedItems(filterdList);
  };

  return (
    <div className={styles.domainContainer}>
      <FullFilter onSearch={onSearch} domain={domain} />

      {searchedItems.length > 0 ? (
        <div className={styles.domainItemsList}>
          <div className={styles.listedItems}>
            {searchedItems.map((item) => (
              <DomainItem value={item} key={item.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.nothingToShow}>
          <Image
            src='/images/errorImg.svg'
            alt='Nothing to show'
            width={200}
            height={170}
          />
          <p>დომენი ვერ მოიძებნა</p>
          <span>
            მითითებული პარამეტრებით დომენების მარკეტში შედეგები ვერ მოიძებნა,
            შეცვალეთ ძიების პარამეტრები და ცადეთ თავიდან
          </span>
        </div>
      )}
    </div>
  );
}
