import bgImg from "../assets/images/mobile/image-hero.jpg";

const Main = () => {
  return (
    <>
      <main className="h-full">
        <div className="main h-full">
          <div className="bg">
            <img
              src={bgImg}
              alt="background image"
              className="absolute top-0 left-0"
            />
          </div>
          <div className="main-text h-[85vh] relative z-10 flex justify-center items-center px-6">
            <h1 className="uppercase text-5xl text-white josefin-sans border-2 p-5">
              Immersive experience that deliver
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
