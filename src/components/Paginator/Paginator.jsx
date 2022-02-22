import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import './styles.scss';

const Paginator = (
  {
    previous,
    next,
    count,
    onChange
  }) => {
  const sizePage =10;
  const getCurrent = () => {
    const nex = !!next ? Number(next): Number(count)/sizePage;
    const prev = !!previous ? Number(previous):0;
    return Math.round((nex+prev)/2);
  }
  const viewedItems = sizePage*getCurrent();
  const firstElementCount = getCurrent()!==1? (previous*sizePage)+1:1;
  const paginationText = `${firstElementCount} to ${viewedItems} of ${count}`
  // console.log(typeof next,previous,currentPage)
  const handleNext = () => next && onChange(next)
  const handlePrevious = () => previous && onChange(previous)

  return (
    <div className="paginator">
      <FontAwesomeIcon
        icon={faCaretLeft}
        className={`paginator-button ${!previous && 'disabled'}`}
        onClick={handlePrevious}
        data-testid={"previous"}
      />
      <div className="paginator-text">{paginationText}</div>
      <FontAwesomeIcon
        icon={faCaretRight}
        className={`paginator-button ${!next && 'disabled'}`}
        onClick={handleNext}
        data-testid={"next"}
      />
    </div>
  );
};

export default Paginator;
