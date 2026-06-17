"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const levelConfig: Record<
  string,
  { label: string; image: string; alt: string }
> = {
  "/start": {
    label: "Novice Mage",
    image: "/images/characters/novicemage.png",
    alt: "Novice Mage",
  },
  "/level1": {
    label: "Apprentice - Level 1",
    image: "/images/characters/youngapprentice.png",
    alt: "Apprentice Mage Level 1",
  },
  "/level2": {
    label: "Conjurer - Level 2",
    image: "/images/characters/conjurer.png",
    alt: "Conjurer Level 2",
  },
  "/level3": {
    label: "Arcanist - Level 3",
    image: "/images/characters/arcanist.png",
    alt: "Arcanist Level 3",
  },
  "/level4": {
    label: "Grand Mage - Level 4",
    image: "/images/characters/redmage.png",
    alt: "Grand Mage Level 4",
  },
  "/level5": {
    label: "Archmage - Level 5",
    image: "",
    alt: "Archmage Level 5",
  },
  "/level6": {
    label: "Sorcerer - Level 6",
    image: "",
    alt: "Sorcerer Level 6",
  },
};

const defaultConfig = levelConfig["/start"];

export default function Aside() {
  const [name, setName] = useState("");
  const pathname = usePathname();
  const config = levelConfig[pathname] ?? defaultConfig;

  useEffect(() => {
    const savedName = localStorage.getItem("characterName");
    if (savedName) setName(savedName);
  }, []);

  return (
    <aside className="w-full xl:max-w-60 xl:h-dvh flex justify-between items-center xl:flex-col bg-lighttext-muted border-b-3 xl:border-b-0 xl:border-r-3 border-border p-sm xl:p-0">
      <h1 className="hidden xl:block font-title text-size-xxl text-lighttext text-shadow-primary-light text-shadow-xs">
        The Dev Mage
      </h1>
      <article className="flex xl:flex-col justify-center items-center">
        <section className="flex flex-col justify-center items-center">
          <h2 className="font-heading text-size-lg xl:text-size-xl text-darktext font-semibold">
            {name}
          </h2>
          <p className="font-text text-size-md xl:text-size-lg text-darktext-muted">
            {config.label}
          </p>
        </section>
        <figure>
          <Image
            src={config.image}
            alt={config.alt}
            width={140}
            height={140}
            className="rotate-y-180"
          ></Image>
        </figure>
      </article>
      <nav className="xl:border-t-2 xl:w-full p-md border-border-muted flex flex-col justify-center font-text text-darktext text-size-lg">
        <Link
          href="/start"
          className="border-b-2 border-transparent hover:border-border transition-all duration-200"
        >
          Quest Selection
        </Link>
        <Link
          href="/"
          className="border-b-2 border-transparent hover:border-border transition-all duration-200"
        >
          Restart
        </Link>
      </nav>
    </aside>
  );
}
