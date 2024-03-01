import mainImage from "../assets/images/screen-mockups.svg";

const Main = () => {
  return (
    <main>
      <div className="main flex flex-col gap-6">
        <div className="text my-20 grid place-items-center px-7 text-center gap-6 text-[--Very-Dark-Cyan] txt-shadow">
          <h1 className="text-2xl poppins-bold ">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-sm px-4">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="text-white poppins-bold bg-[--Pink] px-6 py-2 rounded-full box-shadow mt-8">
            Get Started For Free
          </button>
        </div>
        <div className="image">
          <img src={mainImage} alt="main Image" className="w-[] px-6" />
        </div>
      </div>
    </main>
  );
};

export default Main;
