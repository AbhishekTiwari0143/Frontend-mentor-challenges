import laptopMobile from "../assets/images/illustration-laptop-mobile.svg";
import laptopDesktop from "../assets/images/illustration-laptop-desktop.svg";

const Showcase = () => {
  return (
    <>
      <section className="showcase my-20 md:mt-48 md:mb-80">
        <div className="relative container m-auto md:flex md:w-full">
          <div className="image relative w-full">
            <img
              src={laptopMobile}
              alt="image laptop"
              className="sm:m-auto md:hidden"
            />
            <img
              src={laptopDesktop}
              alt="image desktop"
              className="hidden scale-150 md:block md:absolute top-0 -left-1/3 w-full"
            />
          </div>
          <div className="layout md:w-full md:flex flex-col items-end justify-end">
            <div className="showcase_text md:max-w-[550px] text-center md:text-left my-auto md:mr-20">
              <div className="text-1 px-6 my-8 ">
                <h1 className="text-3xl font-medium mb-8">
                  Free, open, simple
                </h1>
                <p className="text-gray-600">
                  Blogr is a free and open source application backed by a large
                  community of helpful developers. It supports features such as
                  code syntax highlighting, RSS feeds, social media integration,
                  third-party commenting tools, and works seamlessly with Google
                  Analytics. The architecture is clean and is relatively easy to
                  learn.
                </p>
              </div>
              <div className="text-2 px-6">
                <h1 className="text-3xl font-medium mb-8">Powerful tooling</h1>
                <p className="text-gray-600">
                  Batteries included. We built a simple and straightforward CLI
                  tool that makes customization and deployment a breeze, but
                  capable of producing even the most complicated sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
