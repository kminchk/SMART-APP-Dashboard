import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function Title() {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/smart-app-dashboard/N1-SMF/dashboard":
        setTitle("Dashboard");
        break;
      case "/smart-app-dashboard/N1-SMF/1":
        setTitle("Report 1");
        break;
      case "/smart-app-dashboard/N1-SMF/2":
        setTitle("Report 2");
        break;
      default:
        setTitle("Smart Factory Dashboard");
    }
  }, [location]);

  return (
    <>
      <a className="font-semibold font-Inter ">{title}</a>
    </>
  );
}

export default Title;
