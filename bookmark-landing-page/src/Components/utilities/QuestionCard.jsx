import { FAQ } from "../../assets/text";
import arrow from "../../assets/images/icon-arrow.svg";
import { useState } from "react";

const QuestionCard = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer((prev) => {
      return !prev;
    });
  };

  return FAQ.map((ques) => (
    <div key={ques.id} className="py-4 flex  flex-col gap-4">
      <div className="questions flex border-b-2 justify-between pb-4">
        <h1 className="question text-left">{ques.question}</h1>
        <img
          src={arrow}
          alt="down arrow"
          className="object-contain"
          onClick={toggleAnswer}
        />
      </div>
      {showAnswer && (
        <p className="w-[770px] answer text-left">{ques.answer}</p>
      )}
    </div>
  ));
};
export default QuestionCard;
