import mainImageM from "../assets/images/illustration-mockups.svg";

const Main = () => {
  return (
    <main className="bg-[--Very-Pale-Cyan]">
      <div className="main container m-auto relative flex flex-col gap-6 lg:pb-16 py-12 lg:flex-row">
        <div className="text my-20 grid place-items-center px-7 text-center gap-6 text-[--Very-Dark-Cyan] txt-shadow z-10 lg:my-8 lg:text-left">
          <h1 className="text-2xl poppins-bold sm:text-3xl  md:text-4xl">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-sm px-4 md:text-base md:max-w-[800px] lg:px-0">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="text-white Open-Sans font-semibold bg-[--Pink] px-6 py-2 rounded-full box-shadow mt-8 md:py-3 md:px-8 hover:bg-[--Light-Pink]">
            Get Started For Free
          </button>
        </div>
        <div className="image grid place-content-center">
          <img src={mainImageM} alt="main Image" className="px-6 z-10" />
        </div>
      </div>
    </main>
  );
};

export default Main;
