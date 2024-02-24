import pattern from "../assets/images/bg-pattern-circles.svg";
import phone from "../assets/images/illustration-phones.svg";

const Infrastructure = () => {
  return (
    <>
      <section className="infrastruture gradient-blue rounded-tr-[5rem] rounded-bl-[5rem] relative mt-56 z-0 md:mt-0">
        <div></div>
        <img
          src={phone}
          alt="image phone"
          className="absolute -top-1/2 z-10 sm:scale-75 sm:top-[-20rem] md:scale-100 md:left-[5rem] md:-top-[5rem]"
        />
        <div className="container mx-auto relative overflow-hidden">
          <div className="images ">
            <img
              src={pattern}
              alt="image pattern"
              className="pattern absolute -top-1/3 md:-left-[25rem] md:-top-[30rem] md:scale-75"
            />
          </div>
          <div className=" md:flex flex-col justify-end items-end mr-20">
            <div className="text pt-40 py-20 px-6 text-white text-center grid gap-6 md:max-w-[600px]">
              <h1 className="text-3xl px-12">
                State of the Art Infrastructure
              </h1>
              <p className="text-base text-[--Grayish-blue] px-6">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Infrastructure;
