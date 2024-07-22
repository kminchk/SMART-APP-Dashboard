import React from "react";
import ListItem from "../src/Components/common/Navbar/ListItem/ListItem_1/ListItem_1";
import ListItem_2 from "../src/Components/common/Navbar/ListItem/ListiTem_2/ListiTem_2";
import ListItem_3 from "../src/Components/common/Navbar/ListItem/ListItem_3/ListItem_3";
import ListItem_4 from "../src/Components/common/Navbar/ListItem/ListItem_4/ListItem_4";
import TitleDrawer from "../src/Components/common/Navbar/TitleDrawer";

import DashboardIcon from "../../../../public/Icon/Common/icons8-dashboard-96.png";
import DashboardIcon2 from "../../../../public/Icon/Common/icons8-dashboard-layout-96.png";

function ListButton({ closeDrawer }) {
  return (
    <ul className="menu px-4 py-0 w-80 min-h-full bg-base-100 text-base-content rounded-r-xl ">
      <TitleDrawer closeDrawer={closeDrawer} />
      <div className="mt-2"></div>
      {/* <ListItem_2
        iconPaths={[{ img: DashboardIcon }]}
        title="Dashboard"
        links={[
          {
            path: "/smart-app-dashboard/N1-SMF/dashboard/dashboard1",
            label: "dashboard",
            icon: DashboardIcon,
          },
        ]}
        closeDrawer={closeDrawer}
      />
      <li></li> */}
      <ListItem_2
        iconPaths={[{ img: DashboardIcon2 }]}
        title="Dashboard"
        links={[
          {
            path: "/smart-app-dashboard/N1-SMF/app/hr_app",
            label: "SMART HR Kanda 4.0",
            icon: DashboardIcon2,
          },
        ]}
        closeDrawer={closeDrawer}
      />
      <li></li>
      <ListItem_2
        iconPaths={[{ img: DashboardIcon2 }]}
        title="Application"
        links={[
          {
            path: "/smart-app-dashboard/N1-SMF/app/hr_app",
            label: "SMART HR Kanda 4.0",
            icon: DashboardIcon2,
          },
        ]}
        closeDrawer={closeDrawer}
      />
    </ul>
  );
}

export default ListButton;
