import logo from "../assets/images/logo-bookmark.svg";

const Header = () => (
  <>
    <header className="flex max-w-[1440px] m-auto justify-between py-16">
      <img src={logo} alt="image" width="200px" className="object-contain" />
      <div className="nav-links text-xl">
        <ul className="flex text-lg gap-12 items-center  tracking-[.2rem] uppercase">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <button
              type="button"
              className="bg-[--soft-red] text-white font-semibold px-8 py-2 box-shadow rounded-lg"
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </header>
  </>
);

export default Header;
