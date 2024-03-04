import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-hamburger.svg";
import menuClose from "../assets/images/icon-close.svg";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full z-10">
        <div className="header flex justify-between items-center md:px-6 md:container m-auto relative p-6 py-12">
          <div className="logo z-10">
            <img src={logo} alt="image logo" />
          </div>
          <div className="menu z-10 md:hidden">
            {isActive ? (
              <img
                src={menu}
                alt="menu"
                onClick={() => setIsActive((prev) => !prev)}
              />
            ) : (
              <img
                src={menuClose}
                alt="menu Close"
                onClick={() => setIsActive((prev) => !prev)}
              />
            )}
          </div>
          <div className="hidden menu md:block">
            <ul className="relative flex items-center justify-center gap-12 text-white alata">
              <li>
                <a href="javascript;" className="border-B">
                  About
                </a>
              </li>
              <li>
                <a href="javascript;" className="border-B">
                  Carrers
                </a>
              </li>
              <li>
                <a href="javascript;" className="border-B">
                  Events
                </a>
              </li>
              <li>
                <a href="javascript;" className="border-B">
                  Products
                </a>
              </li>
              <li>
                <a href="javascript;" className="border-B">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div
            className={`mobile-nav fixed w-full h-[100vh] -top-[200%] left-0 bg-black ${
              !isActive && "show"
            } md:hidden`}
          >
            <ul className="text-white h-full flex flex-col mt-64 items-start px-6 text-5xl gap-4 josefin-sans">
              <li>
                <a href="javascript;">About</a>
              </li>
              <li>
                <a href="javascript;">Careers</a>
              </li>
              <li>
                <a href="javascript;">Events</a>
              </li>
              <li>
                <a href="javascript;">Products</a>
              </li>
              <li>
                <a href="javascript;">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
