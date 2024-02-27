import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
import patternM from "../assets/images/bg-pattern-footer-mobile.svg";
import patternD from "../assets/images/bg-pattern-footer-desktop.svg";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-[--Very-Light-Gray]">
        <img
          src={patternD}
          alt="footer pattern"
          className="absolute -z-10 hidden md:block"
        />
        <div className="container m-auto px-6">
          <img
            src={patternM}
            alt="footer pattern"
            className="absolute -z-10 md:hidden"
          />

          <div className="footer-links pb-12 pt-20 flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
            <img src={logo} alt="image logo footer" />
            <div className="social-icons flex gap-4">
              <img src={facebook} alt="facebook image" />
              <img src={twitter} alt="twitter image" />
              <img src={pinterest} alt="pinterest image" />
              <img src={instagram} alt="instagram image" />
            </div>
          </div>
          <hr className="border-[2px] md:border-[1px]" />

          <div className="footer-redirect flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 sm:pb-28">
            <div className="column-1 flex flex-col justify-center items-center">
              <h4 className="title uppercase Karla text-[--Grayish-Blue] py-6">
                our company
              </h4>
              <ul className="text-center grid gap-2 uppercase text-sm font-bold Karla md:text-left">
                <li>
                  <a href="javacript;" className="hover:underline">
                    how we work
                  </a>
                </li>
                <li>
                  <a href="javacript;" className="hover:underline">
                    Why Insure?
                  </a>
                </li>
                <li>
                  <a href="javacript;" className="hover:underline">
                    View plans
                  </a>
                </li>
                <li>
                  <a href="javacript;" className="hover:underline">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div className="column-2 flex flex-col justify-center items-center">
              <h4 className="title uppercase Karla text-[--Grayish-Blue] py-6">
                Help me
              </h4>
              <ul className="text-center grid gap-2 uppercase text-sm font-bold Karla md:text-left">
                <li>
                  <a href="javacript;" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="javacript;" className="hover:underline">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="javacript;" className="hover:underline">
                    Prvacy policy
                  </a>
                </li>
                <li>
                  <a href="javacript;" className="hover:underline">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
            <div className="column-3 flex flex-col justify-center items-center">
              <h4 className="title uppercase Karla text-[--Grayish-Blue] py-6">
                contact
              </h4>
              <ul className="text-center grid gap-2 uppercase text-sm font-bold Karla md:text-left">
                <li>
                  <a href="javacript;" className="hover:underline">
                    Sales
                  </a>
                </li>
                <li>
                  <a href="javacript;" className="hover:underline">
                    Support
                  </a>
                </li>
                <li>
                  <a href="javacript;" className="hover:underline">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>
            <div className="column-4 flex flex-col justify-center items-center">
              <h4 className="title uppercase Karla text-[--Grayish-Blue] py-6">
                others
              </h4>
              <ul className="text-center grid gap-2 uppercase text-sm font-bold Karla md:text-left">
                <li>
                  <a href="javacript;" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="javacript;" className="hover:underline">
                    Press
                  </a>
                </li>
                <li>
                  <a href="javacript;" className="hover:underline">
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
