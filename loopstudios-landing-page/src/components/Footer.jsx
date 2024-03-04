import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <div className="footer flex flex-col text-center items-center gap-8 py-12 md:container md:px-6 md:m-auto md:flex-row md:justify-between alata">
          <div className="left">
            <div className="logo mb-6">
              <img src={logo} alt="logo footer" />
            </div>
            <div className="footer-links">
              <ul className="text-white grid gap-4 md:flex md:flex-row">
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
          <div className="right">
            <div className="social-links flex gap-4 justify-center md:justify-end mb-6">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={pinterest} alt="pinterest" />
              <img src={instagram} alt="instagram" />
            </div>
            <div className="trademark text-[--DarkGray]">
              <p>© 2021 Loopstudios. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
