import React from 'react';
import './styles.scss'
import MemoizedIcon from "components/Icon/Icon";
const MultipleIcons = ({icons}) => {
  return icons.map(({icon,onClick},index) => (
    <MemoizedIcon className="multiple-icon" icon={icon} key={index} onClick={onClick}/>
  ))
};

export default MultipleIcons;
