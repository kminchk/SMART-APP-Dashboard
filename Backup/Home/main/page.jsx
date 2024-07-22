import React, { useState } from "react";
import FujiPic from "../../../../public/Pic/Fuji.png";
import { data_N1, data_A1, data_N1_2, data_hr_Kanda } from "./Link_Data";
function page() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold font-Poppins ">OT</h1>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 gap-6 z-10">
        {data_hr_Kanda.map((item, index) => (
          <>
            <div key={item.id} className="relative group">
              <div className="hover:scale-110 transform transition-all duration-300">
                <div className=" rounded-lg  bg-base-300/20  border-1 border-base-content">
                  <div className="p-4 m-1 grid grid-cols-3">
                    <div className="flex gap-2 col-span-2">
                      <img src={item.img} alt="cardui" className="w-20 h-20" />
                      <div>
                        <h2 className="font-bold text-xl">{item.Page_Name}</h2>
                        <h2 className="font-medium text-sm text-slate-600">
                          {item.desc}
                        </h2>
                      </div>
                    </div>
                    <div className="grid justify-end place-content-end rounded-xl">
                      <div className="flex gap-2">
                        <p className="font-bold text-blue-800">{item.desc_2}</p>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          className=" w-5 h-5"
                        >
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </div>
                    </div>
                    <div className="hidden group-hover:block w-full col-span-3  mt-2 p-2 rounded-md  bg-primary-content/40 text-base-content my-auto">
                      <div className="flex gap-2 justify-between">
                        <p className=" font-semibold text-[12px] ">
                          {item.desc_3}
                        </p>
                        <p className=" font-semibold text-[12px] ">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            className=" w-5 h-5"
                          >
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <h1 className="text-2xl font-bold font-Poppins ">E-Learning</h1>

      {/* <h1 className="text-2xl font-bold">TITLE</h1>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 gap-6 z-10">
        {data_N1_2.map((item, index) => (
          <>
            <div key={item.id} className="relative group">
              <div className="hover:scale-110 transform transition-all duration-300">
                <div className=" rounded-2xl  bg-primary/5 shadow-md">
                  <div className="p-4 m-1 grid grid-cols-3">
                    <div className="flex gap-2 col-span-2">
                      <img src={item.img} alt="cardui" className="w-20 h-20" />
                      <div>
                        <h2 className="font-bold text-xl">{item.Page_Name}</h2>
                        <h2 className="font-medium text-sm text-slate-600">
                          {item.desc}
                        </h2>
                      </div>
                    </div>
                    <div className="grid justify-end place-content-end rounded-xl">
                      <div className="flex gap-2">
                        <p className="font-bold text-blue-800">{item.desc_2}</p>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          className=" w-5 h-5"
                        >
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </div>
                    </div>
                    <div className="hidden group-hover:block w-full col-span-3  mt-2 p-2 rounded-md  bg-primary-content/40 text-base-content my-auto">
                      <div className="flex gap-2 justify-between">
                        <p className=" font-semibold text-[12px] ">
                          {item.desc_3}
                        </p>
                        <p className=" font-semibold text-[12px] ">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            className=" w-5 h-5"
                          >
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="divider" />

      <div className="flex justify-end my-auto">
        <div>TEST</div>
      </div>

      <div className="grid 2xl:grid-cols-6 xl:grid-cols-3 gap-4">
        {data_A1.map((item) => (
          <div key={item.id} className="relative group w-72">
            <div className="hover:scale-110 transform transition-all duration-300">
              <div className="rounded-2xl bg-primary/5 shadow-md">
                <figure>
                  <img
                    src={item.img}
                    alt={item.Page_Name}
                    className="w-[288px] h-[184px] rounded-t-xl"
                  />
                </figure>
                <div className="p-4 m-1 grid">
                  <div className="flex gap-2 col-span-2">
                    <div>
                      <h2 className="font-bold text-xl">{item.Page_Name}</h2>
                      <h2 className="font-medium text-sm text-slate-600">
                        {item.desc}
                      </h2>
                    </div>
                  </div>
                  <div className="hidden group-hover:block w-full col-span-3 mt-2 p-2 rounded-md bg-primary-content/40 text-base-content my-auto">
                    <div className="flex gap-2 justify-between">
                      <p className="font-semibold text-[12px]">{item.desc_3}</p>
                      <p className="font-semibold text-[12px]">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default page;
