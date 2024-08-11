import { NavLink, Link } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PlusIcon,
  UserCircleIcon,
  ChartBarIcon,
  PowerIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa6";

import { useAuth } from "../utils/AuthContext";

const Sidebar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { logoutUser } = useAuth();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const nameofClass = ({ isActive }) =>
    isActive
      ? "text-blue-600  font-bold"
      : "flex items-center rounded-lg hover:bg-gray-100   hover:text-blue-600";

  let sideBarClass = "";
  let greyedClass = "hidden";
  if (menuOpened && windowWidth <= 944) {
    // Checks if menu is opened and app is small
    sideBarClass = "animate-slideInLeft fixed shadow-lg left-0 top-0 ";
    greyedClass = "grid cursor-pointer ";
  } else if (!menuOpened && windowWidth <= 944) {
    // Check if menu is closed and app is small
    sideBarClass = "animate-slideOutLeft fixed";
  }

  return (
    <>
      {/* Sidebar 1 */}
      <div
        className={`rounded-none z-10 bg-white w-[16rem] p-4 h-[100vh] shadow-lg  ${sideBarClass}
      `}
      >
        <div className="mt-5 px-3  ">
          <Typography variant="h3" color="blue-gray">
            <Link className="font-bold text-blue-600" to="/">
              StoreIdea
            </Link>
          </Typography>
        </div>
        <div className="mt-10">
          <List className="grid ">
            <NavLink to="/dashboard/ideas" className={nameofClass}>
              <ListItem className="p-3">
                <ListItemPrefix className="mr-1.5">
                  <FaLightbulb className="h-5 w-5 " />
                </ListItemPrefix>
                Ideas
              </ListItem>
            </NavLink>
            <NavLink to="/dashboard/create" className={nameofClass}>
              <ListItem className="p-3">
                <ListItemPrefix className="mr-1.5">
                  <PlusIcon className="h-5 w-5 " />
                </ListItemPrefix>
                Create
              </ListItem>
            </NavLink>
            <NavLink to="/dashboard/profile" className={nameofClass}>
              <ListItem className="p-3">
                <ListItemPrefix className="mr-1.5">
                  <UserCircleIcon className="h-5 w-5 " />
                </ListItemPrefix>
                Profile
              </ListItem>
            </NavLink>
            <NavLink to="/dashboard/activity" className={nameofClass}>
              <ListItem className="p-3">
                <ListItemPrefix className="mr-1.5">
                  <ChartBarIcon className="h-5 w-5 " />
                </ListItemPrefix>
                Activity
              </ListItem>
            </NavLink>
            <NavLink className='flex items-center gap-2 justify-center text-white bg-blue-600 px-5 py-2 rounded-md mt-5 hover:bg-blue-800 font-bold' onClick={logoutUser}>
                <PowerIcon className="h-5 w-5" />
                <p>Log Out</p>
            </NavLink>
          </List>
        </div>
      </div>

      {/* The responsive header */}
      <div className={windowWidth <= 944 ? "grid" : "hidden"}>
        <div className="fixed flex items-center justify-between gap-5 px-5 py-2 mb-10 bg-white shadow-sm w-full">
          <Link className="font-extrabold text-2xl" to="/">
            StoreIdea
          </Link>
          <div
            onClick={() => {
              setMenuOpened((prev) => !prev);
            }}
            className={`size-[2rem] top-10 left-5 rounded-sm cursor-pointer hover:bg-white items-center hover:text-blue-600`}
          >
            {menuOpened ? <XMarkIcon /> : <Bars3Icon />}
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div
        onClick={() => {
          setMenuOpened(false);
        }}
        className={`${greyedClass} backBlur bg-white w-full top-[48px] h-[100vh] fixed opacity-[0.9]`}
      ></div>
    </>
  );
};

export default Sidebar;
