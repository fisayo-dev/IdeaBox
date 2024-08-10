import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const Header = () => {

  const linkStatus = ({ isActive }) =>
    isActive ? "px-2 py-1 font-extrabold" : "px-2 py-1 hover:font-bold";

  const [openMenu, setOpenMenu] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    setOpenMenu(false)
  }, []);

  return (
    <div>
      <div className="text-blue-600 px-20 py-3 items-center flex justify-between ">
        <NavLink to="/">
          <h2 className="text-3xl font-bold">IdeaBox</h2>
        </NavLink>
        <div
          className={`flex ${
            windowWidth < 580 ? "hidden" : ""
          } gap-5 items-center`}
        >
          <NavLink className={linkStatus} to="/">
            Home
          </NavLink>
          <NavLink className={linkStatus} to="/signup">
            Signup
          </NavLink>
          <NavLink className={linkStatus} to="/login">
            Login
          </NavLink>
        </div>
        <div
          className={`w-9 cursor-pointer ${
            windowWidth < 580 ? "grid" : "hidden"
          } `}
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          <Bars3Icon />
        </div>
      </div>
      {/* Menu */}
      <div
        className={`bg-white shadow-lg p-5 z-10 fixed h-full right-0  top-0 w-[16rem] ${
          openMenu && windowWidth < 580
            ? "animate-slideInRight "
            : "animate-slideOutRight"
        }`}
      >
        <div className=" grid gap-5">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <h2 className="text-3xl font-bold">IdeaBox</h2>
            </NavLink>
            <div
              className="w-8 cursor-pointer"
              onClick={() => setOpenMenu(false)}
            >
              <XMarkIcon />
            </div>
          </div>
          <div className="grid items-center">
            <NavLink className={linkStatus} to="/">
              Home
            </NavLink>
            <NavLink className={linkStatus} to="/signup">
              Signup
            </NavLink>
            <NavLink className={linkStatus} to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setOpenMenu(false);
        }}
        className={`${
          windowWidth < 580 && openMenu ? "grid" : "hidden"
        } backBlur bg-white w-full top-[48px] h-[100vh] fixed opacity-[0.9]`}
      ></div>
    </div>
  );
};

export default Header;
