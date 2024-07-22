import React from "react";
import Buttonmode from "../ThemeSwitch/ThemeSwitch";
import Title from "./Title";
import BurgerButton from "../../../../public/menu-burger.svg";
import Search from "./Search";
function Navbar({ isOpen, closeDrawer, toggleDrawer }) {
  return (
    <>
      <div className="navbar text-base-content border-none ">
        {!isOpen && (
          <div className={``}>
            <input
              id="my-drawer"
              type="checkbox"
              className="drawer-toggle "
              checked={isOpen}
              onChange={toggleDrawer}
            />
            <div className="drawer-content ">
              <label htmlFor="my-drawer" className="btn glass">
                <img
                  src={BurgerButton}
                  alt="BurgerButton"
                  width={24}
                  height={24}
                />
              </label>
            </div>
          </div>
        )}
        <Title />
        <div className="flex-1 place-content-end">
          <>
            <Search />
            <Buttonmode />
          </>
        </div>
      </div>
    </>
  );
}

export default Navbar;
