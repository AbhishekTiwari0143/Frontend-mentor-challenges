import FeatureCard from "./utilities/FeatureCard";

const Features = () => {
  return (
    <>
      <section className="features bg-[--LightGrayishBlue] relative -z-10">
        <div className="max-w-[1170px] m-auto w-full my-20 p-6 md:my-4">
          <div className="text text-center md:text-left">
            <h1 className="text-4xl text-[#2e3050]">
              Why choose <br className="block md:hidden" /> Easybank?
            </h1>
            <p className="mt-6 text-gray-500">
              We leverage Open Banking to turn your bank account into your
              financial hub. <br className="hidden md:block" /> Control your
              finances like never before.
            </p>
          </div>
          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
