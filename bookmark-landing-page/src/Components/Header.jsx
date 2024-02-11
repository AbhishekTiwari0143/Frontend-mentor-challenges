import logo from "../assets/images/logo-bookmark.svg";
import menu from "../assets/images/icon-hamburger.svg";
import menuClose from "../assets/images/icon-close.svg";
import mobLogo from "../assets/images/logo-bookmark-h.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggle = () => {
    setMenuOpen((prevstate) => {
      return !prevstate;
    });
  };

  return (
    <>
      <header className="relative flex max-w-[1440px] m-auto justify-between py-16 px-6">
        {!menuOpen && (
          <div className="logo flex justify-between items-center w-full">
            <img
              src={logo}
              alt="image"
              width="200px"
              className="object-contain"
            />
            <img
              src={menu}
              alt="menu logo"
              className="object-contain"
              onClick={menuToggle}
            />
          </div>
        )}
        <div className="nav-links text-xl hidden">
          <ul className="flex text-lg gap-12 items-center tracking-[.2rem] uppercase">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <button
                type="button"
                className="bg-[--soft-red] text-white font-semibold px-8 py-2 box-shadow rounded-lg"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
        {menuOpen && (
          <div
            className="mobile-navigation fixed top-0 left-0 w-full h-screen flex flex-col justify-between p-8
        pt-16 bg-[--very-dark-blue-t] "
          >
            <div>
              <div className="logo flex justify-between mb-16">
                <img src={mobLogo} alt="image" />
                <img
                  src={menuClose}
                  alt="image close"
                  className="object-contain"
                  onClick={menuToggle}
                />
              </div>
              <ul className="mob-links text-white font-light tracking-widest flex flex-col justify-center text-center w-[100%] uppercase">
                <li className="border-t-[1px] py-4">
                  <a href="#">Features </a>
                </li>
                <li className="border-t-[1px] py-4 ">
                  <a href="#">Pricing</a>
                </li>
                <li className="border-t-[1px] py-4 ">
                  <a href="#">Contact</a>
                </li>
                <li className="border-t-[1px] py-4 w-full ">
                  <a
                    href="#"
                    className="border-4 px-12 py-2 rounded-lg font-bold flex justify-center w-full "
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>

            <div className="social-links flex justify-center items-center gap-8">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
        )}
      </header>
    </>
  );
};
export default Header;
