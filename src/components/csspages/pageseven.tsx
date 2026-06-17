export default function PageSeven() {
  return (
    <article className="flex flex-col justify-center items-center gap-xxl xl:w-150">
      <h2 className="font-heading text-size-lg backdrop-blur-md text-lighttext-muted">
        Hover
      </h2>
      <p className="text-lighttext font-text xl:text-size-lg text-size-md indent-5 text-justify">
        The :hover pseudo-class in CSS is used to apply styles to an element
        when the user’s cursor is placed over it. It’s commonly used to create
        interactive effects, such as changing colors, showing hidden elements,
        or adding animations when a user hovers over buttons, links, or other
        components. It's recommended to use the transition property to smooth
        the hover effect by defining a duration.
      </p>
      <ul className="text-lighttext font-text xl:text-size-lg text-size-md text-justify flex flex-col justify-center items-start gap-md">
        <li className="flex justify-center items-center gap-xl">
          <span className="text-secondary-light">
            button : hover &#123; transform : scale(1.2); &#125;
          </span>{" "}
          <div className="bg-lighttext-muted p-2 border border-darktext hover:scale-120 transition-all duration-200 rounded-2xl text-darktext">
            Example
          </div>
        </li>
        <li className="flex justify-center items-center gap-xl">
          <span className="text-secondary-light">
            button : hover &#123; background-color: yellow; &#125;
          </span>{" "}
          <div className="bg-lighttext-muted p-2 border border-darktext hover:bg-yellow transition-all duration-200 rounded-2xl text-darktext">
            Example
          </div>
        </li>
        <li className="flex justify-center items-center gap-xl">
          <span className="text-secondary-light">
            button : hover &#123; color: green; &#125;
          </span>{" "}
          <div className="bg-lighttext-muted p-2 border border-darktext hover:text-green-700 transition-all duration-200 rounded-2xl text-darktext">
            Example
          </div>
        </li>
        <li className="flex justify-center items-center gap-xl">
          <span className="text-secondary-light">
            button : hover &#123; transform : translateY(-8px) &#125;
          </span>{" "}
          <div className="bg-lighttext-muted p-2 border border-darktext hover:-translate-y-2 transition-all duration-200 rounded-2xl text-darktext">
            Example
          </div>
        </li>
      </ul>
    </article>
  );
}
