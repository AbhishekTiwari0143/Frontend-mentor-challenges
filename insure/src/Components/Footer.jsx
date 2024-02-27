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
                  <a href="javacript;">how we work</a>
                </li>
                <li>
                  <a href="javacript;">Why Insure?</a>
                </li>
                <li>
                  <a href="javacript;">View plans</a>
                </li>
                <li>
                  <a href="javacript;">Reviews</a>
                </li>
              </ul>
            </div>
            <div className="column-2 flex flex-col justify-center items-center">
              <h4 className="title uppercase Karla text-[--Grayish-Blue] py-6">
                Help me
              </h4>
              <ul className="text-center grid gap-2 uppercase text-sm font-bold Karla md:text-left">
                <li>
                  <a href="javacript;">FAQ</a>
                </li>
                <li>
                  <a href="javacript;">Terms of use</a>
                </li>
                <li>
                  <a href="javacript;">Prvacy policy</a>
                </li>
                <li>
                  <a href="javacript;">Cookies</a>
                </li>
              </ul>
            </div>
            <div className="column-3 flex flex-col justify-center items-center">
              <h4 className="title uppercase Karla text-[--Grayish-Blue] py-6">
                contact
              </h4>
              <ul className="text-center grid gap-2 uppercase text-sm font-bold Karla md:text-left">
                <li>
                  <a href="javacript;">Sales</a>
                </li>
                <li>
                  <a href="javacript;">Support</a>
                </li>
                <li>
                  <a href="javacript;">Live Chat</a>
                </li>
              </ul>
            </div>
            <div className="column-4 flex flex-col justify-center items-center">
              <h4 className="title uppercase Karla text-[--Grayish-Blue] py-6">
                others
              </h4>
              <ul className="text-center grid gap-2 uppercase text-sm font-bold Karla md:text-left">
                <li>
                  <a href="javacript;">Careers</a>
                </li>
                <li>
                  <a href="javacript;">Press</a>
                </li>
                <li>
                  <a href="javacript;">Licenses</a>
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
