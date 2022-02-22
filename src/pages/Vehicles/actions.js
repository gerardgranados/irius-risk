import {getResourceImage} from "utils/helpers";
import {VEHICLES_SCHEME} from "config/constants/pagesScheme";
import {abbreviateNumber, checkIsNumber} from "utils/mathHelpers";

const createPassengerText = (passengers) => {
  const parseNumber = Number(passengers)
  if (checkIsNumber(parseNumber)) {
    const numDecimal = abbreviateNumber(parseNumber);
    return `${numDecimal} ${passengers>1 ?'Passengers' : 'Passenger'}`
  }
  return `Unknown Passengers`
}

export const parseVehicleCard = (item) => {
  const cardProps = {
    image:getResourceImage(item?.url,VEHICLES_SCHEME['imageEndpoint']),
    title:item?.name,
    subtitle:item?.model,
    text:createPassengerText(item?.passengers),
    descriptionRight:null,
  }
  return cardProps
}
