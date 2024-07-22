import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "color-thief-react";

function Card_Dashboard(props) {
  const navi = useNavigate();
  const { datas } = props;

  const handleClick = (item) => {
    window.open(`${item.link}${item.path}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {datas.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            handleClick(item);
          }}
          className="relative group w-full hover:cursor-pointer"
        >
          <div className="hover:scale-125 hover:absolute hover:z-50 w-full transform transition-all duration-500 delay-150">
            <div className="rounded-2xl bg-base-100/50 hover:bg-base-100 shadow-md p-1">
              <figure>
                <Color src={item.img} format="hex">
                  {({ data, loading, error }) => (
                    <>
                      <div
                        className="flex justify-center rounded-xl p-6 overflow-hidden glass"
                        style={{
                          backgroundColor: loading ? "transparent" : data,
                        }}
                      >
                        <div className="p-1 rounded-xl">
                          <img
                            src={item.img}
                            alt={item.Page_Name}
                            className="w-[100px] h-[100px] rounded-xl"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </Color>
              </figure>

              <div className="p-4 m-1">
                <h2 className="font-bold text-base text-nowrap">
                  {item.Page_Name}
                </h2>
                <div className="flex justify-between">
                  <h2 className="font-medium menu-title">{item.desc}</h2>
                  {/* <p className="font-bold text-blue-800">{item.desc_2}</p> */}
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
                <div className="hidden group-hover:block w-full col-span-3 animate-descExpand text-nowrap transition duration-300 ease-in-out mt-2 p-2 rounded-md bg-base-content/40 text-base-content my-auto">
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
    </>
  );
}

export default Card_Dashboard;
