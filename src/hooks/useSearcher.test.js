import {renderHook} from '@testing-library/react-hooks'
import {useSearcher} from 'hooks/useSearcher'
import {waitFor} from "@testing-library/react";
import {ORDER_DIRECTIONS} from "config/constants/objectTypes";

const getNextDirectionValue = (value) => {
  if(value===ORDER_DIRECTIONS['ascending']) return ORDER_DIRECTIONS['descending'];
  return ORDER_DIRECTIONS['ascending']
}
describe('useFetch', () => {
  const filterOptions = [
    {
      label: 'default',
      value: 'url',
      default: true,
      orderFn: () => console.log('order')
    },
    {
      label: 'default',
      value: 'price',
      orderFn: () => console.log('order')
    },
  ]
  const params = {
    options: filterOptions,
    onFilter: jest.fn(),
    onSearch: jest.fn(),
  }
  it("initial orderBy value is correct", async () => {
    const {result} = renderHook(() => useSearcher(params))
    const initialValue = filterOptions.find(item => item?.default).value
    expect(result.current.filters.orderBy).toBe(initialValue)
  })
  it("update orderBy filters correctly and call to onFilterFn", async () => {
    const {result} = renderHook(() => useSearcher(params))
    const newOrderByValue = filterOptions[1].value;
    await waitFor(() => result.current.orderByChange(newOrderByValue));
    expect(result.current.filters.orderBy).toBe(newOrderByValue)
    expect(params.onFilter).toHaveBeenCalled()
  })
  it("update orderBy direction correctly and call to onFilterFn", async () => {
    const {result} = renderHook(() => useSearcher(params))
    let nextValue = getNextDirectionValue(result.current.filters.direction);
    await waitFor(() => result.current.directionChange());
    expect(result.current.filters.direction).toBe(nextValue)
    expect(params.onFilter).toHaveBeenCalled()
  })
  it("update search correctly", async () => {
    const {result, waitForNextUpdate} = renderHook(() => useSearcher(params))
    const searchValue = "search";
    await waitFor(() => result.current.searchChange(searchValue));
    expect(result.current.filters.search).toBe(searchValue)
  })

})
