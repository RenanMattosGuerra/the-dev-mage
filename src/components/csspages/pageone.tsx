import Image from "next/image";
export default function PageOne() {
  return (
    <article className="flex flex-col justify-center items-center gap-lg max-w-150">
      <h1 className="font-heading xl:text-size-xxl text-size-lg backdrop-blur-md text-lighttext">
        CSS Illusion Forest
      </h1>
      <h2 className="font-heading text-size-lg backdrop-blur-md text-lighttext-muted">
        Cascading Style Sheets
      </h2>
      <p className="text-lighttext font-text xl:text-size-lg text-size-md indent-5 text-justify">
        This is the language used to control the visual appearance of a webpage.
        It defines how HTML elements are displayed, including colors, fonts,
        spacing, layout, and responsiveness. By separating design from
        structure, CSS allows creating consistent and visually appealing
        interfaces across different devices, using concepts like selectors,
        properties, and the cascading system to apply styles efficiently.
      </p>
      <h2 className="font-heading text-size-lg backdrop-blur-md text-lighttext-muted">
        Syntax
      </h2>
      <Image
        src="/assets/cssyntax.png"
        alt="CSS Syntax"
        width={350}
        height={350}
      ></Image>
      <figure></figure>
    </article>
  );
}
