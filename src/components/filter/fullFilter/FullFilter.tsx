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
  const [domains, setDomains] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [pureDomain, setPureDomain] = useState(domain);
  const [matchDomains, setMatchDomains] = useState<boolean>(true);

  // useEffect(() => {
  //   const applyFilter = (item: { domainName: string }) =>
  //     item.domainName.toLowerCase().includes(search.toLowerCase());

  //   const filteredList = domain.filter(applyFilter);
  //   setPureDomain(filteredList);
  //   setMatchDomains(filteredList.length > 0);
  // }, [search, domain]);

  // Handle search query
  const handleSearch = (query: string) => {
    setSearch(query);
  };

  // Get unique categories from domain list
  useEffect(() => {
    const newCategories = [...new Set(domain.map((item) => item.category))];
    setCategories(newCategories);
  }, [domain]);

  // useEffect(() => {
  //   const uniqueDomains = [...new Set(domain.map((item) => item.domain))];
  //   setDomains(uniqueDomains);
  // }, [domain]);

  useEffect(() => {
    const filter: IFilters = {
      search,
      // Filters to be passed to the API call
      selectedDomains: [],
      checkedCategories: checkedCategories,
    };

    onSearch(filter);
  });

  const handleCategoryChange = (category: string) => {
    // If the category is already checked, uncheck it
    if (checkedCategories.includes(category)) {
      setCheckedCategories((prev) => prev.filter((c) => c !== category));

      // Otherwise, check it
    } else {
      setCheckedCategories((prev) => [...prev, category]);
    }
    // Scroll back to the top of the page once checked
    window.scrollTo(0, 0);
  };
  return (
    <div className={styles.allInOneFilters}>
      <WithName onSearch={handleSearch} />
      <WithCategory
        categories={categories}
        checkedCategories={checkedCategories}
        onDropChange={handleCategoryChange}
      />
    </div>
  );
};

export default FullFilter;
