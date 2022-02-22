import React from 'react';
import './styles.scss';
import {useTranslation} from "react-i18next";
const Select = ({options,onChange,defaultValue,testId}) => {
  const handleChange = e => onChange(e.target.value)
  const {t} = useTranslation()
  return (
    <select
      defaultValue={defaultValue}
      className="select"
      onChange={handleChange}
      data-testid={testId}
    >
      {options.map(({value,label},index) =>
        <option key={index} value={value}>{t(label)}</option>
      )}
    </select>
  )
};

export default Select;
