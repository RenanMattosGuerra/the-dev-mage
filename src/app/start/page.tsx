"use client";
import Image from "next/image";
import Link from "next/link";
import { Level } from "@/components/levels/levels";
import Aside from "@/components/layout/aside";
import { useProgress } from "../hooks/useProgress";

const levels = [
  {
    number: 1,
    href: "/level1",
    title: "HTML Arcane Academy",
    description: "Tags - Semantic Structure - Attributes",
    src: "/images/worldfeatures/htmlacademy.png",
    alt: "Arcane Academy",
  },
  {
    number: 2,
    href: "/level2",
    title: "CSS Illusion Forest",
    description: "Colors - Fonts - Layout",
    src: "/images/worldfeatures/cssforest.png",
    alt: "Illusion Forest",
  },
  {
    number: 3,
    href: "/level3",
    title: "UX/UI Design Cave",
    description: "Usability - Hierarchy - Feedback",
    src: "/images/worldfeatures/uxcave.png",
    alt: "Design Cave",
  },
  {
    number: 4,
    href: "/level4",
    title: "Javascript Logic Tower",
    description: "Data types - DOM - Variables",
    src: "/images/worldfeatures/jstower.png",
    alt: "Logic Tower",
  },
  {
    number: 5,
    href: "/level5",
    title: "Reactive Realm",
    description: "Components - Hooks - Routes",
    src: "/images/worldfeatures/reactrealm.png",
    alt: "Reactive Realm",
  },
  {
    number: 6,
    href: "/level6",
    title: "API Ocean",
    description: "Fetch - Async / Await",
    src: "/images/worldfeatures/apiocean.png",
    alt: "API Ocean",
  },
];

function Orbs({ count, unlocked }: { count: number; unlocked: boolean }) {
  return (
    <div className="flex">
      {Array.from({ length: count }).map((_, i) => (
        <Image
          key={i}
          src={
            unlocked
              ? "/images/worldfeatures/blueorb.png"
              : "/images/worldfeatures/grayorb.png"
          }
          alt={unlocked ? "Blue Orb" : "Gray Orb"}
          width={20}
          height={20}
        />
      ))}
    </div>
  );
}

export default function Start() {
  const { isUnlocked } = useProgress();

  return (
    <main className="flex flex-col xl:flex-row gap-md">
      <Aside />
      <section className="m-auto xl:w-350 max-w-350 xl:h-dvh flex flex-col justify-center items-center xl:bg-[url('/images/worldfeatures/bgparchment.webp')] bg-contain bg-center bg-no-repeat gap-xxl xl:gap-0">
        <h1 className="font-heading text-size-xl text-lighttext xl:text-primary font-semibold">
          The Arcane Dev Quest
        </h1>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-xxxl justify-center">
          {levels.map((level) => {
            const unlocked = isUnlocked(level.number);

            if (unlocked) {
              return (
                <Link
                  key={level.number}
                  href={level.href}
                  className="flex flex-col justify-center items-center group animate-pulse hover:animate-none"
                >
                  <Level
                    level={level.number}
                    title={level.title}
                    description={level.description}
                    src={level.src}
                    alt={level.alt}
                  />
                  <Orbs count={level.number} unlocked={true} />
                </Link>
              );
            }

            return (
              <div
                key={level.number}
                className="flex flex-col justify-center items-center opacity-60 grayscale cursor-not-allowed relative"
                title="Complete the previous level to unlock"
              >
                <div className="relative">
                  <Level
                    level={level.number}
                    title={level.title}
                    description={level.description}
                    src={level.src}
                    alt={level.alt}
                  />
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl select-none pointer-events-none">
                    🔒
                  </span>
                </div>
                <Orbs count={level.number} unlocked={false} />
              </div>
            );
          })}
        </section>
      </section>
    </main>
  );
}