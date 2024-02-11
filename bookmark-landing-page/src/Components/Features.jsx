const Features = () => (
  <section className="features">
    <div className="info text-center">
      <h1 className="text-4xl font-medium py-6">Features</h1>
      <p className="max-w-[540px] m-auto text-gray-500 leading-6">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
    </div>
    <div className="tabs">
      <nav>
        <ul>
          <li>
            <a href="#">Simple Bookmarking</a>
          </li>
          <li>
            <a href="#">Speedy Searching</a>
          </li>
          <li>
            <a href="#">Easy Sharing</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
);

export default Features;
