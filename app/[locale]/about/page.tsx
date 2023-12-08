import { useTranslations } from "next-intl";
import React from "react";

const teamMembers = [
  { id: 1, name: "Fabre Bastian", photo: "../bastian.png" },
  { id: 2, name: "Mosa Samy", photo: "../samy.png" },
  { id: 3, name: "Feucht Joe", photo: "../joe.png" },
  { id: 4, name: "Duvernay Benoit", photo: "../benoit.png" },
];

const About = () => {
  const trad = useTranslations("Index");

  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-bold mb-4">À propos de nous</h1>
      <div className="flex justify-around items-center mb-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="text-center">
            <img
              src={member.photo}
              alt={member.name}
              className="rounded-full w-128 h-96 mb-4"
            />
            <p className="text-3xl font-bold mb-4">{member.name}</p>
          </div>
        ))}
      </div>
      <p className="text-2xl mb-8">
        Bienvenue dans la Meuch! Nous sommes une équipe dynamique de Meucheurs
        passionnés. Ensemble, nous formons une Meuch soudée, travaillant
        ardemment pour propager la Meuchitude et atteindre nos objectifs
        communs. Rejoignez-nous dans notre aventure Meuchesque!
      </p>
    </div>
  );
};

export default About;
