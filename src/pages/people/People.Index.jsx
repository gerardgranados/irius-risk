import React from 'react';
import IndexPage from "templates/IndexPage/IndexPage";
import {useTranslation} from "react-i18next";
import {PEOPLE_SCHEME} from "config/constants/pagesScheme";


const PeopleIndex = () => {
  const {t} = useTranslation()
  const {client,title,filters,cardParseFn,imageEndpoint} = PEOPLE_SCHEME

  return (
    <IndexPage
      client={client}
      title={title}
      searcherFilters={filters}
      cardParseFn={cardParseFn}
    />
  )
};

export default PeopleIndex;
