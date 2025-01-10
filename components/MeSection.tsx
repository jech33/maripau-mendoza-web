import { homeRoutes } from "@/app/_utils/constants";
import React from "react";

const MeSection = () => {
  return (
    <section
      id={homeRoutes.ME_SECTION}
      className="container mx-auto flex flex-col justify-start px-10 pt-14 text-left"
    >
      <h2 className="mb-4 text-2xl font-medium sm:text-3xl">¿Quién soy?</h2>
      <p>
        Soy graduada den Psicología en la Universidad del Norte, en Colombia.
        Además, he completado una Maestría en Psicología Clínica y de la Salud,
        así como una Maestría en Psicoterapia Cognitivo-Conductual, ambas
        realizadas en el Instituto Superior de Estudios Psicológicos (ISEP) en
        España.
      </p>
    </section>
  );
};

export default MeSection;
