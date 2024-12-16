import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="relative flex h-[50lvh] w-full items-center justify-center overflow-hidden">
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
        <h2 className="font-playfairDisplay mb-4 text-4xl font-extralight italic sm:text-3xl md:text-5xl">
          Creando espacios para sanar
        </h2>
        <Button size="lg" className="mt-10">
          AGENDA UNA CITA
        </Button>
      </div>
    </div>
  );
}
