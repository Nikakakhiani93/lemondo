'use client';

import React, { useEffect, useState } from 'react';
import WithCategory from '../withCategory/WithCategory';
import { IFilters } from '@/app/core/types/filter.types';
import { Domain } from '@/app/core/types/domain.types';

interface FilterProps {
  domain: Domain[];
  // onSearch: (filters: IFilters) => void;
  // minPrice: number;
  // maxPrice: number;
  // priceValues: number[];
}

const FullFilter: React.FC<FilterProps> = ({ domain }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [checkedCategories, setcheckedCategories] = useState<string[]>([]);
  const [symbolRange, setSymbolRange] = useState<number[]>([4, 21]);

  const handleSymbolChange = (values: number[]) => {
    setSymbolRange(values);
  };

  useEffect(() => {
    const newCategories = [...new Set(domain.map((item) => item.category))];
    setCategories(newCategories);
  }, [domain]);

  return (
    <WithCategory
      categories={categories}
      checkedCategories={checkedCategories}
    />
  );
};

export default FullFilter;
