import {ORDER_DIRECTIONS} from "config/constants/objectTypes";

export const getIdFromUrl = (url) => {
  return url.split('/')[url.split('/').length - 2]
}
export const removeSlash = (value) => value?.replace(/,/g, "")

export const orderNumbers = (aProperty, bProperty, direction) => {
  let numA = parseInt(removeSlash(aProperty));
  if (isNaN(numA)) numA = -1;
  let numB = parseInt(removeSlash(bProperty));
  if (isNaN(numB)) numB = -1;
  if (direction === ORDER_DIRECTIONS['descending']) return numA - numB
  return numB - numA;
}

export const orderIdFromUrl = (aProperty, bProperty, direction) => {
  const idA = getIdFromUrl(aProperty);
  const idB = getIdFromUrl(bProperty);
  if (direction === ORDER_DIRECTIONS['ascending']) return Number(idA) - Number(idB)
  return Number(idB) - Number(idA)
}

export const orderString = (a, b, direction) => {
  if (direction === ORDER_DIRECTIONS['ascending']) return a.localeCompare(b)
  return b.localeCompare(a)
}

export const manageGender = (value) => {
  if (checkIsUnknown('unknown')) return 'unknown';
  return value;
}

export const getResourceImage = (url, endpoint) => {
  const imgURL = `${process.env.REACT_APP_RESOURCES_API}/${endpoint}`
  const idResource = getIdFromUrl(url);
  return `${imgURL}/${idResource}.jpg`
}

export const getPageFromUrl = (url) => {
  return url?.split('page=')[1]
}
export const checkIsUnknown = (value) => value === "unknown";
