import {getPageFromUrl} from "utils/helpers";

export const parseResponse = (response) => {
  const parsedResponse = {
    data: response.results,
    meta: {
      count: response.count,
      next: getPageFromUrl(response.next),
      previous: getPageFromUrl(response.previous)
    }
  }
  return parsedResponse
}
