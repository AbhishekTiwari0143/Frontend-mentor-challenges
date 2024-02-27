import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-hamburger.svg";
import pattern from "../assets/images/bg-pattern-mobile-nav.svg";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header
        className={`header container m-auto ${
          isActive && "fixed bg-[--Very-Light-Gray] "
        } z-20 md:relative`}
      >
        <div className="flex items-center justify-between p-6 relative">
          <div className="img">
            <img src={logo} alt="logo image" />
          </div>
          <div className="menu md:hidden">
            <img
              src={menu}
              alt="menu hamburger"
              onClick={() => {
                setIsActive((prev) => !prev);
              }}
            />
            {isActive && (
              <div className="nav-link">
                <ul className="h-screen fixed top-20 w-full left-1/2 -translate-x-1/2 bg-[--Very-Dark-Violet] z-20 flex flex-col items-center py-8 gap-8 text-white Karla uppercase tracking-wide ">
                  <li>
                    <a href="#">How we work</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Account</a>
                  </li>
                  <li className="border-2 w-[90%] py-2 mx-6">
                    <a href="#" className="grid place-items-center">
                      View Plans
                    </a>
                  </li>
                  <img src={pattern} alt="image pattern" className="w-full" />
                </ul>
              </div>
            )}
          </div>
          <div className="nav-link hidden md:block">
            <ul className="flex gap-8 uppercase items-center text-[--Grayish-Blue] Karla">
              <li className="hover:text-black">
                <a href="#">How we work</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Blog</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Account</a>
              </li>
              <li className="border-2 border-black px-6 py-2 text-black hover:text-white hover:bg-black">
                <a href="#">View Plans</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
