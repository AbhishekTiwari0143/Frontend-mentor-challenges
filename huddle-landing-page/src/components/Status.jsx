import StatusCard from "./utilities/StatusCard";
import { status } from "../assets/data";

const Status = () => {
  return (
    <>
      <section className="status">
        <div className="showcase grid place-items-center my-28 gap-20 text-[--Very-Dark-Cyan]">
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
