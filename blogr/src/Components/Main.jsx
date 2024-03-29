import MainImageMobile from "../assets/images/bg-pattern-intro-mobile.svg";
import MainImageDesktop from "../assets/images/bg-pattern-intro-desktop.svg";
import Header from "./Header";

const Main = () => {
  return (
    <>
      <div className="overflow-hidden gradient">
        <Header />
        <div className="main py-28 rounded-bl-[7rem]">
          {/* <div className="container mx-auto"> */}
          <div className="title relative">
            <img
              src={MainImageMobile}
              alt="image-background"
              className="z-[1] absolute -right-20 md:hidden"
            />
            <img
              src={MainImageDesktop}
              alt="image-background"
              className="hidden z-[1] absolute -right-52 -top-[700px] md:block"
            />
            <div className="greeting relative z-[10] flex flex-col items-center gap-4 px-6 md:px-0">
              <h1 className="text-4xl text-white text-center ">
                A modern <br className="md:hidden" /> publishing platform
              </h1>
              <p className="text-center text-white font-light text-xl">
                Grow your audience and build your online brand
              </p>
              <div className="buttons flex flex-row gap-4 font-semibold py-6">
                <button className="text-[--Light-red] bg-[#ffffff] px-4 py-2 rounded-3xl hover:bg-[#ffffffa4] hover:text-white">
                  Start for Free
                </button>
                <button className="text-[#ffffff] border-[1px] border-[#ffffff] px-4 py-2 bg-transparent rounded-3xl hover:bg-white hover:text-black">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Main;
