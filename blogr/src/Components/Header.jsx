import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";
import downArrow from "../assets/images/icon-arrow-dark.svg";
import downWhite from "../assets/images/icon-arrow-light.svg";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className="header relative z-[20]">
        <div className="m-auto flex justify-between items-center px-4 py-12 md:container md:px-6 md:justify-start md:gap-5">
          <div className="header__left">
            <img src={logo} alt="logo" className="w-24 object-contain" />
          </div>
          <div
            className="header__right"
            onClick={() => {
              setIsActive((prev) => !prev);
              console.log("Clicked");
            }}
          >
            <img
              src={isActive ? closeIcon : menu}
              alt="icon hamberger"
              className="cursor-pointer md:hidden"
            />
          </div>
          <div className="hidden nav-links md:flex justify-between items-center w-full text-white z-30">
            <ul className="flex gap-12">
              <li className="nav-link flex gap-2 relative">
                <a href="#">Product</a>
                <img
                  src={downWhite}
                  alt="image down"
                  className="object-contain"
                />
                <ul
                  className={`h-0 opacity-0 py-2 absolute top-[30px] bg-[--White] text-black w-32 px-6 -left-4 box-shadow`}
                >
                  <li className="h-full cursor-pointer hover:font-semibold">
                    Overview
                  </li>
                  <li className="h-full cursor-pointer hover:font-semibold">
                    Pricing
                  </li>
                  <li className="h-full cursor-pointer hover:font-semibold">
                    Marketplace
                  </li>
                  <li className="h-full cursor-pointer hover:font-semibold">
                    Features
                  </li>
                  <li className="h-full cursor-pointer hover:font-semibold">
                    Integrations
                  </li>
                </ul>
              </li>
              <li className="nav-link flex gap-2 relative">
                <a href="#">Company</a>
                <img
                  src={downWhite}
                  alt="image down"
                  className="object-contain"
                />
                <ul
                  className={`h-0 opacity-0 py-2 absolute top-[30px] bg-[--White] text-black w-32 px-6 -left-4 box-shadow`}
                >
                  <li className="h-full cursor-pointer hover:font-semibold">
                    About
                  </li>
                  <li className="h-full cursor-pointer hover:font-semibold">
                    Team
                  </li>
                  <li className="h-full cursor-pointer hover:font-semibold">
                    Blog
                  </li>
                  <li className="h-full cursor-pointer hover:font-semibold">
                    Careers
                  </li>
                </ul>
              </li>
              <li className="nav-link flex gap-2 relative">
                <a href="#">Connect</a>
                <img
                  src={downWhite}
                  alt="image down"
                  className="object-contain"
                />
                <ul
                  className={`h-0 opacity-0 py-2 absolute top-[30px] bg-[--White] text-black w-32 px-6 -left-4 box-shadow`}
                >
                  <li className="h-full cursor-pointer hover:font-semibold">
                    Contact
                  </li>
                  <li className="h-full cursor-pointer hover:font-semibold">
                    Newsletter
                  </li>
                  <li className="h-full cursor-pointer hover:font-semibold">
                    LinkedIn
                  </li>
                </ul>
              </li>
            </ul>
            <div className="btns flex gap-12 items-center">
              <div className="">
                <h1 className="login font-medium">LogIn</h1>
              </div>
              <div className="text-white hover-btn gradient px-6 py-2 rounded-full cursor-pointer">
                <h1 className="SignUp">Sign Up</h1>
              </div>
            </div>
          </div>

          {isActive && (
            <div className="nav-box absolute left-0 top-[6rem] w-full px-4 z-50">
              <nav className="relative w-full bg-[--White] rounded-md py-8">
                <ul className="nav-links flex flex-col items-center justify-center gap-4 w-full ">
                  <li className="relative nav-link">
                    <div className="flex gap-2 cursor-pointer hover:underline hover:font-bold">
                      Product
                      <img
                        src={downArrow}
                        alt="image down"
                        className="object-contain"
                      />
                    </div>
                    <ul className="grid place-items-center h-0 opacity-0">
                      <li className="h-full cursor-pointer hover:font-semibold">
                        Overview
                      </li>
                      <li className="h-full cursor-pointer hover:font-semibold">
                        Pricing
                      </li>
                      <li className="h-full cursor-pointer hover:font-semibold">
                        Marketplace
                      </li>
                      <li className="h-full cursor-pointer hover:font-semibold">
                        Features
                      </li>
                      <li className="h-full cursor-pointer hover:font-semibold">
                        Integrations
                      </li>
                    </ul>
                  </li>
                  <li className="nav-link relative">
                    <div className="flex gap-2 cursor-pointer hover:underline hover:font-bold">
                      Company
                      <img
                        src={downArrow}
                        alt="image down"
                        className="object-contain"
                      />
                    </div>
                    <ul className="grid place-items-center h-0 opacity-0">
                      <li className="h-full cursor-pointer hover:font-semibold">
                        About
                      </li>
                      <li className="h-full cursor-pointer hover:font-semibold">
                        Team
                      </li>
                      <li className="h-full cursor-pointer hover:font-semibold">
                        Blog
                      </li>
                      <li className="h-full cursor-pointer hover:font-semibold">
                        Careers
                      </li>
                    </ul>
                  </li>
                  <li className="w-full px-6 relative nav-link">
                    <div className="flex items-center justify-center gap-2 mb-2 cursor-pointer hover:underline hover:font-bold">
                      Connect
                      <img
                        src={downArrow}
                        alt="image down"
                        className="object-contain"
                      />
                    </div>
                    <ul className="grid place-items-center h-0 opacity-0">
                      <li className="cursor-pointer hover:font-bold">
                        Contact
                      </li>
                      <li className="cursor-pointer hover:font-bold">
                        Newsletter
                      </li>
                      <li className="cursor-pointer hover:font-bold">
                        LinkedIn
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="px-6">
                  <hr className="mt-6" />
                </div>

                <div className="flex flex-col justify-center items-center mt-8 gap-4">
                  <div className="login font-medium cursor-pointer">Login</div>
                  <div className="signUp text-white gradient px-6 py-2 rounded-full cursor-pointer">
                    Sign Up
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
