// import { useState } from "react";
import { feature } from "../../assets/text";

export default function Feature({ value }) {
  // const [active, setActive] = useState(props.active);

  return (
    <>
      {feature.map((item) => {
        return (
          value === item.id && (
            <li
              key={item.id}
              className="flex w-[1070px] max-w-[1440px] gap-12 m-auto mt-12"
            >
              <img src={item.image} alt="image" className="object-contain" />
              <div className="text flex flex-col gap-8 justify-center items-left">
                <h1 className="text-2xl font-semibold md:text-4xl">
                  {item.title}
                </h1>
                <p className="text-gray-600">{item.subtitle}</p>
                <button className="text-lg bg-[--soft-blue] py-2 text-white font-semibold px-6 rounded-lg flex justify-center w-max">
                  More Info
                </button>
              </div>
            </li>
          )
        );
      })}
    </>
  );
}
