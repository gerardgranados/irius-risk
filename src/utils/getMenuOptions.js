import {faEarth, faJetFighter, faTruck, faUsers} from "@fortawesome/free-solid-svg-icons";

export const getMenuOptions = (t) => {
  const MENU_OPTIONS = [
    {
      route:'/planets',
      name:t('sections.planets'),
      icon:faEarth
    },
    {
      route:'/starships',
      name:t('sections.starships'),
      icon:faJetFighter,
    },
    {
      route:'/people',
      name:t('sections.people'),
      icon:faUsers,
    },
    {
      route:'/vehicles',
      name:t('sections.vehicles'),
      icon:faTruck
    },
  ]
  return MENU_OPTIONS;

}
