import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="bg-white p-8 border border-gray-300 shadow-md rounded-xl w-2/3">
        <div className="">
          <h1 className="text-2xl font-bold text-center">Le Meuch Quizz</h1>
        </div>
        <h2 className="text-xl font-bold mt-5">Explication</h2>
        <p className="text-gray-500">
          Bienvenue dans notre Quizz sur le Climat ! L'objectif de ce quizz est
          de tester vos connaissances sur le changement climatique et ses
          solutions, tout en démystifiant certaines idées reçues. Nous voulons
          vous aider à distinguer entre les fausses informations et les vraies
          solutions pour le climat. Préparez-vous à plonger dans le monde du
          climat avec des questions instructives et engageantes. Chaque question
          abordera un aspect spécifique du changement climatique, des émissions
          de gaz à effet de serre aux solutions durables.
        </p>
        <h2 className="text-xl font-bold mt-5">Déroulement</h2>
        <p className="text-gray-500">
          Plusieurs questions vous seront posées, successivement. Vous devrez y
          répondre en choisissant la réponse qui vous semble la plus appropriée.
          A la fin du quizz, vous pourrez voir vos résultats. Attention ! Vos
          choix ont des conséquences et influenceront positivement ou
          négativement la santé de votre planète.
        </p>
        <div className="text-center mt-5">
          <button className="btn btn-primary">Testez-vous</button>
        </div>
      </section>
    </main>
  );
}
