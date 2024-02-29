import CreationCard from "./utilities/CreationCard";
import { CreationData } from "./text";

const Creations = () => {
  return (
    <section className="">
      <div className="creation mb-20 container m-auto px-6 relative">
        <h1 className="text-center text-4xl josefin-sans uppercase tracking-normal py-8 lg:text-left md:px-6">
          Our Creations
        </h1>
        <div className="Cards grid grid-cols-1 px-6 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CreationData.map((data) => {
            return (
              <CreationCard
                key={data.id}
                imageM={data.imageMobile}
                imageD={data.imageDesktop}
                title={data.title}
              />
            );
          })}
        </div>
        <div className="button w-full flex py-10">
          <button className="text-xl tracking-widest px-8 py-2 uppercase border-[1px] border-black m-auto lg:absolute top-6 right-20">
            See all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Creations;
