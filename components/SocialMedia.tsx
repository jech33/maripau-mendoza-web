import { externalLinks } from "@/app/_utils/constants";
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const SocialMedia = (props: { className?: string }) => {
  const socialMedia = [
    {
      id: 1,
      name: "Instagram",
      url: externalLinks.instagram,
      icon: IconBrandInstagram,
    },
    {
      id: 2,
      name: "Whatsapp",
      url: externalLinks.whatsapp,
      icon: IconBrandWhatsapp,
    },
    {
      id: 3,
      name: "Email",
      url: externalLinks.email,
      icon: IconMail,
    },
  ];
  return (
    <div className={clsx("flex justify-center gap-8", props.className)}>
      {socialMedia.map((item) => (
        <Link key={item.id} href={item.url} target="_blank" rel="noreferrer">
          <item.icon size={40} className="text-yellow-950" />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
