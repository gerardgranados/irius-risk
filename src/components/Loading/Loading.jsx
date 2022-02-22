import React from 'react';
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import './styles.scss';
import MemoizedIcon from "components/Icon/Icon";
const Loading = () => {
  return (
    <div className="loading">
      <MemoizedIcon icon={faSpinner} spin/>
    </div>
  );
};

export default Loading;
