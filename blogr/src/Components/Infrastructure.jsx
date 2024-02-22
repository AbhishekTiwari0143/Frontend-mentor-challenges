import pattern from "../assets/images/bg-pattern-circles.svg";
import phone from "../assets/images/illustration-phones.svg";

const Infrastructure = () => {
  return (
    <>
      <section className="infrastruture gradient-blue rounded-tr-[5rem] rounded-bl-[5rem] relative mt-56 z-0">
        <img src={phone} alt="image phone" className="absolute -top-1/2 z-10" />
        <div className="container mx-auto relative overflow-hidden">
          <div className="images ">
            <img
              src={pattern}
              alt="image pattern"
              className="pattern absolute -top-1/3"
            />
          </div>
          <div className="text pt-40 py-20 px-6 text-white text-center grid gap-6">
            <h1 className="text-3xl px-12">State of the Art Infrastructure</h1>
            <p className="text-base text-[--Grayish-blue] px-6">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Infrastructure;
