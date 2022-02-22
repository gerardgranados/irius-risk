import React, {useEffect} from 'react';
import MenuImage from "assets/images/logo-menu.png";
import { NavLink} from "react-router-dom";
import './styles.scss';
import MemoizedIcon from "components/Icon/Icon";

const SideMenu = ({menuList,isOpen,hide}) => {

  const openModifier = !isOpen && 'hide';
  const getLinkActiveClass = (isActive) => isActive ? 'active' : 'inactive'

  return (
    <>
      <div className={`side-menu ${openModifier}`}>
        <img className="menu-logo" src={MenuImage}/>
        <div className="menu-list">
          {menuList.map(({name,icon,route},index) =>(
            <NavLink
              onClick={hide}
              key={index}
              to={route}
              className={({ isActive }) => `menu-item ${getLinkActiveClass(isActive)}`}
            >
              <MemoizedIcon icon={icon}/>
              <div>{name}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className={`shadow ${openModifier}`} onClick={hide}/>
    </>

  );
};

export default SideMenu;
