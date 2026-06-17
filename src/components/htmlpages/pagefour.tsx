export default function PageFour() {
  return (
    <article className="max-w-132 flex flex-col gap-sm lg:backdrop-blur-sm bg-page xl:bg-transparent justify-center items-center xl:p-0 p-md rounded-md">
      <p className="font-text indent-5 text-justify text-size-lg text-darktext">
        Inside the semantic tags goes the page content, defined by its own tags:
      </p>
      <ul className="text-justify font-text text-size-md text-primary list-disc flex flex-col gap-xs">
        <li>
          <span className="text-primary-light">&lt; h1 &gt;</span> Represents
          the highest-level heading, used to define the main title of a page or
          section. There's also h2, h3, h4, h5 and h6.
        </li>
        <li>
          <span className="text-primary-light">&lt; p &gt;</span> Defines a
          paragraph of text, used for grouping sentences into readable blocks.
        </li>
        <li>
          <span className="text-primary-light">&lt; ol &gt;</span> Represents an
          ordered list, where items are displayed in a numbered sequence.
        </li>
        <li>
          <span className="text-primary-light">&lt; ul &gt;</span> Represents an
          unordered list, where items are displayed with bullet points.
        </li>
        <li>
          <span className="text-primary-light">&lt; li &gt;</span> Defines a
          list item, used inside &lt;ol&gt; or &lt;ul&gt; to represent each
          entry.
        </li>
        <li>
          <span className="text-primary-light">&lt; a &gt;</span> Creates a
          hyperlink that allows users to navigate to another page, section, or
          resource.
        </li>
        <li>
          <span className="text-primary-light">&lt; img &gt;</span> Embeds an
          image into the page, requiring a source and alternative text.
        </li>

        <li>
          <span className="text-primary-light">&lt; form &gt;</span> Defines a
          form used to collect user input and send data to a server.
        </li>
        <li>
          <span className="text-primary-light">&lt; input &gt;</span> Creates an
          interactive field that allows users to enter data, with different
          types like text, password, email, and more.
        </li>
        <li>
          <span className="text-primary-light">&lt; label &gt;</span> Provides a
          text label for form elements, improving accessibility and user
          experience.
        </li>
        <li>
          <span className="text-primary-light">&lt; button &gt;</span>{" "}
          Represents a clickable button used to trigger actions, such as
          submitting a form or running scripts.
        </li>
        <li>
          <span className="text-primary-light">&lt; div &gt;</span> A generic
          container used to group content for styling or layout purposes.
        </li>
        <li>
          <span className="text-primary-light">&lt; span &gt;</span> A generic
          inline container used to style or manipulate small portions of text.
        </li>
      </ul>
    </article>
  );
}
