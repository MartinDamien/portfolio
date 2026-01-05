import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold">
            Bienvenue sur mon portfolio, Moi c'est <span className="text-[#8384c2]">Damien</span>
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
            <button className="bg-transparent border border-white text-white w-full sm:w-fit px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Voir mon travail
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#8384c2] w-75 h-75 lg:w-77 lg:h-77 relative overflow-hidden mx-auto">
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
