import {checkIsUnknown, getResourceImage} from "utils/helpers";
import {STARSHIPS_SCHEME} from "config/constants/pagesScheme";
import MultipleIcons from "components/MultipleIcons/MultipleIcons";
import {faUserGroup} from "@fortawesome/free-solid-svg-icons";

export const parseStarshipCard = (item) => {
  let cardProps = {
    image: getResourceImage(item?.url, STARSHIPS_SCHEME['imageEndpoint']),
    title: item?.name,
    subtitle: item?.cargo_capacity,
    text: item?.crew,
    descriptionRight: !checkIsUnknown(item?.crew) && <MultipleIcons icons={Array(3).fill({icon: faUserGroup})}/>,
  }
  return cardProps
}
