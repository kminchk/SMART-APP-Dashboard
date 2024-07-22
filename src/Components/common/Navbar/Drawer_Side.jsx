import React from "react";
import BurgerButton from "../../../../public/menu-burger.svg";
import ListButton from "../Navbar/ListItem/ListiTem_2/ListiTem_2";
import DashboardPic from "../../../../public/Icon/Common/icons8-dashboard-96.png";
import ApplicationPic from "../../../../public/Icon/Common/icons8-dashboard-96.png";
import TitleDrawer from "./TitleDrawer";

//*Dashboard
import dashboard from "../../../../public/Icon/menuDrawer/dashboard/dashboard.png";
import smt_dashboard from "../../../../public/Icon/menuDrawer/dashboard/smt-dashboard.png";
import fpc_dashboard from "../../../../public/Icon/menuDrawer/dashboard/fpc-dashboard.png";
import data_insight from "../../../../public/Icon/menuDrawer/dashboard/data-insight.png";
import environment from "../../../../public/Icon/menuDrawer/dashboard/environment.png";
import iot from "../../../../public/Icon/menuDrawer/dashboard/iot.png";
import auto_lock_system from "../../../../public/Icon/menuDrawer/dashboard/auto-lock-system.png";

//* Application General
import general_app from "../../../../public/Icon/menuDrawer/general/general-app.png";
import work_efficiency from "../../../../public/Icon/menuDrawer/general/work-efficiency.png";
import hr_kanda from "../../../../public/Icon/menuDrawer/general/hr-kanda.png";
import fox_conn from "../../../../public/Icon/menuDrawer/general/foxconn.png";

//* Application Production
import production_app from "../../../../public/Icon/menuDrawer/production/production-app.png";
import fpc_eworking from "../../../../public/Icon/menuDrawer/production/fpc-eworking.png";
import fpc_production from "../../../../public/Icon/menuDrawer/production/fpc-production.png";
import smt_production from "../../../../public/Icon/menuDrawer/production/smt-production.png";
import pte_aut from "../../../../public/Icon/menuDrawer/production/pte-aut.png";
import qa from "../../../../public/Icon/menuDrawer/production/qa.png";

function Drawer_Side({ isOpen, closeDrawer, toggleDrawer }) {
  return (
    <>
      <div className="flex ">
        <div className={`p-2`}>
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
        <TitleDrawer closeDrawer={closeDrawer} isOpen={isOpen} />
      </div>
      <ul className="menu px-4 py-0 w-80 min-h-full  text-base-content  pt-4">
        <ListButton
          iconPaths={[{ img: dashboard }]}
          title="Dashboard"
          links={[
            // http://10.17.66.242/Machine-IOT // group SMT
            {
              path: "/smart-app-dashboard/N1-SMF/dashboard/SMT_Dashboard",
              label: "SMT Dashboard",
              icon: smt_dashboard,
            },
            // WAIT
            // {
            //   path: "/smart-app-dashboard/N1-SMF/dashboard/FPC_Dashboard",
            //   label: "FPC Dashboard",
            //   icon: fpc_dashboard,
            // },
            {
              // http://10.17.66.242/Data-analytics Data Analytics ALL
              path: "/smart-app-dashboard/N1-SMF/dashboard/data_insight",
              label: "DATA Insight",
              icon: data_insight,
            },
            {
              // http://10.17.66.242/
              path: "/smart-app-dashboard/N1-SMF/dashboard/environment",
              label: "Environment",
              icon: environment,
            },
            {
              // http://10.17.66.242/
              path: "/smart-app-dashboard/N1-SMF/dashboard/IOT",
              label: "IOT",
              icon: iot,
            },
            {
              // http://10.17.66.242/
              path: "/smart-app-dashboard/N1-SMF/dashboard/auto_lock_system",
              label: "Auto Lock System",
              icon: auto_lock_system,
            },
          ]}
          // closeDrawer={closeDrawer}
        />
        <li></li>
        <ListButton
          iconPaths={[{ img: general_app }]}
          title="Application General"
          links={[
            // http://10.17.66.242/Develop-application // group Common Application
            {
              path: "/smart-app-dashboard/N1-SMF/app_general/work_efficiency",
              label: "Work Efficiency",
              icon: work_efficiency,
            },
            // SMART HR Kanda 4.0
            // {
            //   path: "/smart-app-dashboard/N1-SMF/app_general/Kanda_4_0",
            //   label: "HR Kanda 4.0",
            //   icon: hr_kanda,
            // },
            // FoxConn
            // {
            //   path: "/smart-app-dashboard/N1-SMF/app_general/fox_conn",
            //   label: "Fox Conn",
            //   icon: fox_conn,
            // },
          ]}
          // closeDrawer={closeDrawer}
        />
        <li></li>
        <ListButton
          iconPaths={[{ img: production_app }]}
          title="Application Production"
          links={[
            // SMART eWorking
            {
              path: "/smart-app-dashboard/N1-SMF/app_production/fpc_eworking_production",
              label: "SMT Eworking",
              icon: fpc_eworking,
            },
            // // FPC Production
            // {
            //   path: "/smart-app-dashboard/N1-SMF/app_production/fpc_production",
            //   label: "FPC Production",
            //   icon: fpc_production,
            // },
            // SMT Production
            {
              path: "/smart-app-dashboard/N1-SMF/app_production/smt_production",
              label: "SMT Production",
              icon: smt_production,
            },
            // PTE & AUT
            {
              path: "/smart-app-dashboard/N1-SMF/app_production/pte_aut",
              label: "PTE & AUT",
              icon: pte_aut,
            },
            // QA
            {
              path: "/smart-app-dashboard/N1-SMF/app_production/qa",
              label: "QA",
              icon: qa,
            },
          ]}
          // closeDrawer={closeDrawer}
        />
      </ul>
    </>
  );
}

export default Drawer_Side;
