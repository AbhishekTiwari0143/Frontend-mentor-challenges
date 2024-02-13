import Button from "./utilities/Button";
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
        <Button title="More Info" />
      </div>
    </section>
  </>
);
export default FAQs;
