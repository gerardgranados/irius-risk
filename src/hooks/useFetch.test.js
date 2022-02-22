import {renderHook, act} from '@testing-library/react-hooks'
import {useFetch} from './useFetch'
import axios from 'axios';
import {parseResponse} from "services/Api/apiHelpers";

jest.mock("axios");
describe('useFetch', () => {
  it("fetch successfully, data, meta, loading, error state is correctly", async () => {
    const response = {
      results:'result',
      count:10,
      next:"https://swapi.dev/api/planets/?page=3",
      previous:"https://swapi.dev/api/planets/?page=1"
    }
    const parsedResponse = parseResponse(response)
    const {data,meta} = parsedResponse;

    const client = axios.get.mockImplementation(() => Promise.resolve(parsedResponse));
    const {result, waitForNextUpdate} = renderHook(() => useFetch(client))
    await waitForNextUpdate()

    expect(result.current.data).toBe(data)
    expect(result.current.meta.count).toBe(meta.count)
    expect(result.current.meta.next).toBe(meta.next)
    expect(result.current.meta.previous).toBe(meta.previous)
    expect(result.current.error).toBeNull()
    expect(result.current.loading).toBeFalsy()

  })

  it("fetch failed", async () => {
    const error = {
      message:'fetch failed'
    }
    const client = axios.get.mockImplementation(() => Promise.reject(error));
    const {result, waitForNextUpdate} = renderHook(() => useFetch(client))
    await waitForNextUpdate()
    expect(result.current.data).toBeNull()
    expect(result.current.meta).toBeNull()
    expect(result.current.loading).toBeFalsy()
    expect(result.current.error).not.toBeNull()
  })

})
