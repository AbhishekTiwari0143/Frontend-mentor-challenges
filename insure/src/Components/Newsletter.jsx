import patternM from "../assets/images/bg-pattern-how-we-work-mobile.svg";
import patternD from "../assets/images/bg-pattern-how-we-work-desktop.svg";

const Newsletter = () => {
  return (
    <>
      <section className="work bg-[--Dark-Violet] relative my-36  container m-auto px-6">
        <div className="text-work px-6 py-20 text-center text-white flex flex-col gap-8 md:flex-row md:text-left">
          <img
            src={patternM}
            alt="pattern image"
            className="absolute top-0 right-0 md:hidden"
          />
          <img
            src={patternD}
            alt="pattern image"
            className="absolute h-full top-0 right-0 hidden md:block"
          />
          <h1 className="text-5xl DM-serif md:text-7xl">
            Find out more <br className="hidden md:block" /> about how we work
          </h1>
          <button className="uppercase border-white border-2 px-4 py-2 w-max m-auto tracking-widest cursor-pointer hover:bg-white hover:text-black hover:font-medium z-10">
            How we Work
          </button>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
