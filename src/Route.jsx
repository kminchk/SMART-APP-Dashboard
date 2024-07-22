import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage_base from "./Page/HomePage/main/HomePage";
import Example from "./Page/Example/page";

import Dashboard_SMT_Dashboard from "./Page/Dashboard/SMT-Dashboard/main/page";
import Dashboard_IOT from "./Page/Dashboard/IOT/main/page";
import Dashboard_Enviroment from "./Page/Dashboard/Environment/main/page";
import Dashboard_Auto_Lock_System from "./Page/Dashboard/Auto_Lock_System/main/page";
import WAIT from "./wait";
function RouteComponents() {
  return (
    <>
      <Routes>
        <Route
          path="/smart-app-dashboard/N1-SMF/"
          element={<HomePage_base />}
        />
        <Route
          path="/smart-app-dashboard/N1-SMF/example"
          element={<Example />}
        />
        {/* DASHBOARD */}
        <Route
          path="/smart-app-dashboard/N1-SMF/dashboard/SMT_Dashboard"
          element={<Dashboard_SMT_Dashboard />}
        />
        <Route
          path="/smart-app-dashboard/N1-SMF/dashboard/FPC_Dashboard"
          element={<WAIT />}
        />
        <Route
          path="/smart-app-dashboard/N1-SMF/dashboard/data_insight"
          element={<WAIT />}
        />
        <Route
          path="/smart-app-dashboard/N1-SMF/dashboard/environment"
          element={<Dashboard_Enviroment />}
        />
        <Route
          path="/smart-app-dashboard/N1-SMF/dashboard/IOT"
          element={<Dashboard_IOT />}
        />
        <Route
          path="/smart-app-dashboard/N1-SMF/dashboard/auto_lock_system"
          element={<Dashboard_Auto_Lock_System />}
        />
        {/* APP GENERAL */}
        <Route
          path="/smart-app-dashboard/N1-SMF/app_general/work_efficiency"
          element={<WAIT />}
        />
        <Route
          path="/smart-app-dashboard/N1-SMF/app_general/Kanda_4_0"
          element={<WAIT />}
        />
        <Route
          path="/smart-app-dashboard/N1-SMF/app_general/fox_conn"
          element={<WAIT />}
        />
        {/* APP Production */}
        <Route
          path="/smart-app-dashboard/N1-SMF/app_production/fpc_eworking_production"
          element={<WAIT />}
        />
        <Route
          path="/smart-app-dashboard/N1-SMF/app_production/fpc_production"
          element={<WAIT />}
        />
        <Route
          path="/smart-app-dashboard/N1-SMF/app_production/smt_production"
          element={<WAIT />}
        />
        <Route
          path="/smart-app-dashboard/N1-SMF/app_production/pte_aut"
          element={<WAIT />}
        />
        <Route
          path="/smart-app-dashboard/N1-SMF/app_production/qa"
          element={<WAIT />}
        />
      </Routes>
    </>
  );
}

export default RouteComponents;
