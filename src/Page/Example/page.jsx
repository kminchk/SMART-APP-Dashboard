import React from "react";
import Card_App from "../../Components/common/Card/Card_App/Card_App";
import Card_Dashboard from "../../Components/common/Card/Card_Dashboard/Card_Dashboard";
import { data_N1 } from "./Link_Data";

function Example() {
  return (
    <div className="container mx-auto min-h-screen ">
      <h1 className="text-2xl font-bold font-Poppins ">SMT</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  2xl:grid-cols-4 xl:grid-cols-3 gap-4">
        <Card_App datas={data_N1} />
      </div>
      <h1 className="text-2xl font-bold font-Poppins ">LPI</h1>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-6 xl:grid-cols-3 gap-4">
        <Card_Dashboard datas={data_N1} />
      </div>
    </div>
  );
}

export default Example;
