import CreationCard from "./utilities/CreationCard";
import { CreationData } from "./text";

const Creations = () => {
  return (
    <section className="">
      <div className="creation mb-20">
        <h1 className="text-center text-4xl josefin-sans uppercase tracking-normal py-8">
          Our Creations
        </h1>
        <div className="Cards grid grid-cols-1 px-6 gap-6">
          {console.log(CreationData)}
          {CreationData.map((data) => {
            return (
              <CreationCard
                key={data.id}
                image={data.image}
                title={data.title}
              />
            );
          })}
        </div>
        <div className="button w-full flex py-10">
          <button className="text-xl tracking-widest px-8 py-2 uppercase border-[1px] border-black m-auto">
            See all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Creations;
