import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <div className="header flex justify-between items-center p-6">
          <img src={logo} alt="logo image" className="object-contain  w-28 " />
          <div className="started-button text-[--Pink] Open-Sans">
            <button className="rounded-3xl border-[1px] px-5 py-1 text-xs border-[--Pink]">
              Try it Free
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
