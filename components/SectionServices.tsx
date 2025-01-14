import { homeRoutes, externalLinks } from "@/app/_utils/constants";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import ServicesFirst from "./ServicesFirst";

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
    className: "mb-4 text-2xl font-bold sm:text-3xl",
    text: "Consultas",
  };

  return (
    <section id={homeRoutes.SERVICES} className="relative overflow-hidden">
      <div className="bg-beige">
        <ServicesFirst />
      </div>

      <div className="container mx-auto flex flex-col justify-start px-8 text-left">
        <h2 className={`${titleProps.className} pb-4 pt-10 sm:hidden`}>
          {titleProps.text}
        </h2>
        <div className="wrapper flex flex-col-reverse gap-8 sm:flex-row-reverse">
          <div className="flex-1 sm:pt-20">
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
            <a
              className="flex justify-center"
              href={externalLinks.whatsapp}
              target="_blank"
            >
              <Button size="lg" className="mt-10 w-full sm:w-auto">
                AGENDAR CITA
              </Button>
            </a>
          </div>
          <div className="h-[300px] sm:h-[600px] sm:flex-1">
            <div className="absolute left-0 h-[300px] w-full bg-slate-500 sm:absolute sm:-left-14 sm:h-[600px] sm:w-1/2">
              <Image
                src="/Picture_3.jpeg"
                alt="Services"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 60%"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
