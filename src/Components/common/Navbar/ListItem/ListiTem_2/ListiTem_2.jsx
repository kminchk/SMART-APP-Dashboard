import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function ListiTem_2({ iconPaths, title, links, closeDrawer }) {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <li className="">
      <details>
        <summary className="group">
          <span>
            {iconPaths.map((path, index) => (
              <img
                key={index}
                src={path.img}
                alt="icon"
                width={"32px"}
                height={"32px"}
              />
            ))}
          </span>
          <span className="font-bold">{title}</span>
        </summary>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                onClick={closeDrawer}
                className={
                  currentPath === link.path
                    ? "bg-primary text-primary-content hover:bg-base-content hover:text-base-100"
                    : " "
                }
              >
                <span>
                  <img
                    src={link.icon}
                    alt="icon"
                    width={"28px"}
                    height={"28px"}
                  />
                </span>
                <span className="opacity-75">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
}

export default ListiTem_2;
