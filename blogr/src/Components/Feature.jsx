// import pattern from "../assets/images/bg-pattern-circles.svg";
import imageDesktop from "../assets/images/illustration-editor-desktop.svg";
import imageMobile from "../assets/images/illustration-editor-mobile.svg";

const Feature = () => {
  return (
    <section className="my-12 pb-24 md:overflow-hidden md:pb-44">
      <div className="container m-auto">
        <h1 className="text-center text-2xl font-medium md:mt-20 md:text-4xl">
          Designed for the future
        </h1>

        <div className="features px-6 flex flex-col gap-8 text-center md:flex-row-reverse">
          <div className="image relative w-full">
            <img
              src={imageMobile}
              alt="image"
              className="object-contain my-12 sm:m-auto md:hidden"
            />
            <img
              src={imageDesktop}
              alt="image"
              className="hidden object-contain my-12 sm:m-auto md:block md:scale-150 md:absolute md:top-20 -right-1/3"
            />
          </div>
          <div className="text md:max-w-[550px] m-auto md:text-left md:grid gap-10 md:mb-56 md:mt-40">
            <div className="text-1">
              <h1 className="text-3xl font-semibold mb-4 px-12 md:px-0">
                Introducing an extensible editor
              </h1>
              <p className="text-gray-600 tracking-wide">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div className="text-2">
              <h1 className="text-2xl font-semibold mb-4">
                Robust content management
              </h1>
              <p className="text-gray-600 tracking-wide">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
