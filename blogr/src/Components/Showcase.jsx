import laptop from "../assets/images/illustration-laptop-mobile.svg";

const Showcase = () => {
  return (
    <>
      <section className="showcase my-20">
        <div className="container-mx-auto">
          <div className="image">
            <img src={laptop} alt="image laptop" />
          </div>
          <div className="showcase_text">
            <div className="text-1 px-6 text-center my-8">
              <h1 className="text-3xl font-medium mb-8">Free, open, simple</h1>
              <p className="text-gray-600">
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
            </div>
            <div className="text-2 text-center px-6">
              <h1 className="text-3xl font-medium mb-8">Powerful tooling</h1>
              <p className="text-gray-600">
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
