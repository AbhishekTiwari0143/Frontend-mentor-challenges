// import pattern from "../assets/images/bg-pattern-circles.svg";
// import imageDesktop from "../assets/images/illustration-editor-desktop.svg";
import imageMobile from "../assets/images/illustration-editor-mobile.svg";

const Feature = () => {
  return (
    <section className="my-12 pb-24">
      <div className="container mx-auto">
        <h1 className="text-center text-2xl font-medium">
          Designed for the future
        </h1>
        <div className="image">
          <img src={imageMobile} alt="image" className="object-contain my-12"/>
        </div>

        <div className="features px-6 flex flex-col gap-8 text-center">
          <div className="text-1">
            <h1 className="text-3xl font-semibold mb-4 px-12">
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
    </section>
  );
};

export default Feature;
