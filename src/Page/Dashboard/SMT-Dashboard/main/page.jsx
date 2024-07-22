import React from "react";
import Card_Dashboard from "../../../../Components/common/Card/Card_Dashboard/Card_Dashboard";
import {
  data_dashboard_smt,
  data_dashboard_smt_elt,
  data_dashboard_traceability,
} from "./Link_Data";
function page() {
  return (
    <div className="container mx-auto min-h-screen ">
      <div className="flex gap-1">
        <h1 className="text-2xl font-bold">SMT Dashboard</h1>
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          className="w-4 h-4 my-auto"
        >
          <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
        </svg>
      </div>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-6 xl:grid-cols-3 gap-4">
        <Card_Dashboard datas={data_dashboard_smt} />
      </div>
      <div className="flex gap-1">
        <h1 className="text-2xl font-bold">SMT ELT</h1>
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          className="w-4 h-4 my-auto"
        >
          <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
        </svg>
      </div>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-6 xl:grid-cols-3 gap-4">
        <Card_Dashboard datas={data_dashboard_smt_elt} />
      </div>
      <div className="flex gap-1">
        <h1 className="text-2xl font-bold">Traceability</h1>
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          className="w-4 h-4 my-auto"
        >
          <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
        </svg>
      </div>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-6 xl:grid-cols-3 gap-4">
        <Card_Dashboard datas={data_dashboard_traceability} />
      </div>
    </div>
  );
}

export default page;
