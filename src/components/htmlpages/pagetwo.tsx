import Image from "next/image";
export default function PageTwo() {
  return (
    <article className="max-w-132 flex flex-col gap-sm lg:backdrop-blur-sm bg-page xl:bg-transparent justify-center items-center lg:p-0 p-md rounded-md">
      <h1 className="font-heading font-semibold text-primary text-size-xl">
        HTML Tag Syntax
      </h1>
      <Image
        src="/assets/htmlsyntax.png"
        alt="HTML Tag Syntax Explanation"
        width={500}
        height={500}
      ></Image>
    </article>
  );
}
