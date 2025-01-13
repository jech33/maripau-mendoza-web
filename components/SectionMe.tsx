import { homeRoutes } from "@/app/_utils/constants";
import { IconButterflyFilled } from "@tabler/icons-react";
import clsx from "clsx";
import React from "react";

const MeSection = () => {
  const specializations = [
    "Autoestima",
    "Ruptura amorosa",
    "Ansiedad ",
    "Depresión",
    "Cambios de vida ",
    "Relaciones interpersonales",
  ];

  const titleClasses = "mb-4 text-2xl font-bold sm:text-3xl";

  return (
    <section id={homeRoutes.ME_SECTION} className="bg-[#c3e5ef]">
      <div className="container mx-auto flex max-w-3xl flex-col justify-start px-10 pb-20 pt-20 text-center">
        <h2 className={titleClasses}>¿Quién soy?</h2>
        <p>
          Soy graduada en Psicología en la Universidad del Norte, en Colombia.
          Además, he completado una Maestría en Psicología Clínica y de la
          Salud, así como una Maestría en Psicoterapia Cognitivo-Conductual,
          ambas realizadas en el Instituto Superior de Estudios Psicológicos
          (ISEP) en España.
        </p>
        <h2 className={clsx(titleClasses, "mt-8")}>
          Terapeuta especializada en
        </h2>
        <ul className="flex flex-col justify-center gap-2">
          {specializations.map((specialization) => (
            <li key={specialization} className="flex justify-center gap-4">
              <IconButterflyFilled className="text-regalBlue-700" />
              {specialization}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MeSection;
