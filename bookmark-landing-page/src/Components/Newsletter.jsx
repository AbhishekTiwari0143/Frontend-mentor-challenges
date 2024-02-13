import error from "../assets/images/icon-error.svg";

import { useState } from "react";

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const valueChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    setInputValue(e.target.value);

    let value = inputValue;
    console.log(value);
  };
  console.log(isError);

  const submit = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (inputValue && !inputValue.trim().includes("@")) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  return (
    <section className="newsletter bg-[--soft-blue] pb-12 pt-20">
      <div className="text px-6 text-white text-center">
        <p className="text-sm font-bold tracking-[.2rem] uppercase">
          35,000+ already joined
        </p>
        <h1 className=" text-3xl font-semibold">
          Stay up-to-date with what we’re doing
        </h1>
      </div>
      <form
        className="buttons p-8 flex flex-col gap-4 m-auto md:max-w-[1440px] md:justify-center md:flex-row"
        onSubmit={submit}
      >
        <div
          className={`input-field flex bg-white rounded-md outline-2 ${
            isError && "outline-orange-600"
          }`}
        >
          <input
            type="text"
            placeholder="Enter your email address"
            value={inputValue}
            onChange={valueChange}
            className="px-6 py-2 text-lg text-gray-700  rounded-md md:w-[440px] md:px-4 focus:outline-none"
          />
          {isError && (
            <img
              src={error}
              alt="error image"
              className="error object-contain mr-2"
            />
          )}
        </div>

        <button
          type="submit"
          className="font-semibold text-lg py-2 text-center bg-[--soft-red] rounded-xl text-white md:px-4
          outline-1 hover:outline hover:text-[--soft-red] hover:bg-white"
        >
          Contact Us
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
