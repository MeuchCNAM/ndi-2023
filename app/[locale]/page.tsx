import Link from "next/link";
import React from "react";

import { useTranslations } from "next-intl";

export default function Home() {
  const trad = useTranslations("Home");

  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="bg-white p-8 border border-gray-300 shadow-md rounded-xl w-2/3">
        <div className="">
          <h1 className="text-2xl font-bold text-center">{trad("quiz")}</h1>
        </div>
        <h2 className="text-xl font-bold mt-5">{trad("title_1")}</h2>
        <p className="text-gray-500">{trad("text_1")}</p>
        <h2 className="text-xl font-bold mt-5">{trad("title_2")}</h2>
        <p className="text-gray-500">{trad("text_2")}</p>
        <div className="text-center mt-5">
          <button className="btn btn-primary">
            <Link href="quiz">{trad("button")}</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
