import {getResourceImage, manageGender} from "utils/helpers";
import {PEOPLE_SCHEME} from "config/constants/pagesScheme";
export const parsePeopleCard = (item) => {
  let cardProps = {
    image:getResourceImage(item?.url,PEOPLE_SCHEME['imageEndpoint']),
    title:item?.name,
    subtitle:`${item?.height}cm - ${item?.mass}kg` ,
    text:manageGender(item?.gender),
    descriptionRight:null,
  }
  return cardProps
}
