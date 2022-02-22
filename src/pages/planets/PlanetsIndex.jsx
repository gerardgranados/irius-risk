import React from 'react';
import IndexPage from "templates/IndexPage/IndexPage";
import {useTranslation} from "react-i18next";
import {PLANETS_SCHEME} from "config/constants/pagesScheme";

const PlanetsIndex = () => {
  const {t} = useTranslation()
  const {title,client,filters,cardParseFn} = PLANETS_SCHEME;

  return (
    <IndexPage
      client={client}
      title={title}
      searcherFilters={filters}
      cardParseFn={cardParseFn}
    />
  )
};

export default PlanetsIndex;
