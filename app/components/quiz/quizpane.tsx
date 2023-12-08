"use client";

import { useRef, useState } from "react";
import questions from "../../../public/quizData.json";
import ProgressBar from "@/app/components/progressbar";

export default function QuizPane() {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [choice, setChoice] = useState(-1);
  const [progress, setProgress] = useState(0);
  const firstAnswerRef = useRef<HTMLButtonElement>(null);
  const nextQuestionRef = useRef<HTMLButtonElement>(null);


  const nextQuestion = () => {
    setIsQuestionAnswered(false);
    setChoice(-1);
    setQuestionNumber((questionNumber + 1) % questions.length);
    firstAnswerRef.current?.focus();
  };

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
  };

  const handleChoice = (choice: number) => {
    if (isQuestionAnswered) {
      return;
    }

    if (!(choice === questions[questionNumber]?.correctAnswerIndex)) {
      setProgress(progress + 15);
    }

    setIsQuestionAnswered(true);
    setChoice(choice);
    setTimeout(() => {
      nextQuestionRef.current?.focus();
    }, 100);
  };

  return (
    <main className="flex flex-col items-center mt-20 min-h-[65vh]">
      <h1 className="text-4xl font-bold text-center mb-5">Le Meuch Quiz</h1>
      <ProgressBar value={progress} />

      <section
        className={`bg-white border border-gray-300 shadow-md rounded-xl w-2/3 collapse ${
          isQuestionAnswered && "collapse-open"
        }`}
      >
        <div className="collapse-title text-xl font-medium p-8">
          <h2 className="text-2xl font-bold text-center mb-6">{questions[questionNumber]?.question}</h2>
          <div className="answers grid grid-cols-2 gap-4 gap-x-4">
            {questions[questionNumber]?.answers.map((option: string, index: number) => (
              <button
                key={index}
                className={`btn btn-primary ${getAnswerClass(index)}`}
                onClick={handleChoice.bind(null, index)}
                ref={index === 0 ? firstAnswerRef : null}>
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="collapse-content text-center p-0">
          <div
            role="alert"
            className="alert rounded-none bg-slate-100 border-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <p className="text-sm text-gray-700">
              {questions[questionNumber].information}
            </p>
            <button className="btn btn-sm btn-primary" onClick={nextQuestion} ref={nextQuestionRef}>Question suivante</button>
          </div>
        </div>
      </section>
    </main>
  );
}
