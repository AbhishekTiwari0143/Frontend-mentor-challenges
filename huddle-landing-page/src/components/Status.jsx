import StatusCard from "./utilities/StatusCard";
import { status } from "../assets/data";

const Status = () => {
  return (
    <>
      <section className="status">
        <div className="showcase container m-auto grid place-items-center grid-cols-2 my-28 gap-20 text-[--Very-Dark-Cyan] md:my-44">
          {status.map((element) => {
            return (
              <StatusCard
                key={element.id}
                icon={element.icon}
                data={element.data}
                text={element.text}
                text2={element.text2}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Status;
