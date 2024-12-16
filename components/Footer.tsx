import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-regalBlue-800 relative mt-20 px-8 pb-10 font-light text-white">
      <Image
        src={"/Logotipo_principal.png"}
        alt="Logo"
        className="mx-auto w-[400px]"
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
