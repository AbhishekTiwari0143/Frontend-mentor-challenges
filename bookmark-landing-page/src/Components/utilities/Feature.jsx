// import { useState } from "react";
import { feature } from "../../assets/text";
import Button from "./Button";

export default function Feature({ value }) {
  // const [active, setActive] = useState(props.active);

  return (
    <>
      {feature.map((item) => {
        return (
          value === item.id && (
            <li
              key={item.id}
              className="flex flex-col text-center md:w-[1070px] max-w-[1440px] gap-12 m-auto mt-12 md:flex-row md:text-left"
            >
              <img
                src={item.image}
                alt="image"
                className="w-[80%] m-auto object-contain md:w-auto"
              />
              <div className="text flex flex-col gap-6 justify-center items-center md:items-start md:gap-8 md:w-[50%] ">
                <h1 className="text-2xl font-semibold md:text-4xl">
                  {item.title}
                </h1>
                <p className="text-gray-600">{item.subtitle}</p>
                <Button title="More Info" />
              </div>
            </li>
          )
        );
      })}
    </>
  );
}
