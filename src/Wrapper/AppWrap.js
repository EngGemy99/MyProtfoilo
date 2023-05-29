import React from "react";
import { NavigationDonts, SocialMedia } from "../components";
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">© 2023 Gemy</p>
            <p className="p-text">All right reserved</p>
          </div>
        </div>
        <NavigationDonts active={idName} />
      </div>
    );
  };

export default AppWrap;
