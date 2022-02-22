import React from 'react';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import './styles.scss'
import MemoizedIcon from "components/Icon/Icon";
import {useTranslation} from "react-i18next";
const SearchInput = ({onChange}) => {
  const handleChange = ({target: {value}}) => onChange(value)
  const {t} = useTranslation()
  return (
    <div className="search">
      <MemoizedIcon icon={faMagnifyingGlass}/>
      <input onChange={handleChange} placeholder={t('filters.search')} data-testid={"search-input"}/>
    </div>
  );
};

export default SearchInput;
