"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { homeRoutes } from "@/app/_utils/constants";

const navItems = [
  { name: "Acerca de mí", href: `#${homeRoutes.ME_SECTION}` },
  { name: "Servicios", href: `#${homeRoutes.SERVICES}` },
  { name: "FAQ", href: `#${homeRoutes.FAQ}` },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleMenuClick = () => {
    setIsOpen((prev) => {
      const newStatus = !prev;
      document.body.style.overflow = newStatus ? "hidden" : "scroll";
      return newStatus;
    });
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "scroll";
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop */}
      <div className="sticky top-4 z-50 hidden w-full justify-center sm:flex">
        <nav
          className={`absolute flex w-fit items-center justify-center gap-8 rounded-full bg-ivory px-8 shadow-md transition-transform ${
            show ? "translate-y-0" : "-translate-y-20"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="my-3 font-bold transition-colors duration-200 hover:text-regalBlue-600"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile */}
      <div className="relative z-50 sm:hidden">
        <button
          onClick={handleMenuClick}
          className="fixed right-4 top-4 z-50 rounded-full bg-white p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>

        <div
          className={`fixed inset-0 transform bg-primary ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <nav className="flex h-full flex-col items-center justify-center">
            <Link href={`#${homeRoutes.HERO}`} onClick={handleMenuItemClick}>
              <Image
                src="/Logo.png"
                alt="Logo"
                width={250}
                height={250}
                className="-mb-3"
              />
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="my-4 text-2xl font-bold text-white transition-colors duration-300 hover:text-indigo-200"
                onClick={handleMenuItemClick}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
