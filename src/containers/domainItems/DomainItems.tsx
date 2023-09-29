'use client';

import React, { useEffect, useState } from 'react';
import { Domain } from '@/app/core/types/domain.types';
import DomainSort from '@/components/domainSort/DomainSort';
import { DomainItem } from '@/components/domainItem/DomainItem';
import { fetchDomain } from '@/app/core/services/domain.service';
import styles from './DomainItems.module.scss';
import WithCategory from '@/components/filter/withCategory/WithCategory';
import FullFilter from '@/components/filter/fullFilter/FullFilter';

export default function DomainItems() {
  const [domain, setDomain] = useState<Domain[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function getData() {
      try {
        const data = await fetchDomain();
        if (isMounted) {
          setDomain(data);
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

  return (
    <div className={styles.domainContainer}>
      <FullFilter domain={domain} />

      <div className={styles.domainItemsList}>
        <div className={styles.listedItems}>
          {domain.map((item) => (
            <DomainItem value={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
