import featureImg from "../assets/images/mobile/image-interactive.jpg";

const Feature = () => {
  return (
    <>
      <section className="feature my-24">
        <div className="image px-6">
          <img src={featureImg} alt="feature image" />
        </div>
        <div className="text px-12 grid mt-10 text-center">
          <h1 className="text-3xl tracking-wider josefin-sans uppercase mb-4 text-[--Black] ">
            The leader in interactive VR
          </h1>
          <p className="text-[--Grey]">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
    </>
  );
};

export default Feature;
