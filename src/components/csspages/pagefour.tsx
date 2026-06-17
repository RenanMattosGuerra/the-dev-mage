export default function PageFour() {
  return (
    <article className="flex flex-col justify-center items-start gap-lg">
      <h2 className="font-heading text-size-lg backdrop-blur-md text-lighttext-muted self-center">
        Tipography
      </h2>
      <ul className="text-lighttext font-text xl:text-size-lg text-size-md text-justify">
        <li>
          <span className="text-secondary-light">font-family: </span> Specifies
          the typeface used for the text.
        </li>
        <li>
          <span className="text-secondary-light">font-size: </span> Sets the
          size of the text.
        </li>
        <li>
          <span className="text-secondary-light">font-weight: </span> Controls
          how bold or light the text appears.
        </li>
        <li>
          <span className="text-secondary-light">font-style: </span> Defines the
          style of the text (e.g., normal, italic).
        </li>
        <li>
          <span className="text-secondary-light">line-height: </span> Sets the
          vertical spacing between lines of text.
        </li>
        <li>
          <span className="text-secondary-light">text-align: </span> Controls
          the horizontal alignment of the text.
        </li>
        <li>
          <span className="text-secondary-light">color: </span> Defines the
          color of the text.
        </li>
      </ul>
      <h2 className="font-heading text-size-lg backdrop-blur-md text-lighttext-muted self-center">
        Background
      </h2>
      <ul className="text-lighttext font-text xl:text-size-lg text-size-md text-justify">
        <li>
          <span className="text-secondary-light">background-color: </span> Sets
          the background color of an element.
        </li>
        <li>
          <span className="text-secondary-light">background-image: </span>{" "}
          Applies an image as the background.
        </li>
        <li>
          <span className="text-secondary-light">background-size: </span>{" "}
          Defines the size of the background image.
        </li>
        <li>
          <span className="text-secondary-light">background-position: </span>{" "}
          Sets the starting position of the background image.
        </li>
        <li>
          <span className="text-secondary-light">background-repeat: </span>{" "}
          Controls if and how the background image repeats.
        </li>
        <li>
          <span className="text-secondary-light">background-attachment: </span>{" "}
          Determines whether the background scrolls with the page or stays
          fixed.
        </li>
        <li>
          <span className="text-secondary-light">background-origin: </span>{" "}
          Defines the positioning area of the background image.
        </li>
      </ul>
    </article>
  );
}
