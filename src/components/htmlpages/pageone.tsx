export default function PageOne() {
  return (
    <article className="max-w-132 flex flex-col gap-sm lg:backdrop-blur-sm bg-page xl:bg-transparent justify-center items-center xl:p-0 p-md rounded-md">
      <h1 className="font-heading font-semibold text-primary text-size-xl">
        HyperText Markup Language
      </h1>
      <p className="font-text indent-5 text-justify text-size-lg text-darktext">
        This is the standard language used to create and structure content on
        the web. It defines the basic building blocks of a webpage, such as
        headings, paragraphs, links, images, and sections. A basic HTML5
        document structure:
      </p>
      <span>
        <code className="font-text text-size-lg text-primary">
          &lt;!DOCTYPE html&gt; <br />
          &lt;html lang="en"&gt; <br />
          &lt;head&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset="UTF-8"&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta name="viewport"
          content="width=device-width, initial-scale=1.0"&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Document
          Title&lt;/title&gt; <br />
          &lt;/head&gt; <br />
          &lt;body&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Visible content goes here --&gt;{" "}
          <br />
          &lt;/body&gt; <br />
          &lt;/html&gt; <br />
        </code>
      </span>
    </article>
  );
}
