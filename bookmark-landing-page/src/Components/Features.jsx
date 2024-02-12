import { useState } from "react";
import Feature from "./utilities/Feature";

const Features = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="features">
      <div className="info text-center">
        <h1 className="text-4xl font-medium py-6">Features</h1>
        <p className="max-w-[540px] m-auto text-gray-500 leading-6">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="tabs mt-12">
        <nav>
          <ul className="flex justify-center max-w-[770px] m-auto ">
            <li
              className={`w-full flex justify-center border-b-2 pb-6 cursor-pointer ${
                active === 1 && "border-b-4 border-b-orange-600"
              }`}
              onClick={() => setActive(1)}
            >
              <h1 className="pr-20">Simple Bookmarking</h1>
            </li>
            <li
              className={`w-full flex justify-center border-b-2 pb-6 cursor-pointer ${
                active === 2 && "border-b-4 border-b-orange-600"
              }`}
              onClick={() => setActive(2)}
            >
              <h1 className="pr-20">Speedy Searching</h1>
            </li>
            <li
              className={`w-full flex justify-center border-b-2 pb-6 cursor-pointer ${
                active === 3 && "border-b-4 border-b-orange-600"
              }`}
              onClick={() => setActive(3)}
            >
              <h1>Easy Sharing</h1>
            </li>
          </ul>
        </nav>

        <Feature value={active} />
      </div>
    </section>
  );
};

export default Features;
