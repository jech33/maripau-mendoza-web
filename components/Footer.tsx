import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-regalBlue-800 px-8 pb-10 pt-12 font-light text-white">
      <p className="relative text-center text-lg font-extralight">
        Creando espacios para sanar
      </p>
      <Image
        src={"/Logotipo_Principal.png"}
        alt="Logo"
        className="mx-auto -mb-10 -mt-16 w-[350px] object-cover"
        width={1080}
        height={1080}
      />
      <p className="text-center text-sm">
        © 2024 Psicóloga María Paula Mendoza V. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
