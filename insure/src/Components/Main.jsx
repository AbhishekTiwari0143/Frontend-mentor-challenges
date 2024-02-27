import mainBgMobile from "../assets/images/image-intro-mobile.jpg";
import mainBgDesktop from "../assets/images/image-intro-desktop.jpg";
import leftM from "../assets/images/bg-pattern-intro-left-mobile.svg";
import rightM from "../assets/images/bg-pattern-intro-right-mobile.svg";
import leftD from "../assets/images/bg-pattern-intro-left-desktop.svg";
import rightD from "../assets/images/bg-pattern-intro-right-desktop.svg";

const Main = () => {
  return (
    <>
      <main className="bg-[--Dark-Violet] relative">
        <img
          src={leftD}
          alt="image"
          className="absolute -bottom-[60%] hidden lg:block"
        />

        <div className="relative lg:container m-auto ">
          <div className="main-image">
            <img
              src={mainBgMobile}
              alt="main image background"
              className="object-contain w-full z-10 md:hidden"
            />
            <img
              src={mainBgDesktop}
              alt="main image background"
              className="hidden object-contain w-full lg:w-auto lg:absolute top-20 right-12 z-10 sm:right-0 md:block"
            />
          </div>
          <div className="main-text relative text-[--Very-Light-Gray] lg:w-1/2">
            <img src={leftM} alt="image" className="absolute lg:hidden" />
            <div className="text text-center px-6 py-20 flex flex-col gap-6 lg:text-left">
              <hr className="border-2 w-1/3 rounded-lg my-12 hidden lg:block" />
              <h1 className="text-5xl font-normal DM-serif md:text-7xl">
                Humanizing <br className="hidden md:block" /> your insurance.
              </h1>
              <p className="text-lg">
                Get your life insurance coverage easier and faster. We blend our
                expertise and technology to help you find the plan that’s right
                for you. Ensure you and your loved ones are protected.
              </p>
              <button className="border-2 border-white px-4 py-1 w-max m-auto font-light text-xl md:">
                View plans
              </button>
              <img
                src={rightM}
                alt="image"
                className="absolute -bottom-[27%] right-0 lg:hidden"
              />
            </div>
          </div>
        </div>
        <img
          src={rightD}
          alt="image"
          className="absolute top-0 right-0 hidden lg:block"
        />
      </main>
    </>
  );
};

export default Main;
