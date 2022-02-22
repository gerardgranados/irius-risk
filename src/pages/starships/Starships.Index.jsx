import React from 'react';
import IndexPage from "templates/IndexPage/IndexPage";
import {useTranslation} from "react-i18next";
import {STARSHIPS_SCHEME} from "config/constants/pagesScheme";

const StarshipsIndex = () => {
  const {t} = useTranslation()
  const {title,client,filters,cardParseFn,imageEndpoint} = STARSHIPS_SCHEME

  return (
   <IndexPage
     client={client}
     title={title}
     searcherFilters={filters}
     cardParseFn={cardParseFn}
   />
  );
};

export default StarshipsIndex;
