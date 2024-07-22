import React from "react";
import Fuji from "../../../../public/Pic/Fuji.png";
import CloseIcon from "@mui/icons-material/Close";
import LogoFuJi from "../../../../public/Pic/FujiLogo.png";

function TitleDrawer({ closeDrawer, isOpen }) {
  return (
    <>
      <div className="flex items-center justify-between p-1 ">
        <div className=" flex gap-2">
          <img src={Fuji} alt="logo" className="w-54 h-10" />
          {isOpen && (
            <p className="text-2xl font-extrabold text-center m-auto text-nowrap">
              Fujikura N1
            </p>
          )}
        </div>
        {/* <button
          type="button"
          data-view-component="true"
          className="btn btn-ghost btn-square bg-base-200 text-error"
          onClick={closeDrawer}
        >
          <CloseIcon />
        </button> */}
      </div>
    </>
  );
}

export default TitleDrawer;
