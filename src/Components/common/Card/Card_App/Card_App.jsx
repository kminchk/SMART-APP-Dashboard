import React from "react";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useColor } from "color-thief-react";
import Color from "color-thief-react";
import { Palette } from "color-thief-react";

function Card_App(props) {
  const { datas } = props;
  const handleClick = (item) => {
    window.open(`${item.link}${item.path}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {datas.map((item, index) => (
        <>
          <div
            key={item.id}
            className="relative group w-full hover:cursor-pointer"
            onClick={() => {
              handleClick(item);
            }}
          >
            <div className=" hover:scale-110 hover:absolute hover:z-50 w-full transform transition-all duration-500 delay-100">
              <div className="rounded bg-base-100/50 hover:bg-base-100 shadow-md p-1">
                <div className="p-4 m-1 grid grid-cols-1">
                  <div className="group-hover:grid flex gap-2">
                    <div className="relative w-20 group-hover:w-full flex justify-center h-full min-h-20">
                      <Color src={item.img} format="hex">
                        {({ data, loading, error }) => (
                          <>
                            <div
                              style={{
                                background: `linear-gradient(to right, ${data}, var(--tw-gradient-stops))`,
                                "--tw-gradient-from": `${data}`,
                                "--tw-gradient-stops": `var(--tw-gradient-from), var(--tw-gradient-to, ${data})`,
                              }}
                              className={`absolute inset-0 bg-gradient-to-r mx-auto w-1/2 h-full opacity-25 group-hover:opacity-50 blur-2xl group-hover:animate-halfAppear duration-300`}
                            />
                          </>
                        )}
                      </Color>
                      <img
                        src={item.img}
                        alt="cardui"
                        className="w-16 h-fit relative group-hover:w-32 my-auto group-hover:scale-110 duration-300 ease-in-out transform transition-all hover:scale-110 hover:z-50 rounded-xl"
                      />
                    </div>

                    <div className="w-full my-auto">
                      <h2 className="font-bold text-base group-hover:text-xl duration-500 delay-150">
                        {item.Page_Name}
                      </h2>
                      <h2 className="font-medium text-xs menu-title">
                        {item.desc}
                      </h2>
                    </div>
                    <div>
                      <div className="">
                        <div className="flex gap-2">
                          {/* <p className="font-bold text-blue-800">
          {item.desc_2}
        </p> */}
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            className=" w-5 h-5 group-hover:hidden"
                          >
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="grid justify-end place-content-end rounded-xl">
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
                  </div> */}
                  <div className="hidden group-hover:block w-full col-span-3 animate-descExpand text-nowrap transition duration-300 ease-in-out mt-2 p-2 rounded-md bg-base-content/40 text-base-content my-auto">
                    <div className="flex gap-2 justify-between">
                      <p className="font-semibold text-[12px]">{item.desc_3}</p>
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
    </>
  );
}

export default Card_App;
