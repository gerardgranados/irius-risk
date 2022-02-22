import React from 'react';
import './styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faBell, faMoon, faSun, faUser} from "@fortawesome/free-solid-svg-icons";
import {THEMES} from "config/constants/themes";

const Header = ({title, openMenu, changeTheme, theme}) => {
  const icon = theme === THEMES['light']
    ? faMoon
    : faSun
  return (
    <div className="header">
      <div className="title">{title}</div>
      <FontAwesomeIcon
        icon={icon}
        onClick={changeTheme}
        data-testid={"toggle-theme"}
      />
      <FontAwesomeIcon icon={faBell}/>
      <FontAwesomeIcon icon={faUser}/>
      <FontAwesomeIcon
        data-testid={"toggle-menu"}
        className="menu-button"
        icon={faBars}
        onClick={openMenu}
      />
    </div>
  );
};

export default Header;
