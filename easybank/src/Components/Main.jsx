import mainImage from "../assets/images/image-mockups.png";
import mainBgImage from "../assets/images/bg-intro-mobile.svg";
import mainBgImageDesktop from "../assets/images/bg-intro-desktop.svg";

const Main = () => {
  return (
    <>
      <section className="main max-w-[1170px] m-auto flex flex-col-reverse relative text-[#2e3050] md:flex-row md:items-center">
        <div className="text px-6 flex flex-col items-center gap-6 text-center md:text-left md:items-start md:max-w-[500px]">
          <h1 className="text-4xl md:text-5xl ">
            Next generation digital banking
          </h1>
          <p className="text-[1.1rem] text-gray-400">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="gradient rounded-full text-white py-2 px-4">
            Request Invite
          </div>
        </div>
        <div className="image md:relative ">
          <img
            src={mainImage}
            alt="main Image"
            className="main-image absolute -top-28 -z-[2] lg:-right-44"
          />
          <img
            src={mainBgImage}
            alt="main background Image"
            className="w-full relative -z-10 md:hidden"
          />
          <div className="relative">
            <img
              src={mainBgImageDesktop}
              alt="main background Image"
              className="hidden w-full relative -z-10 md:block"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
