import React from 'react';
import './styles.scss'
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {manageErrorText} from "utils/errorsHelpers";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ErrorAlert = ({error, onHide}) => {
  return (
    <div className="error-wrapper">
      <div className="error-alert">
        <div className="text">
          {manageErrorText(error)}
        </div>
        <FontAwesomeIcon
          icon={faClose}
          onClick={onHide}
          data-testid={"close-error"}
        />
      </div>
    </div>
  );
};

export default ErrorAlert;
