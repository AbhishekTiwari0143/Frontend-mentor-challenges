import logo from "../assets/images/logo-bookmark-f.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";

const Footer = () => (
  <>
    <section className="footer bg-[--very-dark-blue] flex justify-center items-center flex-col py-12 md:flex-row md:justify-between md:max-w-[140px] m-auto">
      <img
        src={logo}
        alt="footer logo"
        className="footer-logo object-contain w-[180px] "
      />

      <ul className="footer-links flex flex-col gap-4 md:flex-row">
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
    </section>
  </>
);

export default Footer;
