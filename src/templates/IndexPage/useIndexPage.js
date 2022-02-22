import {useFetch} from "hooks/useFetch";
import {useSearcher} from "hooks/useSearcher";

export function useIndexPage({searcherFilters,client}){
  const {data, setData, loading, error, setError, meta, fetch} = useFetch(client)
  const {count, next, previous} = meta || {};
  const handleFilter = (filters) => {
    const {orderBy, direction} = filters;
    if (data) {
      const sortedValues = sortData(orderBy, direction)
      setData(sortedValues)
    }
  }

  const handleClearError = () => setError(null)
  const handleChangePagination = (page) => fetch(filters, page)
  const sortData = (orderBy, direction) => {
    return [...data]?.sort((a, b) => {
      const orderFn = searcherFilters[orderBy]['orderFn'];
      return orderFn(a[orderBy], b[orderBy], direction)
    });
  }

  const {
    filters,
    directionChange,
    orderByChange,
    searchChange
  } = useSearcher(
    {
      options: Object.values(searcherFilters),
      onFilter: handleFilter,
      onSearch: fetch,
    }
  )
  return {
    data,
    loading,
    error,
    count,
    next,
    previous,
    filters,
    directionChange,
    orderByChange,
    searchChange,
    handleFilter,
    fetch,
    handleChangePagination,
    handleClearError
  }
}
