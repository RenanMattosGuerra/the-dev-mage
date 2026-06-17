"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  function handleStart() {
    if (!name.trim()) {
      alert("Type your character name.");
      return;
    }
    localStorage.setItem("characterName", name);

    router.push("/start");
  }

  return (
    <main className="w-full lg:h-dvh min-h-dvh flex justify-evenly items-center lg:flex-row flex-col p-md lg:p-xxxl gap-xl">
      <section className="lg:w-3/5 h-full w-full">
        <figure>
          <Image
            src="/images/worldfeatures/bgacademyup.webp"
            width={700}
            height={700}
            alt="Academy"
            className="w-full lg:h-110 rounded-md"
          ></Image>
        </figure>
        <section className="-mt-20 lg:-mt-80 backdrop-blur-xs lg:backdrop-blur-none">
          <section className="flex lg:max-w-200 flex-col justify-center items-center lg:m-xl">
            <h1 className="font-title text-size-xxl lg:text-size-xxxl text-lighttext text-shadow-primary-light text-shadow-xs text-center backdrop-blur-xs rounded-md">
              The Dev Mage
            </h1>
            <section className="p-md bg-gray border-2 border-border text-justify rounded-md flex flex-col gap-sm backdrop-blur-xs">
              <p className="font-heading text-size-md lg:text-size-xl text-lighttext-muted border-b-2 border-border text-center">
                From Apprentice to Front-End Wizard
              </p>
              <article className="text-lighttext text-justify font-text xl:text-size-lg text-size-md indent-10">
                Welcome to <ins>The Dev Mage</ins> — a browser-based,
                interactive learning experience set in a fantasy realm where
                code is magic and knowledge is power. <br />
                <p>
                  In this world, you are a young apprentice mage at the
                  beginning of your journey.
                </p>
                <p>
                  Each step of your adventure represents a core discipline of
                  modern front-end development.
                </p>
                <p>
                  You will master the structure of reality through{" "}
                  <span className="text-lighttext-muted">HTML</span>, shape
                  illusions with{" "}
                  <span className="text-lighttext-muted">CSS</span>, harness
                  logic using
                  <span className="text-lighttext-muted"> JavaScript</span>, and
                  bend dynamic interfaces to your will with
                  <span className="text-lighttext-muted"> React</span>. Along
                  the way, you will learn to communicate with distant realms
                  through <span className="text-lighttext-muted">APIs</span> and
                  craft meaningful, intuitive experiences through{" "}
                  <span className="text-lighttext-muted">UX/UI</span> design.
                </p>
                <p>
                  This is not just a game — it is a journey of growth,
                  experimentation, and discovery.
                </p>
                <p>
                  Your goal is clear: evolve from a novice spellcaster into a
                  true
                  <span className="text-lighttext-muted">
                    {" "}
                    Front-End Wizard.
                  </span>
                </p>
                <p>Your training begins now.</p>
              </article>
            </section>
          </section>
        </section>
      </section>
      <section className="flex lg:w-fit w-full flex-col justify-evenly items-center text-justify p-sm bg-gray gap-lg lg:gap-0 border-2 border-border h-full rounded-md">
        <section>
          <form
            className="flex flex-col justify-center items-center gap-md"
            onSubmit={(e) => {
              e.preventDefault();
              handleStart();
            }}
          >
            <label
              htmlFor="name"
              className="font-heading text-lighttext-muted text-size-xl"
            >
              Name your Mage
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
              className="bg-lighttext focus-within:border-gold border-lighttext-muted p-1 font-text border-4 text-size-lg outline-0 text-center text-darktext rounded-md focus-within:scale-110 duration-200 transition-all"
              placeholder="Character Name"
            />
          </form>
        </section>
        <section className="flex flex-col md:flex-row justify-evenly items-center w-full">
          <figure className="flex lg:gap-xxl justify-center items-center">
            <Image
              src="/images/characters/novicemage.png"
              alt="Novice Mage"
              width={200}
              height={200}
              className="rotate-y-180"
            ></Image>
          </figure>

          <figure>
            <Image
              src="/images/characters/bluewizard.png"
              alt="Front-end Wizard"
              width={200}
              height={200}
            ></Image>
          </figure>
        </section>
        <button
          onClick={handleStart}
          type="submit"
          className="group font-text text-size-xl lg:text-size-xxl pt-2 text-shadow-sm cursor-pointer text-gold transition-all duration-200 hover:scale-105 flex flex-col justify-center items-center"
        >
          <span>Begin your Journey</span>
          <Image
            src="/images/worldfeatures/closedbook.png"
            alt="book"
            width={105}
            height={105}
            className="group-hover:hidden"
          ></Image>
          <Image
            src="/images/worldfeatures/openbook.png"
            alt="book"
            width={105}
            height={105}
            className="hidden group-hover:block"
          ></Image>
        </button>
      </section>
    </main>
  );
}
