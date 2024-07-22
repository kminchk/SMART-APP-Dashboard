import React from "react";
import Card_Dashboard from "../../../../Components/common/Card/Card_Dashboard/Card_Dashboard";
import {
  data_dashboard_data_insight,
  data_dashboard_user_login_parameter,
} from "./Link_Data";
function page() {
  return (
    <div className="container mx-auto min-h-screen ">
      <div className="flex gap-1">
        <h1 className="text-2xl font-bold">SMT Machine</h1>
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          className="w-4 h-4 my-auto"
        >
          <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
        </svg>
      </div>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-6 xl:grid-cols-3 gap-4">
        <Card_Dashboard datas={data_dashboard_data_insight} />
      </div>
      <div className="flex gap-1">
        <h1 className="text-2xl font-bold">User Login | Paremeter</h1>
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          className="w-4 h-4 my-auto"
        >
          <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
        </svg>
      </div>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-6 xl:grid-cols-3 gap-4">
        <Card_Dashboard datas={data_dashboard_user_login_parameter} />
      </div>
    </div>
  );
}

export default page;
