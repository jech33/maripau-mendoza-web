import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { socialMediaLinks } from "@/app/_utils/constants";

const ServicesFirst = () => {
  const titleProps = {
    className: "mb-4 text-2xl font-bold sm:text-3xl",
    text: "¿Qué esperar en la primera sesión? ",
  };
  return (
    <div className="container mx-auto flex flex-col justify-start px-8 text-left">
      <h2 className={`${titleProps.className} pb-4 pt-10 sm:hidden`}>
        {titleProps.text}
      </h2>
      <div className="wrapper flex flex-col-reverse gap-8 sm:flex-row">
        <div className="flex-1 sm:pt-20">
          <h2 className={`${titleProps.className} hidden sm:block`}>
            {titleProps.text}
          </h2>
          <p className="mb-6">
            Durante la primera sesión empatizaré contigo desde el primer
            momento; crearé un espacio donde puedas sentirte bien y así,
            podremos construir una relación de confianza. Me enfocaré en
            entender tus preocupaciones y malestares, para juntos trabajar en
            cumplir los objetivos que buscas alcanzar a través de la terapia.
          </p>
          <a
            className="flex justify-center"
            href={socialMediaLinks.whatsapp}
            target="_blank"
          >
            <Button size="lg" className="my-10 w-full sm:w-auto">
              AGENDAR CITA
            </Button>
          </a>
        </div>
        <div className="h-[300px] sm:h-[600px] sm:flex-1">
          <div className="absolute left-0 h-[300px] w-full bg-slate-500 sm:absolute sm:-right-14 sm:left-auto sm:h-[600px] sm:w-1/2">
            <Image
              src="/Picture_4.jpeg"
              alt="Services"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 20%"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesFirst;
