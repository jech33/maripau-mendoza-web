import Image from "next/legacy/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-20 flex flex-col justify-between gap-16 px-8 pb-10 pt-12 font-light">
      <Image
        className="absolute -z-10"
        src={"/Picture_1.jpeg"}
        alt="Logo"
        layout="fill"
        objectFit="cover"
        objectPosition="10% 40%"
      />
      {/*  Overlay */}
      <div className="absolute inset-0 -z-10 bg-white opacity-30" />

      <p className="text-center font-medium italic">
        Creando espacios para sanar
      </p>

      <div className="container relative mx-auto flex w-full items-center justify-end md:h-[250px]">
        <div className="relative h-[125px] w-[125px] overflow-hidden rounded-full sm:h-[150px] sm:w-[150px] md:h-[250px] md:w-[250px]">
          <Image
            src={"/Logotipo_Principal.png"}
            alt="Logo"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>

      <p className="text-center text-sm font-semibold">
        © 2024 Psicóloga María Paula Mendoza V. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
