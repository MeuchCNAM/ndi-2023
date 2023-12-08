import QuizPane from "@/app/components/quiz/quizpane";
import { useTranslations } from "next-intl";
import React from "react";
import tradDE from "../../../messages/de.json";
import tradEN from "../../../messages/en.json";
import tradFR from "../../../messages/fr.json";

const questionsDE = tradDE.Game;
const questionsEN = tradEN.Game;
const questionsFR = tradFR.Game;

export default function Quiz() {
  const trad = useTranslations("Index");
  const language = trad("language");
  const quizTrad = useTranslations("Quiz");

  switch (language) {
    case "de":
      return (
        <main>
          <QuizPane
            questions={questionsDE}
            title={quizTrad("title")}
            next={quizTrad("next")}
          />
        </main>
      );
    case "en":
      return (
        <main>
          <QuizPane
            questions={questionsEN}
            title={quizTrad("title")}
            next={quizTrad("next")}
          />
        </main>
      );
    case "fr":
      return (
        <main>
          <QuizPane
            questions={questionsFR}
            title={quizTrad("title")}
            next={quizTrad("next")}
          />
        </main>
      );
  }
}
