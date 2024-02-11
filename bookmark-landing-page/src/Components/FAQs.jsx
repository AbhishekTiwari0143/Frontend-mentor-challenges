import QuestionCard from "./utilities/QUestionCard";

const FAQs = () => (
  <>
    <section className="FAQ flex justify-center mb-16">
      <div className="title-text text-center p-6">
        <h1 className="text-3xl font-medium mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 text-[1rem] mb-16">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
        <QuestionCard />
        <button className="text-lg bg-[--soft-blue] py-2 text-white font-semibold px-6 rounded-lg flex justify-center m-auto mt-12">
          More Info
        </button>
      </div>
    </section>
  </>
);
export default FAQs;
