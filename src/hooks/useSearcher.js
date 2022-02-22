import {useEffect, useState} from "react";
import {ORDER_DIRECTIONS} from "config/constants/objectTypes";
import {useFieldChange} from "hooks/useFieldChange";
import {useDebounce} from "hooks/useDebounce";

export function useSearcher({options, onFilter, onSearch}) {
  const initialFilter = options.find(dir => dir.default).value;
  const [filters, setFilters] = useState({
    search: null,
    orderBy: initialFilter,
    direction: ORDER_DIRECTIONS["ascending"]
  })
  const {orderBy, direction, search} = filters;
  const debouncedSearch = useDebounce(search, 1000);
  const handleFilterChange = useFieldChange(setFilters);

  const directionChange = () => {
    if (direction === ORDER_DIRECTIONS["ascending"]) {
      handleFilterChange('direction')(ORDER_DIRECTIONS['descending'])
    } else {
      handleFilterChange('direction')(ORDER_DIRECTIONS['ascending'])
    }
  }
  const orderByChange = (value) => handleFilterChange('orderBy')(value)
  const searchChange = (values) => handleFilterChange('search')(values)

  useEffect(() => {
    onFilter(filters)
  }, [orderBy, direction]);

  useEffect(() =>
      debouncedSearch !== null && onSearch(filters),
    [debouncedSearch]);

  return {filters, directionChange, orderByChange, searchChange};
}
