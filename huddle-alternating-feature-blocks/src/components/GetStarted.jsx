const GetStarted = () => {
  return (
    <>
      <section className="get-started relative">
        <div className="absolute w-full h-full top-[-200px] left-0 lg:top-[-250px] lg:left-1/2 lg:translate-x-[-50%] lg:max-w-[800px]">
          <div className="flex flex-col items-center justify-center gap-4 bg-white py-10 mx-6 px-2 box-shadow  rounded-2xl">
            <h1 className="text-[1rem] text-center poppins-bold md:text-4xl text-[--Very-Dark-Cyan]">
              Ready To Build Your Community?
            </h1>
            <button className="text-sm text-white bg-[--Pink] px-8 py-2 rounded-3xl box-shadow lg:px-16 lg:py-4 lg:rounded-full hover:bg-[--Light-Pink]">
              Get Started For Free
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
