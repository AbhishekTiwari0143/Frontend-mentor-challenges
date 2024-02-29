import featureImgM from "../assets/images/mobile/image-interactive.jpg";
import featureImgD from "../assets/images/desktop/image-interactive.jpg";

const Feature = () => {
  return (
    <>
      <section className="feature my-24 md:flex md:container m-auto px-6 relative md:my-32">
        <div className="image grid place-items-center md:px-0">
          <img src={featureImgM} alt="feature image" className="lg:hidden" />
          <img
            src={featureImgD}
            alt="feature image"
            className="hidden lg:block"
          />
        </div>
        <div className="text grid mt-10 text-center md:px-0 md:text-left">
          <div className="md:absolute md:bg-white md:-right-4 lg:right-[5%] -bottom-4 md:max-w-[350px] lg:max-w-[600px] py-5 md:p-6 lg:pt-20 lg:pl-20">
            <h1 className="text-3xl tracking-wider josefin-sans uppercase mb-4 text-[--Black] lg:text-5xl md:mb-6">
              The leader in interactive VR
            </h1>
            <p className="text-[--DarkGray]">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
