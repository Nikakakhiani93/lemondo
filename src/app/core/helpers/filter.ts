import { Domain } from '../types/domain.types';
import { IFilters } from '../types/filter.types';

export const filterDomains = (data: Domain[], filters: IFilters) => {
  // Return a filtered array of data based on the filters passed in.
  return data.filter((item) => {
    // Check if the search query matches the current item's domain name.
    const isSearchMatch = item.domainName
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    // Check if the selected categories array is empty or if the current item's category matches one of the selected categories.
    const isCategorySame =
      filters.checkedCategories.length === 0 ||
      filters.checkedCategories.includes(item.category);

    // Check if the selected domains array is empty or if the current item's domain matches one of the selected domains.
    // const isDomainMatch =
    //   filters.selectedDomains.length === 0 ||
    //   filters.selectedDomains.includes(item.domain);

    return isCategorySame && isSearchMatch;
  });
};
