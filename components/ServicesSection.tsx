import { homeRoutes } from "@/app/_utils/constants";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      description: "1 sesión",
      price: "$130.000 COP",
    },
    {
      id: 2,
      description: "4 sesiones",
      price: "$500.000 COP",
    },
    {
      id: 3,
      description: "6 sesiones",
      price: "$720.000 COP",
    },
  ];

  return (
    <section
      id={homeRoutes.SERVICES}
      className="container mx-auto flex flex-col justify-start px-8 pt-10 text-left"
    >
      <h2 className="mb-4 text-2xl font-medium sm:text-3xl">
        Opciones de consulta
      </h2>
      <div className="wrapper flex flex-col-reverse gap-8 sm:flex-row">
        <div className="flex-1">
          <p className="mb-6">
            Mis servicios están diseñados para brindarte flexibilidad y
            accesibilidad, ajustándome a tus necesidades personales. Puedes
            elegir entre sesiones individuales o paquetes más económicos que te
            ayudarán a comprometerte con tu proceso de bienestar emocional.
          </p>
          <table className="w-full table-auto overflow-hidden rounded-md">
            <thead className="bg-beige">
              <tr>
                <th className="p-2">Sesiones</th>
                <th className="p-2">Precio</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-b border-beige">
                  <td className="p-2">{service.description}</td>
                  <td className="p-2">{service.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button size="lg" className="mt-10 w-full">
            Reserva aquí tu sesión
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
