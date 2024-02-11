import mainImage from "../assets/images/illustration-hero.svg";

const Main = () => (
  <section className="max-w-[1440px] m-auto flex flex-col-reverse">
    <div className="main-text p-6 grid gap-6">
      <h1 className="text-3xl text-center font-semibold">
        A Simple Bookmark Manager
      </h1>
      <p className="text-center text-[.95rem] text-gray-500 font-normal max-w-[85%] m-auto tracking-wide">
        A clean and simple interface to organize your favourite websites. Open a
        new tab and see your sites load instantly. Try it for free.
      </p>
      <div className="download flex gap-2">
        <button
          type="button"
          className="px-4 py-2 rounded-lg text-white font-medium text-base m-auto bg-[--soft-blue] box-shadow"
        >
          Get it on Chrome
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-lg font-medium text-base m-auto box-shadow"
        >
          Get it on Firefox
        </button>
      </div>
    </div>
    <div className="main-img">
      <img src={mainImage} alt="main image" />
    </div>
  </section>
);

export default Main;
