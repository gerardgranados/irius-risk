import React from 'react';
import Select from "components/Select";
import SearchInput from "components/SearchInput";
import {faArrowDownShortWide, faArrowUpShortWide} from "@fortawesome/free-solid-svg-icons";
import {ORDER_DIRECTIONS} from "config/constants/objectTypes";
import './styles.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Searcher = (
  {options, values, searchChange, directionChange, orderByChange}
) => {
  const {direction, orderBy} = values;

  const Icon = direction === ORDER_DIRECTIONS["ascending"]
    ? faArrowDownShortWide
    : faArrowUpShortWide;

  return (
    <div className="filters">
      <SearchInput
        onChange={searchChange}
      />
      <FontAwesomeIcon
        className={"toggle-diretion"}
        icon={Icon}
        onClick={directionChange}
        data-testid={"toggle-direction"}
      />
      <Select
        testId={"select-filters"}
        defaultValue={orderBy}
        options={options}
        onChange={orderByChange}
      />
    </div>
  );
};

export default Searcher;
