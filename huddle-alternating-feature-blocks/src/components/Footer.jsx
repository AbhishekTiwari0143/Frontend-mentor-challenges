import logoWhite from "../assets/images/logo-white.svg";

import phone from "../assets/images/icon-phone.svg";
import mail from "../assets/images/icon-email.svg";

import GetStarted from "./GetStarted";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-[--Very-Dark-Cyan] text-white py-32 mt-28 lg:py-36">
        <GetStarted />
        <div className="footer container m-auto flex flex-col justify-center items-center gap-8 px-6 sm:flex-row sm:justify-between lg:gap-32">
          <div className="footer-link Open-Sans md:max-w-[300px]">
            <img src={logoWhite} alt="image logo" className="mb-4" />
            <p className="mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
            <div className="phone flex gap-6 mb-4">
              <img src={phone} alt="phone" className="object-contain" />
              <p>Phone: +1-543-123-4567</p>
            </div>
            <div className="mail flex gap-6">
              <img src={mail} alt="email" className="object-contain" />
              <p>example@huddle.com</p>
            </div>
          </div>
          <div className="links flex gap-8 md:gap-20">
            <ul className="grid gap-4 w-max">
              <li className="w-max">
                <a href="javascript;">About Us</a>
              </li>
              <li className="w-max">
                <a href="javascript;">What We Do</a>
              </li>
              <li>
                <a href="javascript;">FAQ</a>
              </li>
            </ul>
            <ul className="grid gap-4">
              <li>
                <a href="javascript;">Career</a>
              </li>
              <li>
                <a href="javascript;">Blog</a>
              </li>
              <li className="w-max">
                <a href="javascript;">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright container m-auto p-6">
          <p className="text-center sm:text-end">
            &copy; Copyright 2018 Huddle. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
