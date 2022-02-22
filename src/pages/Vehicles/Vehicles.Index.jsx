import React from 'react';
import IndexPage from "templates/IndexPage/IndexPage";
import {VEHICLES_SCHEME} from "config/constants/pagesScheme";

const VehiclesIndex = () => {
  const {client,title,filters,cardParseFn} = VEHICLES_SCHEME
  return (
    <IndexPage
      client={client}
      title={title}
      searcherFilters={filters}
      cardParseFn={cardParseFn}
    />
  );
};

export default VehiclesIndex;
