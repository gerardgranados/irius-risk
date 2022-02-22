import {useState} from "react";

export function useSideMenu(){
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => setOpenMenu(true)
  const handleCloseMenu = () => setOpenMenu(false)

  return {openMenu,handleOpenMenu,handleCloseMenu}
}
