import { Features } from "../assets/data";

const Feature = () => {
  return (
    <>
      <section className="Feature">
        <div className="container m-auto px-6 flex flex-col gap-36">
          {Features.map((feature) => {
            return (
              <div
                key={feature.id}
                className={`container${feature.id} flex flex-col items-center justify-center`}
              >
                <img src={feature.image} alt="image" className="mb-12" />
                <h1 className="text-3xl poppins-bold mb-6">{feature.title}</h1>
                <p className="text-center Open-Sans font-semibold">
                  {feature.paragraph}
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
