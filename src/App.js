import 'App.scss';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import PlanetsIndex from "pages/planets/PlanetsIndex";
import 'config/theme/theme.scss';
import Header from "components/Header/Header";
import React, {useState} from "react";
import SideMenu from "components/SideMenu/SideMenu";
import StarshipsIndex from "pages/starships/Starships.Index";
import PeopleIndex from "pages/people/People.Index";
import VehiclesIndex from "pages/Vehicles/Vehicles.Index";
import {useSideMenu} from "hooks/useSideMenu";
import Footer from "components/Footer/Footer";
import {useTheme} from "hooks/useTheme";
import "services/internationalization/I18n";
import {useTranslation} from "react-i18next";
import {getMenuOptions} from "utils/getMenuOptions";

function App() {

  const {openMenu, handleOpenMenu, handleCloseMenu} = useSideMenu()
  const {theme,handleChangeTheme} = useTheme();
  const {t} = useTranslation()

  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>

        <div className="content">
          <SideMenu
            menuList={getMenuOptions(t)}
            isOpen={openMenu}
            open={handleOpenMenu}
            hide={handleCloseMenu}
          />
          <div className="main">
            <Header
              title={t('title')}
              openMenu={handleOpenMenu}
              changeTheme={handleChangeTheme}
              theme={theme}
            />
            <Routes>
              <Route path="/" element={<Navigate to="/planets"/>}/>
              <Route path="/planets" element={<PlanetsIndex/>}/>
              <Route path="/starships" element={<StarshipsIndex/>}/>
              <Route path="/people" element={<PeopleIndex/>}/>
              <Route path="/vehicles" element={<VehiclesIndex/>}/>
            </Routes>
          </div>
        </div>
        <Footer text={t('footer.text')}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
