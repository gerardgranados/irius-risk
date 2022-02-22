import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Icon = ({icon,spin,onClick,className,testId}) => {
  return (
    <FontAwesomeIcon
      className={className}
      icon={icon}
      spin={spin}
      onClick={onClick}
      data-testid={testId}
    />
  );
};

const MemoizedIcon = React.memo(Icon,(prevProps, nextProps) => {
  return prevProps.icon===prevProps.icon;
});
export default MemoizedIcon ;
