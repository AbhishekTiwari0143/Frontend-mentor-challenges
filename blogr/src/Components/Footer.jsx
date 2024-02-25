import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="gradient-blue rounded-tr-[5rem]">
        <div className="container mx-auto flex flex-col items-center py-20 text-white md:flex-row md:justify-around md:items-start">
          <div className="logo my-6">
            <img src={logo} alt="logo footer" />
          </div>
          <div className="links grid gap-6 sm:grid-cols-3 sm:gap-24 md:gap-40">
            <div className="products text-center">
              <h1 className="py-6">Products</h1>
              <ul className="flex flex-col gap-2 text-[--Grayish-blue]">
                <li>Overview</li>
                <li className="hover:underline cursor-pointer">Pricing</li>
                <li className="hover:underline cursor-pointer">Marketplace</li>
                <li className="hover:underline cursor-pointer">Features</li>
                <li className="hover:underline cursor-pointer">Integrations</li>
              </ul>
            </div>
            <div className="Company text-center">
              <h1 className="py-6">Company</h1>
              <ul className="flex flex-col gap-2 text-[--Grayish-blue]">
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Team</li>
                <li className="hover:underline cursor-pointer">Blog</li>
                <li className="hover:underline cursor-pointer">Careers</li>
              </ul>
            </div>
            <div className="Connect text-center">
              <h1 className="py-6">Connect</h1>
              <ul className="flex flex-col gap-2 text-[--Grayish-blue]">
                <li className="hover:underline cursor-pointer">Contact</li>
                <li className="hover:underline cursor-pointer">Newsletter</li>
                <li className="hover:underline cursor-pointer">LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
