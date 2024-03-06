import logo from "../assets/images/logo.svg";
import backgroundM from "../assets/images/bg-hero-mobile.svg";
import backgroundD from "../assets/images/bg-hero-desktop.svg";

const Header = () => {
  return (
    <>
      <header className="bg-[--Very-Pale-Cyan]">
        <div className="header container m-auto flex justify-between items-center p-6 lg:p-12">
          <img
            src={logo}
            alt="logo image"
            className="object-contain w-28 z-10 lg:w-44"
          />
          <div className="started-button text-[--Pink] Open-Sans">
            <button className="Open-Sans font-semibold text-sm bg-white rounded-3xl px-4 py-1 text-[--Very-Dark-Cyan] box-shadow lg:text-base lg:px-6 lg:py-2">
              Try it Free
            </button>
          </div>
        </div>
        <img
          src={backgroundM}
          alt="main Image"
          className="px-6 w-full absolute top-0 right-0 z-[0] md:hidden"
        />
        <img
          src={backgroundD}
          alt="main Image"
          className="hidden container m-auto px-6 w-full absolute top-0 right-0 z-[0] md:block lg:translate-x-[-50%]"
        />
      </header>
    </>
  );
};

export default Header;
