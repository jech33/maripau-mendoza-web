import Image from "next/image";
import { Button } from "./ui/button";
import { homeRoutes } from "@/app/_utils/constants";

export default function Hero() {
  return (
    <div
      id={homeRoutes.HERO}
      className="relative flex h-[50lvh] w-full items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 text-center text-white sm:px-6 lg:px-8">
        <Image
          src={"/Logo.png"}
          alt="Logo"
          className="mx-auto w-[200px]"
          width={1080}
          height={1080}
        />
        <h1 className="-mt-8 mb-2 text-3xl font-medium sm:text-3xl md:text-5xl">
          Maria Paula Mendoza V.
        </h1>
        <h2 className="mb-4 text-xl font-light sm:text-2xl md:text-3xl">
          Psicóloga Clínica
        </h2>
        <Button size="lg" className="mt-10">
          AGENDAR CITA
        </Button>
      </div>
    </div>
  );
}
