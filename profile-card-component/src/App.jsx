import bottomPattern from "../src/assets/images/bg-pattern-bottom.svg";
import cardPattern from "../src/assets/images/bg-pattern-card.svg";
import topPattern from "../src/assets/images/bg-pattern-top.svg";
import avtar from "../src/assets/images/image-victor.jpg";

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-[--dark-cyan] flex justify-center items-center relative overflow-hidden">
        <img
          src={topPattern}
          alt="top pattern"
          className="absolute -left-[21rem] -top-[32rem]"
        />
        <div className="card w-80 rounded-2xl z-10 ">
          <div className="rounded-2xl p-4 bg-white relative">
            <img
              src={cardPattern}
              alt="image pattern"
              className="object-cover rounded-t-2xl absolute top-0 left-0"
            />
            <div className="text text-center mt-16 relative z-10">
              <img
                src={avtar}
                alt="profile photo"
                className="m-auto rounded-full border-4 border-white mb-2"
              />
              <h1 className="font-bold text-xl mb-2">
                Victor Crest
                <span className="ml-4 text-xl text-[--dark-grayish-blue] font-light">
                  26
                </span>
              </h1>
              <p className="mb-6 font-normal text-[--dark-grayish-blue]">
                London
              </p>
            </div>
            <hr />
            <div className="socials flex justify-around items-center pt-6 text-[--very-dark-desaturated-blue]">
              <div className="follow flex flex-col items-center">
                <h1 className="text-xl font-bold">80K</h1>
                <p className="text-xs tracking-wider font-extralight text-[--dark-grayish-blue]">
                  Followers
                </p>
              </div>
              <div className="likes flex flex-col items-center">
                <h1 className="text-xl font-bold">803K</h1>
                <p className="text-xs tracking-wider font-extralight text-[--dark-grayish-blue]">
                  Links
                </p>
              </div>
              <div className="photos flex flex-col items-center">
                <h1 className="text-xl font-bold">1.4k</h1>
                <p className="text-xs tracking-wider font-extralight text-[--dark-grayish-blue]">
                  Photos
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={bottomPattern}
          alt="bottom pattern"
          className="absolute -right-[16rem] -bottom-[38rem]"
        />
      </div>
    </>
  );
};

export default App;
