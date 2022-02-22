import React from 'react';
import './styles.scss'
const Grid = ({children}) => {
  return (
    <div className="grid">
      {children}
    </div>
  );
};

export default Grid;
