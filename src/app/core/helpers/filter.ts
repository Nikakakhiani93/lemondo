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
    const checkedCategories =
      filters.checkedCategories.length === 0 ||
      filters.checkedCategories.includes(item.category);

    const priceMatch =
      item.priceGel >= filters.minPrice && item.priceGel <= filters.maxPrice;

    const symbolLength =
      // Check if the length of the domainName is greater than or equal to the minLenght filter
      item.domainName.length >= filters.minLenght &&
      // Check if the length of the domainName is less than or equal to the maxLenght filter
      item.domainName.length <= filters.maxLenght;

    // Check if the selected domains array is empty or if the current item's domain matches one of the selected domains.
    const checkedDomains =
      filters.checkedDomains.length === 0 ||
      filters.checkedDomains.includes(item.domain);

    return (
      isSearchMatch &&
      priceMatch &&
      symbolLength &&
      checkedDomains &&
      checkedCategories
    );
  });
};
