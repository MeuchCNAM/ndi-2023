"use client";

import { useState } from "react";
import questions from "../../../public/quizData.json";

export default function QuizPane() {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [choice, setChoice] = useState(-1);

  const nextQuestion = () => {
    setIsQuestionAnswered(false);
    setChoice(-1);
    setQuestionNumber((questionNumber + 1) % questions.length);
  }

  const getAnswerClass = (index: number) => {
    if (!isQuestionAnswered) {
      return "";
    }

    if (index === questions[questionNumber]?.correctAnswerIndex) {
      return "btn-success";
    }

    if (index === choice) {
      return "btn-error";
    }

    return "btn-neutral";
  }

  const handleChoice = (choice: number) => {
    if (isQuestionAnswered) {
      return;
    }

    setIsQuestionAnswered(true);
    setChoice(choice);
  };

  return (
    <main className="flex flex-col items-center mt-20">
      <h1 className="text-4xl font-bold text-center mb-12">Le Meuch Quiz</h1>
      <section className={`bg-white border border-gray-300 shadow-md rounded-xl w-2/3 collapse ${isQuestionAnswered && "collapse-open"}`}>
        <div className="collapse-title text-xl font-medium p-8">
          <h2 className="text-2xl font-bold text-center mb-6">{questions[questionNumber]?.question}</h2>
          <div className="grid grid-cols-2 gap-4 gap-x-4">
            {questions[questionNumber]?.answers.map((option: string, index: number) => (
              <button
                key={index}
                className={`btn btn-primary ${getAnswerClass(index)}`}
                onClick={handleChoice.bind(null, index)}>
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="collapse-content text-center p-0">
          <div role="alert" className="alert rounded-none bg-slate-100 border-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className="text-sm text-gray-700">
              {questions[questionNumber].information}
            </p>
            <button className="btn btn-sm btn-primary" onClick={nextQuestion}>Question suivante</button>
          </div>
        </div>
      </section>
    </main>
  );
}