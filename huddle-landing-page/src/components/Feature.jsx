import { Features } from "../assets/data";
import bgtopFeatureM1 from "../assets/images/bg-section-top-mobile-1.svg";
import bgtopFeatureD1 from "../assets/images/bg-section-top-desktop-1.svg";
import bgtopFeatureM2 from "../assets/images/bg-section-top-mobile-2.svg";
import bgtopFeatureD2 from "../assets/images/bg-section-top-desktop-2.svg";
import bgBottomFeatureM1 from "../assets/images/bg-section-bottom-mobile-1.svg";
import bgBottomFeatureD1 from "../assets/images/bg-section-bottom-desktop-1.svg";
import bgBottomFeatureM2 from "../assets/images/bg-section-bottom-mobile-2.svg";
import bgBottomFeatureD2 from "../assets/images/bg-section-bottom-desktop-2.svg";

const Feature = () => {
  return (
    <>
      <section className="Feature relative bg-[--Very-Pale-Blue] py-16">
        <img
          src={bgtopFeatureM1}
          alt="image bottom"
          className="absolute top-[-7rem] md:hidden"
        />
        <img
          src={bgtopFeatureD1}
          alt="image bottom"
          className="hidden absolute top-[-7rem] md:block"
        />
        <div className="flex flex-col gap-10">
          {Features.map((feature) => {
            return (
              <div key={feature.id} className={`${
                    feature.id === 2 && "bg-white py-44"
                  }`}>
                {feature.id === 1 && (
                  <img
                    src={bgBottomFeatureM1}
                    alt="curve bg"
                    className="absolute -bottom-20 z-10 md:hidden"
                  />
                )}
                {feature.id === 1 && (
                  <img
                    src={bgBottomFeatureD1}
                    alt="curve bg"
                    className="hidden absolute -bottom-20 z-10 md:block"
                  />
                )}
                {feature.id === 3 && (
                  <img
                    src={bgtopFeatureM2}
                    alt="curve bg"
                    className="absolute -top-32 z-10 md:hidden"
                  />
                )}
                {feature.id === 3 && (
                  <img
                    src={bgtopFeatureD2}
                    alt="curve bg"
                    className="hidden absolute -top-32 z-10 md:block"
                  />
                )}
                <div
                  className={`container m-auto container${feature.id} ${
                    feature.id === 2 && "bg-white py-44"
                  } flex flex-col items-center justify-center relative md:flex-row ${
                    (feature.id === 1 || feature.id === 3) &&
                    "md:flex-row-reverse gap-16"
                  }`}
                >
                  <img
                    src={feature.image}
                    alt="image"
                    className="mb-12 w-1/2 object-contain"
                  />
                  <div className="text">
                    <h1 className="text-3xl poppins-bold mb-6 text-center">
                      {feature.title}
                    </h1>
                    <p className="text-center Open-Sans font-semibold max-w-[500px]">
                      {feature.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <img
          src={bgBottomFeatureM2}
          alt="curve image"
          className="absolute -bottom-[6rem] left-0 w-full md:hidden"
        />
        <img
          src={bgBottomFeatureD2}
          alt="curve image"
          className="hidden absolute -bottom-[8.7rem] left-0 w-full md:block"
        />
      </section>
    </>
  );
};

export default Feature;
