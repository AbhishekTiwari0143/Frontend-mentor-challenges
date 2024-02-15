import ArticleCard from "./utilities/ArticleCard";

const Articles = () => {
  return (
    <>
      <section className="articles max-w-[1170px] m-auto p-8">
        <h1 className="text-3xl text-center py-8 md:text-5xl md:text-left">
          Latest Articles
        </h1>
        <div className="article grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ArticleCard />
        </div>
      </section>
    </>
  );
};

export default Articles;
