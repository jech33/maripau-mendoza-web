import { homeRoutes } from "@/app/_utils/constants";
import React from "react";

const MeSection = () => {
  return (
    <section
      id={homeRoutes.ME_SECTION}
      className="container mx-auto flex flex-col justify-start px-10 pt-20 text-left"
    >
      <h1 className="font-playfairDisplay mb-4 text-4xl font-light sm:text-5xl md:text-6xl">
        Maria Paula Mendoza V.
      </h1>
      <p className="font-crimsonFoam mb-8 text-4xl sm:text-5xl md:text-6xl">
        Psicóloga Clínica
      </p>
      <p>
        Soy graduada de Psicología en la Universidad del Norte, en Colombia.
        Además, obtuve una Maestría en Psicología Clínica y de la Salud, así
        como una Maestría en Psicoterapia Cognitivo-Conductual, ambas realizadas
        en el Instituto Superior de Estudios Psicológicos (ISEP) en España.
      </p>
    </section>
  );
};

export default MeSection;
