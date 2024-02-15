import { articles } from "../text";

const ArticleCard = () => {
  return (
    <>
      {articles.map((article) => {
        return (
          <div key={article.id} className="mt-20 md:mt-4">
            <img
              src={article.image}
              alt="image currency"
              className="rounded-md object-cover h-[180px] w-full"
            />
            <div className="text my-8 px-6 flex flex-col gap-3">
              <h6 className="text-[.9rem] text-gray-500">
                {article.subHeading}
              </h6>
              <h1 className="text-[1.4rem] leading-6">{article.heading}</h1>
              <p className="text-gray-500">{article.info}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ArticleCard;
