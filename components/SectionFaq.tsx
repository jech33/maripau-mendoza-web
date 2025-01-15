import { homeRoutes } from "@/app/_utils/constants";

const FaqSection = () => {
  return (
    <section id={homeRoutes.FAQ} className="container mx-auto mt-20 px-8">
      <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
        Preguntas frecuentes
      </h2>
      <ul className="mt-4 flex flex-col gap-5">
        <li>
          <p className="text-lg font-semibold">
            Plataforma y duración de sesiones
          </p>
          <p>
            Las sesiones son online, a través de Google Meet, con una duración
            de 45 a 55 minutos.
          </p>
        </li>
        <li>
          <p className="text-lg font-semibold">
            ¿Cada cuánto debo tener sesiones?
          </p>
          <p>
            Las sesiones pueden ser semanales o quincenales, según las
            necesidades del paciente.
          </p>
        </li>
        <li>
          <p className="text-lg font-semibold">
            ¿A quién van dirigidas mis consultas?
          </p>
          <p>
            Mis servicios están enfocados en: niños, niñas y adolescentes de 12
            a 17 años, y mujeres mayores de 18 años.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default FaqSection;
