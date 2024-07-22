// MainContent.js
import * as React from "react";
import Box from "@mui/material/Box";
import RouteComponents from "../../../Route";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Drawer_Side from "../Navbar/Drawer_Side";

export default function MainContent() {
  const [isOpen, setIsOpen] = useState(true);

  const closeDrawer = () => setIsOpen(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="drawer drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div
          className={`drawer-side  text-base-content min-h-screen bg-primary/10`}
        >
          <div
            className={` ${
              isOpen ? "w-80 animate-expand" : "w-0 animate-collapse"
            }`}
          >
            <Drawer_Side
              isOpen={isOpen}
              closeDrawer={closeDrawer}
              toggleDrawer={toggleDrawer}
            />
          </div>
        </div>
        <div className="drawer-content flex flex-col bg-primary/10">
          <Navbar
            isOpen={isOpen}
            closeDrawer={closeDrawer}
            toggleDrawer={toggleDrawer}
          />
          <div className="rounded-tl-2xl bg-base-200/50">
            <Box component="div" sx={{ mb: 2 }} />
            <RouteComponents />
          </div>
        </div>
      </div>
    </>
  );
}
