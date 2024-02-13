import mainImage from "../assets/images/illustration-hero.svg";
import Button from "./utilities/Button";

const Main = () => (
  <section className="flex flex-col-reverse items-center max-w-[1170px] m-auto md:flex-row md:mt-8 md:mb-16">
    <div className="main-text p-6 flex flex-col gap-6 max-w-[540px] text-center md:text-left">
      <h1 className="text-3xl font-semibold md:text-5xl">
        A Simple Bookmark Manager
      </h1>
      <p className="text-[.95rem] text-gray-400 font-normal m-auto tracking-wide md:text-[1.2rem] ">
        A clean and simple interface to organize your favourite websites. Open a
        new tab and see your sites load instantly. Try it for free.
      </p>
      <div className="download flex gap-2">
        <Button title="Get it on Chrome" />
        <button
          type="button"
          className="px-4 py-2 rounded-lg font-medium text-base box-shadow outline-2 hover:outline hover:outline-[black]"
        >
          Get it on Firefox
        </button>
      </div>
    </div>
    <div className="main-img">
      <img src={mainImage} alt="main image" className="object-contain" />
    </div>
  </section>
);

export default Main;
