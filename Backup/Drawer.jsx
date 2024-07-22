import React, { useState } from "react";
import ListButton from "./ListButton";
import BurgerButton from "../../../../public/menu-burger.svg";
function Drawer({ isOpen, closeDrawer, toggleDrawer }) {
  // const [isOpen, setIsOpen] = useState(false);

  // const closeDrawer = () => setIsOpen(false);
  // const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle "
          checked={isOpen}
          onChange={toggleDrawer}
        />
        <div className="drawer-content ">
          <label htmlFor="my-drawer" className="btn glass">
            <img src={BurgerButton} alt="BurgerButton" width={24} height={24} />
          </label>
        </div>
        {/* <div className="drawer-side  z-10">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ListButton closeDrawer={closeDrawer} />
        </div> */}
      </div>
    </>
  );
}

export default Drawer;
