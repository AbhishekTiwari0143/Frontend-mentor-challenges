import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-hamburger.svg";

const Header = () => {
  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full p-6 py-12 z-10">
        <div className="header flex justify-between items-center">
          <div className="logo">
            <img src={logo} alt="image logo" />
          </div>
          <div className="menu">
            <img src={menu} alt="menu image" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
