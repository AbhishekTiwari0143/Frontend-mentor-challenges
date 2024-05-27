// import Form from "./assets/components/Form1";
import backgroundDesktop from "./assets/assets/images/bg-sidebar-desktop.svg";
const App = () => {
  return (
    <>
      <section className=" w-screen h-screen">
        <div className="form flex justify-center items-center w-screen h-full">
          <div className="left p-4 relative w-[850px] h-[550px] bg-white rounded-xl flex">
            <div className="left relative">
              <img
                src={backgroundDesktop}
                alt="image"
                className="bg-cover h-full"
              />
              <div className="text absolute top-20 left-7">
                <div className="flex gap-4 justify-center items-center">
                  <h1 className="text-xl border rounded-full p-4">1</h1>
                  <div className="step">
                    <p>step 1</p>
                    <p>Your Info</p>
                  </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <h1 className="text-xl border rounded-full p-4">2</h1>
                  <div className="step">
                    <p>step 2</p>
                    <p>Select plan</p>
                  </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <h1 className="text-xl border rounded-full p-4">3</h1>
                  <div className="step">
                    <p>step 3</p>
                    <p>Add-ons</p>
                  </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <h1 className="text-xl border rounded-full p-4">4</h1>
                  <div className="step">
                    <p>step 4</p>
                    <p>Summary</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-function px-12 h-full">
              <div className="form-1 flex flex-col h-full">
                <div className="title flex flex-col py-8">
                  <h1 className="text-[--Marine-blue] ubuntu-bold text-3xl ">
                    Personal info
                  </h1>
                  <p className="text-[--Cool-gray] ubuntu-regular">
                    Please provide your name, email address, and phone number.
                  </p>
                </div>
                <form
                  action=""
                  className="flex h-full justify-between flex-col"
                >
                  <div className="form-inputs flex flex-col">
                    <label
                      className="text-[--Marine-blue] ubuntu-regular  text-sm"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="p-2 tracking-wide rounded-md border border-[--Light-gray] mb-4 text-sm"
                      placeholder="e.g.Stephen King"
                      id="name"
                    />
                    <label
                      className="text-[--Marine-blue] ubuntu-regular  text-sm"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="p-2 tracking-wide rounded-md border border-[--Light-gray] mb-4 text-sm"
                      placeholder="e.g.StephenKing@lorem.com"
                      id="email"
                    />
                    <label
                      className="text-[--Marine-blue] ubuntu-regular text-sm"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="p-2 tracking-wide rounded-md border border-[--Light-gray] mb-4 text-sm"
                      placeholder="e.g. +1 234 567 890"
                      id="phone"
                    />
                  </div>

                  <button className="p-2 bg-[--Marine-blue] rounded-lg px-4  flex justify-end items-end w-max">
                    Next Step
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
