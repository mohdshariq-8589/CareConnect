import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]">
      <img
        onClick={() => navigate("/")}
        className="w-48 cursor-pointer "
        src={assets.logo}
        alt=""
      />
      <ul className="md:flex items-start gap-5 font-medium hidden">
        <NavLink to="/">
          <li className="relative group cursor-pointer py-1 text-center transition-all duration-300 hover:text-primary">
            <span className="inline-block transition-all duration-300 group-hover:translate-y-[2px] group-hover:scale-[1.1]">
              HOME
            </span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/5 group-hover:left-[20%] group-hover:bottom-[-4px]"></span>
          </li>
        </NavLink>

        <NavLink to="/doctors">
          <li className="relative group cursor-pointer py-1 text-center transition-all duration-300 hover:text-primary">
            <span className="inline-block transition-all duration-300 group-hover:translate-y-[2px] group-hover:scale-[1.1]">
              ALL DOCTORS
            </span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/5 group-hover:left-[20%] group-hover:bottom-[-4px]"></span>
          </li>
        </NavLink>

        <NavLink to="/about">
          <li className="relative group cursor-pointer py-1 text-center transition-all duration-300 hover:text-primary">
            <span className="inline-block transition-all duration-300 group-hover:translate-y-[2px] group-hover:scale-[1.1]">
              ABOUT
            </span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/5 group-hover:left-[20%] group-hover:bottom-[-4px]"></span>
          </li>
        </NavLink>

        <NavLink to="/contact">
          <li className="relative group cursor-pointer py-1 text-center transition-all duration-300 hover:text-primary">
            <span className="inline-block transition-all duration-300 group-hover:translate-y-[2px] group-hover:scale-[1.1]">
              CONTACT
            </span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/5 group-hover:left-[20%] group-hover:bottom-[-4px]"></span>
          </li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300"
              src={userData.image}
              alt=""
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4 shadow-lg">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-primary cursor-pointer transition-colors duration-300"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-primary cursor-pointer transition-colors duration-300"
                >
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="hover:text-red-500 cursor-pointer transition-colors duration-300"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary hover:bg-primary/80 transition-all text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden hover:scale-110 transition-transform duration-300"
          src={assets.menu_icon}
          alt=""
        />

        {/* ---- Mobile Menu ---- */}
        <div
          className={`md:hidden ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img src={assets.logo} className="w-36" alt="" />
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              className="w-7 cursor-pointer hover:rotate-90 transition-transform duration-300"
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded-full inline-block hover:bg-primary hover:text-white transition-all duration-300">
                HOME
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="px-4 py-2 rounded-full inline-block hover:bg-primary hover:text-white transition-all duration-300">
                ALL DOCTORS
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded-full inline-block hover:bg-primary hover:text-white transition-all duration-300">
                ABOUT
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded-full inline-block hover:bg-primary hover:text-white transition-all duration-300">
                CONTACT
              </p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
