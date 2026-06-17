export default function PageThree() {
  return (
    <article className="flex flex-col justify-center items-start gap-lg">
      <h2 className="font-heading text-size-lg backdrop-blur-md text-lighttext-muted self-center">
        Spacing
      </h2>
      <ul className="text-lighttext font-text xl:text-size-lg text-size-md text-justify">
        <li>
          <span className="text-secondary-light">height: </span> Defines the
          vertical size of an element.
        </li>
        <li>
          <span className="text-secondary-light">width: </span> Defines the
          horizontal size of an element.
        </li>
        <li>
          <span className="text-secondary-light">padding: </span> Controls the
          inner space between the content and the element’s border.
        </li>
        <li>
          <span className="text-secondary-light">margin: </span> Controls the
          outer space around an element, separating it from others.
        </li>
        <li>
          <span className="text-secondary-light">border: </span> Sets the
          outline around an element, including its thickness, style, and color.
        </li>
        <li>
          <span className="text-secondary-light">border-radius: </span> Rounds
          the corners of an element’s border.
        </li>
      </ul>

      <h2 className="font-heading text-size-lg backdrop-blur-md text-lighttext-muted self-center">
        Positioning
      </h2>
      <ul className="text-lighttext font-text xl:text-size-lg text-size-md text-justify">
        <li>
          <span className="text-secondary-light">position: </span> Defines how
          an element is positioned (static, relative, absolute, fixed, sticky).
        </li>
        <li>
          <span className="text-secondary-light">top: </span> Sets the distance
          from the top edge for positioned elements.
        </li>
        <li>
          <span className="text-secondary-light">bottom: </span> Sets the
          distance from the bottom edge for positioned elements.
        </li>
        <li>
          <span className="text-secondary-light">right: </span> Sets the
          distance from the right edge for positioned elements.
        </li>
        <li>
          <span className="text-secondary-light">left: </span> Sets the distance
          from the left edge for positioned elements.
        </li>
        <li>
          <span className="text-secondary-light">z-index: </span> Controls the
          vertical stacking order of positioned elements.
        </li>
        <li>
          <span className="text-secondary-light">display: </span> Specifies how
          an element is displayed (block, inline, flex, grid, etc.).
        </li>
        <li>
          <span className="text-secondary-light">overflow: </span> Controls what
          happens when content overflows its container.
        </li>
        <li>
          <span className="text-secondary-light">visibility: </span> Determines
          whether an element is visible or hidden without removing it from
          layout.
        </li>
      </ul>
    </article>
  );
}
