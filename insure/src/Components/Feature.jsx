import process from "../assets/images/icon-snappy-process.svg";
import prices from "../assets/images/icon-affordable-prices.svg";
import people from "../assets/images/icon-people-first.svg";

const data = [
  {
    id: 1,
    image: process,
    heading: "Snappy Process",
    subheading:
      "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
  },
  {
    id: 2,
    image: prices,
    heading: "Affordable Prices",
    subheading:
      "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
  },
  {
    id: 3,
    image: people,
    heading: "People First",
    subheading:
      "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
  },
];

const Feature = () => {
  return (
    <>
      <section className="feature p-6 container m-auto">
        <div className="title mt-24 mb-20 md:mt-60">
          <hr className="border-[1px] w-[12%] mb-8" />
          <h1 className="text-center text-[--Dark-Violet] text-4xl DM-serif md:text-left md:text-7xl">
            We&apos;re different
          </h1>
        </div>
        <div className="features flex flex-col gap-12 md:flex-row">
          {data.map((feature) => {
            return (
              <div
                className={`feature-${feature.id} flex flex-col justify-center items-center gap-4 md:items-start`}
                key={feature.id}
              >
                <img src={feature.image} alt="image process" className="pb-6" />
                <h2 className="text-2xl DM-serif">{feature.heading}</h2>
                <p className="text-center Karla md:text-left">
                  {feature.subheading}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Feature;
