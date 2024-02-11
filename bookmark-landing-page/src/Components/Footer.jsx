import logo from "../assets/images/logo-bookmark-f.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";

const Footer = () => (
  <>
    <section className="footer bg-[--very-dark-blue]">
      <div className="flex justify-center items-center flex-col py-12 m-auto md:max-w-[1174px] md:flex-row md:justify-between">
        <img
          src={logo}
          alt="footer logo"
          className="footer-logo object-contain w-[180px] "
        />

        <ul className="footer-links flex flex-col text-white gap-4 md:flex-row md:gap-6">
          <li>
            <a href="#">Features </a>
          </li>
          <li>
            <a href="#">Pricing </a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="social-links flex gap-8">
          <img src={facebook} alt="image facebook" />
          <img src={twitter} alt="image facebook" />
        </div>
      </div>
    </section>
  </>
);

export default Footer;
