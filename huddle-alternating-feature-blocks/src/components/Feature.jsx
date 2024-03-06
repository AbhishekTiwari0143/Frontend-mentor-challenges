import { Features } from "../assets/data.js";

const Feature = () => {
  return (
    <>
      <section className="Feature pb">
        <div className="container m-auto my-36 px-6 grid gap-10 lg:mb-56">
          {Features.map((feature) => {
            return (
              <div
                key={feature.id}
                className="box-shadow flex flex-col-reverse gap-6 p-10 rounded-xl md:flex-row lg:gap-16"
              >
                <div className="text text-center flex flex-col lg:justify-center lg:text-left lg:px-20">
                  <h1 className="text-xl mb-2 poppins-bold lg:text-4xl text-[--Very-Dark-Cyan] md:mb-4">
                    {feature.title}
                  </h1>
                  <p className="text-sm lg:text-base text-[--Grayish-Blue]">
                    {feature.paragraph}
                  </p>
                </div>
                <div className="image">
                  <img src={feature.image} alt="feature image" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Feature;
