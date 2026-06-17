export default function PageTwo() {
  return (
    <article className="flex flex-col justify-center items-start gap-lg max-w-150">
      <h2 className="font-heading text-size-lg backdrop-blur-md text-lighttext-muted self-center">
        Ways to apply CSS
      </h2>
      <p className="text-lighttext font-text xl:text-size-lg text-size-md font-extralight text-justify">
        <span className="text-secondary-light">Inline CSS: </span>
        Used directly within an HTML tag. <br />{" "}
        <span className="text-lighttext-muted">Example: </span>
        <code className="xl:text-size-lg text-size-md">
          &lt; h1 <ins>style="color: blue;"</ins> &gt;{" "}
          <span className="text-blue-400">Hello</span> &lt; /h1 &gt;
        </code>
      </p>
      <p className="text-lighttext font-text xl:text-size-lg text-size-md font-extralight text-justify">
        <span className="text-secondary-light">Internal CSS: </span>
        Defined within the same HTML file, typically in the &lt; head &gt;.{" "}
        <br />
        <span className="text-lighttext-muted">Example:</span> <br />
        <code className="xl:text-size-lg text-size-md">
          &lt; head &gt; <br /> &nbsp;&nbsp; &lt; style &gt; <br />{" "}
          &nbsp;&nbsp;&nbsp; body &#123; background-color: gray; &#125; <br />{" "}
          &nbsp;&nbsp;&nbsp; h1 &#123; color: darkblue; margin-left: 40px;
          &#125; <br /> &nbsp;&nbsp; &lt; /style &gt; <br /> &lt; /head &gt;
        </code>
      </p>
      <p className="text-lighttext font-text xl:text-size-lg text-size-md font-extralight text-justify">
        <span className="text-secondary-light">External CSS: </span>
        Stored in a separate .css file and linked to the HTML. The best for
        professional web development and multi-page sites. <br />
        <span className="text-lighttext-muted">Example:</span> <br />
        <code className="xl:text-size-lg text-size-md">
          &lt; head &gt; <br />
          &nbsp;&nbsp; &lt; link rel="stylesheet" href="styles.css" &gt; &lt;
          /link &gt; <br />
          &lt; /head &gt; <br /> <br />
          <span className="text-primary-light">style.css file: </span> <br />
          body &#123; <br /> &nbsp; background-color: gray; <br />
          &#125; <br />
        </code>
      </p>
    </article>
  );
}
