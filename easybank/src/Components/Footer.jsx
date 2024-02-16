import logo from "../assets/images/logoFooter.svg";
import facebook from "../assets/images/icon-facebook.svg";
import youtube from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <footer className="max-w-[1170px] m-auto flex flex-col items-center gap-8 p-8 md:justify-between md:flex-row ">
        <div className="footer-logo">
          <img
            src={logo}
            alt="logo image"
            className="pb-8 m-auto w-48 cursor-pointer md:w-auto"
          />
          <div className="socials flex gap-4">
            <img
              src={facebook}
              alt="image facebook"
              className="w-8 cursor-pointer md:w-auto"
            />

            <img
              src={youtube}
              alt="image youtube"
              className="w-8 cursor-pointer md:w-auto"
            />
            <img
              src={twitter}
              alt="image twitter"
              className="w-8 cursor-pointer md:w-auto "
            />
            <img
              src={pinterest}
              alt="image pinterst"
              className="w-8 cursor-pointer md:w-auto"
            />
            <img
              src={instagram}
              alt="image instagram"
              className="w-8 cursor-pointer md:w-auto"
            />
          </div>
        </div>
        <div className="footer-links text-white flex flex-col md:flex-row md:gap-12 md:mr-32">
          <ul className="link-1 grid gap-3 mb-3 text-center md:text-left">
            <li>
              <a
                className="text-xl md:text-lg md:font-normal hover:text-[--BrightCyan]"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-xl md:text-lg md:font-normal hover:text-[--BrightCyan]"
                href="#"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="text-xl md:text-lg md:font-normal hover:text-[--BrightCyan]"
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
          <ul className="link-1 grid gap-3 mb-3 text-center md:text-left">
            <li>
              <a
                className="text-xl md:text-lg md:font-normal hover:text-[--BrightCyan]"
                href="#"
              >
                Carrers
              </a>
            </li>
            <li>
              <a
                className="text-xl md:text-lg md:font-normal hover:text-[--BrightCyan]"
                href="#"
              >
                Support
              </a>
            </li>
            <li>
              <a
                className="text-xl md:text-lg md:font-normal hover:text-[--BrightCyan]"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="bg-green-500 cursor-pointer rounded-full w-max m-auto text-white text-xl py-3 px-8 mb-6 md:text-base md:py-2 md:px-4">
            Request Invite
          </div>
          <p className="text-gray-500 md:text-sm">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
