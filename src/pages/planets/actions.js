import {getResourceImage} from "utils/helpers";
import {PLANETS_SCHEME} from "config/constants/pagesScheme";
import MultipleIcons from "components/MultipleIcons/MultipleIcons";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {abbreviateNumber, checkIsNumber} from "utils/mathHelpers";

export const managePopulation = (population) => {
  const parseNumber = Number(population)
  if (checkIsNumber(parseNumber)) return `Population of ${abbreviateNumber(parseNumber)}`
  return `Unknown population`
}


export const parsePlanetCard = (item) => {
  let cardProps = {
    image:getResourceImage(item?.url,PLANETS_SCHEME['imageEndpoint']),
    title:item?.name,
    subtitle:item?.terrain,
    text:managePopulation(item?.population),
    descriptionRight:checkIsNumber(item?.population) && <MultipleIcons icons={Array(3).fill({icon:faCircleUser})}/>,
  }
  return cardProps
}
