import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-hamburger.svg";

const Header = () => {
  return (
    <section className="header bg-white p-6 z-10">
      <div className="max-w-[1170px] m-auto flex justify-between z-10">
        <img src={logo} alt="logo image" className="object-contain" />
        <img src={menu} alt="menu" className="object-contain  md:hidden" />
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
        <div className="hidden gradient rounded-full text-white py-2 px-6 md:block">
          Request Invite
        </div>
      </div>
    </section>
  );
};

export default Header;
