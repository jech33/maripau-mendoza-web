import Image from "next/image";
import { Button } from "./ui/button";
import { homeRoutes, socialMediaLinks } from "@/app/_utils/constants";

export default function Hero() {
  return (
    <div
      id={homeRoutes.HERO}
      className="relative flex h-[50lvh] min-h-[500px] w-full items-center justify-center overflow-hidden bg-[#b5ad96]"
    >
      {/* Background Image */}
      <div className="absolute h-full w-full md:relative md:w-1/2">
        <Image
          src="/Picture_2.jpeg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 40%"
          quality={90}
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 md:hidden"></div>

      {/* Content */}
      <div className="relative z-10 px-4 text-center text-white sm:px-6 md:w-1/2 md:text-left md:text-black lg:px-8">
        <div className="flex flex-col-reverse md:flex-col">
          <Image
            src={"/Logo.png"}
            alt="Logo"
            className="absolute -bottom-24 left-1/2 mx-auto w-20 -translate-x-1/2 md:absolute md:-top-20 md:bottom-auto md:left-7 md:w-[200px] md:translate-x-0"
            width={1080}
            height={1080}
          />
          <div className="flex-1 md:ml-36">
            <h1 className="mb-2 mt-14 text-2xl font-medium sm:text-3xl md:mt-0 md:text-5xl">
              Maria Paula Mendoza V.
            </h1>
            <h2 className="mb-4 text-xl font-light sm:text-2xl md:text-3xl">
              Psicóloga Clínica
            </h2>
            <a href={socialMediaLinks.whatsapp} target="_blank">
              <Button size="lg" className="mt-4 md:mt-8">
                AGENDAR CITA
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
