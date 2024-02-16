import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-hamburger.svg";
import menuClose from "../assets/images/icon-close.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="header bg-[--White] p-6 z-10">
      {isOpen && (
        <div
          className="overlay fixed top-0 left-0 w-full h-full
      "
        />
      )}
      <div className="max-w-[1170px] m-auto flex justify-between z-10">
        <img src={logo} alt="logo image" className="object-contain" />
        {!isOpen && (
          <img
            src={menu}
            alt="menu"
            className="object-contain md:hidden"
            onClick={toggleMenu}
          />
        )}
        {isOpen && (
          <img
            src={menuClose}
            alt="menu"
            onClick={toggleMenu}
            className="object-contain md:hidden"
          />
        )}
        <ul className="hidden nav-links gap-8 md:flex">
          <li>
            <a className="text-gray-500 text-[.9.5rem]" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-gray-500 text-[.9.5rem]" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-gray-500 text-[.9.5rem]" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="text-gray-500 text-[.9.5rem]" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="text-gray-500 text-[.9.5rem]" href="#">
              Careers
            </a>
          </li>
        </ul>
        <div className="hidden gradient rounded-full text-white py-2 px-6 cursor-pointer md:block">
          Request Invite
        </div>
      </div>
      <div className="nav-mob-links relative">
        {isOpen && (
          <ul className="fixed bg-white w-[95%] m-auto text-center top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18px] grid gap-2 py-8 rounded-md z-10">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default Header;
