import { features } from "../text";

const FeatureCard = () => {
  return (
    <>
      {features.map((feature) => {
        return (
          <div key={feature.id} className="my-12 flex flex-col">
            <img
              src={feature.image}
              alt="image"
              className="max-w-full m-auto"
            />
            <div className="text text-center flex flex-col gap-6 mt-6">
              <h1 className="text-2xl">{feature.title}</h1>
              <p className="text-gray-500">{feature.info}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FeatureCard;
