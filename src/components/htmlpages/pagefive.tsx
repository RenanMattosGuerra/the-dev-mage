"use client";
import { useRouter } from "next/navigation";
import { useProgress } from "@/app/hooks/useProgress";

export default function PageFive() {
  const router = useRouter();
  const { completeLevel } = useProgress();

  function handleCompleteLevel() {
    completeLevel(1);
    router.push("/start");
  }

  return (
    <article className="max-w-132 flex flex-col gap-sm lg:backdrop-blur-sm bg-page xl:bg-transparent justify-center items-center xl:p-0 p-md rounded-md">
      <p className="font-text indent-5 text-justify text-size-lg text-darktext">
        HTML Text Formatting Tags
      </p>
      <ul className="text-justify font-text text-size-md text-darktext list-disc">
        <li>
          <span className="text-primary-light">&lt; strong &gt;</span>{" "}
          <strong>
            Represents important text with strong emphasis, typically displayed
            in bold.
          </strong>
        </li>
        <li>
          <span className="text-primary-light">&lt; em &gt;</span>{" "}
          <em>
            Indicates emphasized text, usually displayed in italics to convey
            stress or tone.
          </em>
        </li>
        <li>
          <span className="text-primary-light">&lt; mark &gt;</span>{" "}
          <mark>
            Highlights text to show relevance or draw attention, typically with
            a yellow background.
          </mark>
        </li>
        <li>
          <span className="text-primary-light">&lt; ins &gt;</span>{" "}
          <ins>
            Represents inserted or newly added content, often displayed with an
            underline.
          </ins>
        </li>
        <li>
          <span className="text-primary-light">&lt; del &gt;</span>{" "}
          <del>
            Represents deleted or removed content, usually displayed with a
            strikethrough.
          </del>
        </li>
      </ul>
      <p className="font-text indent-5 text-justify text-size-lg text-darktext">
        Attributes
      </p>
      <ul className="text-justify font-text text-size-md text-darktext list-disc">
        <li>
          <span className="text-primary-light">href</span> Defines the
          destination URL for a link or the location of a stylesheet resource.{" "}
          <br />
          <span className="text-darktext-muted">
            Example: &lt; a href="https://the-dev-mage.vercel.app/" &gt;
          </span>
        </li>
        <li>
          <span className="text-primary-light">src</span> Specifies the source
          file path for images, scripts, or audio/video elements. <br />{" "}
          <span className="text-darktext-muted">
            Example: &lt; img src="/images/image.jpg" &gt;
          </span>
        </li>
        <li>
          <span className="text-primary-light">alt</span> Provides alternative
          text for images, crucial for accessibility (screen readers) and when
          an image fails to load. <br />{" "}
          <span className="text-darktext-muted">
            Example: &lt; img alt="Dev Wizard" &gt;
          </span>
        </li>
        <li>
          <span className="text-primary-light">id</span> Specifies a unique
          identifier for a single element, often used for CSS styling or
          JavaScript manipulation. <br />{" "}
          <span className="text-darktext-muted">
            Example: &lt; p id="mainText" &gt;
          </span>
        </li>
        <li>
          <span className="text-primary-light">class</span> Assigns one or more
          class names to an element, used to group elements for styling
          purposes. <br />{" "}
          <span className="text-darktext-muted">
            Example: &lt; div class="container" &gt;
          </span>
        </li>
      </ul>

      <button
        type="button"
        onClick={handleCompleteLevel}
        className="bg-darktext-muted font-heading text-lighttext p-sm transition-all duration-200 hover:scale-95 mt-sm rounded-md cursor-pointer border-2 border-darktext"
      >
        Next Level
      </button>
    </article>
  );
}
