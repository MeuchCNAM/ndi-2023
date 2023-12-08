"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import ProgressBar from "@/app/components/progressbar";

export const QuizPane: React.FC<{
  questions: {
    question: string;
    answers: string[];
    correctAnswerIndex: number;
    information: string;
  }[];
  title: string;
  next: string;
}> = ({ questions, title, next }) => {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [choice, setChoice] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const firstAnswerRef = useRef<HTMLButtonElement>(null);
  const nextQuestionRef = useRef<HTMLButtonElement>(null);

  const nextQuestion = () => {
    setIsQuestionAnswered(false);
    setChoice(-1);
    setQuestionNumber((questionNumber + 1) % questions.length);
    firstAnswerRef.current?.focus();
    if (progress >= 100 || score >= questions.length) {
      setIsQuizFinished(true);
    }
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
    } else {
      setScore(score + 1);
    }

    setIsQuestionAnswered(true);
    setChoice(choice);
    setTimeout(() => {
      nextQuestionRef.current?.focus();
    }, 100);
  };

  return (
    <main className="flex flex-col items-center mt-20 min-h-[65vh]">
      <h1 className="text-4xl font-bold text-center mb-5">{title}</h1>
      <ProgressBar value={progress} />

      <section
        className={`bg-white border border-gray-300 shadow-md rounded-xl w-2/3 collapse ${
          isQuestionAnswered && "collapse-open"
        }`}
      >
        <div className="collapse-title text-xl font-medium p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isQuizFinished ? `Score: ${score}/${questions.length}` :
              questions[questionNumber]?.question}
          </h2>
          {!isQuizFinished && (
          <div className="answers grid grid-cols-2 gap-4 gap-x-4">
            {questions[questionNumber]?.answers.map(
              (option: string, index: number) => (
                <button
                  key={index}
                  className={`btn btn-primary ${getAnswerClass(index)}`}
                  onClick={handleChoice.bind(null, index)}
                  ref={index === 0 ? firstAnswerRef : null}
                >
                  {option}
                </button>
              )
            )}
          </div>
          )}
          {isQuizFinished && (
            <div className="flex flex-col items-center">
              {score === questions.length && (
                <Image src="/greta-happy.gif" alt="Greta Thunberg Happy" width={500} height={500} />
              )}

              {score < questions.length && (
                <Image src="/greta-how-dare-you.gif" alt="Greta Thunberg Angry" width={500} height={500} />
              )}
            </div>
          )}
        </div>

        {!isQuizFinished && (
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
            <button
              className="btn btn-sm btn-primary"
              onClick={nextQuestion}
              ref={nextQuestionRef}
            >
              {next}
            </button>
          </div>
        </div>
        )}
      </section>
    </main>
  );
};

export default QuizPane;
