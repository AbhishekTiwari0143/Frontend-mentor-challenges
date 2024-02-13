import { FAQquestions } from "../../assets/text";
import arrow from "../../assets/images/icon-arrow.svg";
import { useState } from "react";

const QuestionCard = () => {
  const [selected, setSelected] = useState(null);

  const toggleAnswer = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return FAQquestions.map((ques, index) => (
    <div key={ques.id} className="py-4 flex flex-col gap-4">
      <div
        className="questions flex border-b-2 justify-between pb-4 md:w-[770px] cursor-pointer hover:text-[--soft-red]"
        onClick={() => toggleAnswer(index)}
      >
        <h1 className="question text-left ">{ques.question}</h1>
        <img
          src={arrow}
          alt="down arrow"
          className={`object-contain hover:fill-[--soft-red] ${
            selected === index && "rotate-180"
          }`}
        />
      </div>
      {selected === index && (
        <p className="m-auto answer text-left md:w-[770px]">{ques.answer}</p>
      )}
    </div>
  ));
};
export default QuestionCard;
