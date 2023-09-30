'use client';

import React, { useEffect, useState } from 'react';
import styles from './FullFilter.module.scss';
import WithCategory from '../withCategory/WithCategory';
import { Domain } from '@/app/core/types/domain.types';
import WithName from '@/components/filter/withName/WithName';
import { IFilters } from '@/app/core/types/filter.types';

interface FilterProps {
  domain: Domain[];
  onSearch: (filters: IFilters) => void;
}

const FullFilter: React.FC<FilterProps> = ({ domain, onSearch }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [checkedCategories, setcheckedCategories] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [pureDomain, setPureDomain] = useState(domain);
  const [matchDomains, setMatchDomains] = useState<boolean>(true);

  useEffect(() => {
    const applyFilter = (item: { domainName: string }) =>
      item.domainName.toLowerCase().includes(search.toLowerCase());

    const filteredList = domain.filter(applyFilter);
    setPureDomain(filteredList);
    setMatchDomains(filteredList.length > 0);
  }, [search, domain]);

  useEffect(() => {
    const filter: IFilters = {
      search,
      // Filters to be passed to the API call
      selectedCategories: [],
      selectedDomains: [],
    };

    onSearch(filter);
  }, [domain, search, categories]);

  // Handle search query
  const handleSearch = (query: string) => {
    setSearch(query);
  };

  // Get unique categories from domain list
  useEffect(() => {
    const newCategories = [...new Set(domain.map((item) => item.category))];
    setCategories(newCategories);
  }, [domain]);

  return (
    <div className={styles.allInOneFilters}>
      <WithName onSearch={handleSearch} />
      <WithCategory
        categories={categories}
        checkedCategories={checkedCategories}
        onDropChange={function (category: string): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};

export default FullFilter;
