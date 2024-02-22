import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";
import downArrow from "../assets/images/icon-arrow-dark.svg";

const Header = () => {
  return (
    <>
      <header className="header flex justify-between items-center bg-[--Very-light-red] px-4 py-12">
        <div className="header__left">
          <img src={logo} alt="logo" className="w-24 object-contain" />
        </div>
        <div className="header__right">
          <img src={menu} alt="menu" />
        </div>

        <div className="nav-box absolute left-0 top-1/3 w-full px-4 z-50">
          <nav className="relative w-full bg-[--White] rounded-md py-8">
            <ul className="nav-links flex flex-col items-center justify-center gap-4">
              <li className="flex gap-2">
                Product
                <img
                  src={downArrow}
                  alt="image down"
                  className="object-contain"
                />
              </li>
              <li className="flex">
                Company
                <img
                  src={downArrow}
                  alt="image down"
                  className="object-contain"
                />
              </li>
              <li>
                <div className="flex">
                  Connect
                  <img
                    src={downArrow}
                    alt="image down"
                    className="object-contain"
                  />
                </div>
                <ul className="bg-slate-300 w-full text-gray-700">
                  <li>Contact</li>
                  <li>Newsletter</li>
                  <li>LinkedIn</li>
                </ul>
              </li>
            </ul>
            <hr />

            <div className="flex flex-col justify-center items-center">
              <div className="login">Login</div>
              <div className="signUp">Sign Up</div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
