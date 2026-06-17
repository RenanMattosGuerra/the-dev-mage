export default function PageThree() {
  return (
    <article className="max-w-132 flex flex-col gap-sm lg:backdrop-blur-sm bg-page xl:bg-transparent justify-center items-center xl:p-0 p-md rounded-md">
      <h1 className="font-heading text-primary text-size-xl font-semibold">
        Semantic Tags
      </h1>
      <p className="font-text indent-5 text-justify text-size-lg text-darktext">
        This is how your page (body section) should be organized for better SEO
        (Search Engine Optimization), accessibility and structure.
      </p>
      <ul className="text-justify font-text text-size-md text-primary list-disc flex flex-col gap-sm">
        <li>
          <span className="text-primary-light">&lt; header &gt;</span>{" "}
          Represents introductory content or a group of navigational elements,
          usually containing titles, logos, or menus.
        </li>
        <li>
          <span className="text-primary-light">&lt; nav &gt;</span> Contains
          navigation links that help users move through the website or different
          sections of the page.
        </li>
        <li>
          <span className="text-primary-light">&lt; main &gt;</span> Defines the
          main content of the document — the central part directly related to
          the page’s purpose.
        </li>
        <li>
          <span className="text-primary-light">&lt; section &gt;</span>{" "}
          Represents a thematic grouping of content, typically with its own
          heading.
        </li>
        <li>
          <span className="text-primary-light">&lt; article &gt;</span> Defines
          a self-contained piece of content that can stand on its own, like a
          blog post or news article.
        </li>
        <li>
          <span className="text-primary-light">&lt; aside &gt;</span> Holds
          content that is indirectly related to the main content, such as
          sidebars, tips, or additional info.
        </li>
        <li>
          <span className="text-primary-light">&lt; figure &gt;</span> Used to
          wrap media content (like images, illustrations, or diagrams), often
          with a caption.
        </li>
        <li>
          <span className="text-primary-light">&lt; footer &gt;</span>{" "}
          Represents the footer of a page or section, usually containing
          credits, links, or additional information.
        </li>
      </ul>
    </article>
  );
}
