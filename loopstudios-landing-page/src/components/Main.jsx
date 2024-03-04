import bgImgM from "../assets/images/mobile/image-hero.jpg";
import bgImgD from "../assets/images/desktop/image-hero.jpg";

{
  console.log("Have a Good Day");
}
const Main = () => {
  return (
    <>
      <main className="image relative">
        <img
          src={bgImgD}
          alt="background image"
          className="hidden object-contain z-[1] w-full md:block"
        />
        <div className="main md:container m-auto">
          <div className="">
            <img
              src={bgImgM}
              alt="background image"
              className="object-contain z-[1] w-full md:hidden"
            />
          </div>
          <div className="main-text mx-6 absolute top-36 lg:top-56 2xl:top-80">
            <h1 className="uppercase text-5xl text-white josefin-sans border-[2px] border-[--White] p-5 max-w-[680px] md:m-auto lg:text-6xl md:px-12 lg:m-0 2xl:text-8xl 2xl:max-w-[1580px]">
              Immersive experience that deliver
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
