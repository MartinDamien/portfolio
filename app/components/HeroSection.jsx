"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold">
            Bienvenue sur mon portfolio, je suis{" "}
            <br />
            <span className="text-[#8384c2]">
              <TypeAnimation
                sequence={[
                  "Damien",
                  1000,
                  "un developpeur Web",
                  1000,
                  "un developpeur Back-end",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            illum odit maiores exercitationem, sunt perferendis praesentium nisi
            earum ipsum? Modi voluptas dolorum recusandae, sint in eos aliquid
            itaque consequatur laudantium.
          </p>
          <div>
            <button className="w-full bg-[#8384c2] text-white mb-2 px-6 py-3 rounded-full mr-4 hover:bg-[#6b6ba3] transition">
              Contactez-moi
            </button>
            <button className="bg-transparent border border-white text-white w-full sm:w-fit px-2 py-2 rounded-full bg-linear-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition">
              <span className="block bg-[#121212]  hover:bg-slate-800 rounded-full px-5 py-1.5 ">
                Voir mon travail
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#8384c2] w-77 h-77 lg:w-77 lg:h-77 relative overflow-hidden mx-auto">
            <Image
              src="/images/logo_blanc.png"
              alt="Logo Damien"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
