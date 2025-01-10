import { homeRoutes } from "@/app/_utils/constants";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      description: "1 sesión",
      price: "130.000 COP",
    },
    {
      id: 2,
      description: "4 sesiones",
      price: "500.000 COP",
    },
    {
      id: 3,
      description: "6 sesiones",
      price: "720.000 COP",
    },
  ];

  const titleProps = {
    className: "mb-4 text-2xl font-medium sm:text-3xl",
    text: "Consultas",
  };

  return (
    <section
      id={homeRoutes.SERVICES}
      className="container mx-auto flex flex-col justify-start px-8 pt-10 text-left"
    >
      <h2 className={`${titleProps.className} sm:hidden`}>{titleProps.text}</h2>
      <div className="wrapper flex flex-col-reverse gap-8 sm:flex-row">
        <div className="flex-1">
          <h2 className={`${titleProps.className} hidden sm:block`}>
            {titleProps.text}
          </h2>
          <p className="mb-6">
            Mis servicios están diseñados para brindarte flexibilidad y
            accesibilidad, ajustándome a tus necesidades personales. Puedes
            elegir entre sesiones individuales o paquetes que te ayudarán a
            comprometerte con tu proceso de bienestar emocional.
          </p>
          <div className="gap flex w-full flex-col gap-1 text-center">
            {services.map((service) => (
              <p key={service.id}>
                {service.description} - {service.price}
              </p>
            ))}
          </div>
          <Button size="lg" className="mt-10 w-full">
            AGENDAR CITA
          </Button>
        </div>
        <div className="flex-1">
          <div className="relative h-[300px] w-full bg-slate-500 sm:h-[600px]">
            <Image
              src="https://images.pexels.com/photos/4098148/pexels-photo-4098148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Services"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
