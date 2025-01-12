import { homeRoutes } from "@/app/_utils/constants";
import React from "react";

const MeSection = () => {
  return (
    <section id={homeRoutes.ME_SECTION} className="bg-[#c3e5ef]">
      <div className="container mx-auto flex max-w-3xl flex-col justify-start px-10 pb-20 pt-20 text-center">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">¿Quién soy?</h2>
        <p>
          Soy graduada en Psicología en la Universidad del Norte, en Colombia.
          Además, he completado una Maestría en Psicología Clínica y de la
          Salud, así como una Maestría en Psicoterapia Cognitivo-Conductual,
          ambas realizadas en el Instituto Superior de Estudios Psicológicos
          (ISEP) en España.
        </p>
      </div>
    </section>
  );
};

export default MeSection;
