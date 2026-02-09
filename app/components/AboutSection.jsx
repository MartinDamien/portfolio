"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Compétences",
    id: "Compétences",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript, React, Next.js</li>
        <li>HTML5, CSS3, Tailwind CSS</li>
        <li>Node.js, Express.js</li>
        <li>Git, GitHub</li>
      </ul>
    ),
  },
  {
    title: "Formation",
    id: "Formation",
    content: (
      <ul className="list-disc pl-2">
        <li>Baccalauréat en Informatique - Université XYZ</li>
        <li>Master en Développement Web - Université ABC</li>
      </ul>
    ),
  },
  {
    title: "Expérience",
    id: "Expérience",
    content: (
      <ul className="list-disc pl-2">
        <li>Développeur Frontend chez Entreprise 123 (2020-2022)</li>
        <li>Stagiaire en Développement Web chez Startup XYZ (2019)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Compétences");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/pexels_comput.jpg"
          alt="About Me"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 ">
            A propos de moi
          </h2>
          <p className="text-base md:text-lg ">
            Je suis un développeur passionné avec une expérience dans la
            création de sites web modernes et réactifs. J'aime transformer des
            idées en réalité numérique.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Compétences")}
              active={tab === "Compétences"}
            >
              {" "}
              Compétences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Formation")}
              active={tab === "Formation"}
            >
              {" "}
              Formation{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Expérience")}
              active={tab === "Expérience"}
            >
              {" "}
              Expérience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((items) => items.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
