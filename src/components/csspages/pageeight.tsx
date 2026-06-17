"use client";
import { useRouter } from "next/navigation";
import { useProgress } from "@/app/hooks/useProgress";

export default function PageEight() {
  const router = useRouter();
  const { completeLevel } = useProgress();

  function handleCompleteLevel() {
    completeLevel(2);
    router.push("/start");
  }

  return (
    <article className="flex flex-col justify-center items-center gap-md">
      <h2 className="font-heading text-size-lg backdrop-blur-md text-lighttext-muted">
        Code example
      </h2>
      <article className="flex flex-col justify-center items-center gap-md">
        <code className="flex flex-col xl:flex-row justify-evenly items-start w-full text-size-md text-lighttext gap-md">
          <section className="flex flex-col items-start justify-center gap-md">
            <h3 className="text-secondary-light text-size-lg">HTML</h3>
            &lt; section &gt; <br />
            &nbsp; &lt; div id="one" &gt; <br />
            &nbsp;&nbsp; &lt; h1 &gt; Form One &lt;/ h1 &gt; <br />
            &nbsp; &lt;/ div &gt; <br />
            &nbsp; &lt; div id="two" &gt; <br />
            &nbsp;&nbsp; &lt; h2 &gt; Form Two &lt;/ h2 &gt; <br />
            &nbsp; &lt;/ div &gt; <br />
            &lt;/ section &gt; <br />
          </section>
          <section>
            <h3 className="self-center text-secondary-light text-size-lg">
              CSS
            </h3>
            section &#123; <br />
            &nbsp; display: flex; <br />
            &nbsp; justify-content: space-around; <br />
            &nbsp; align-items: center; <br />
            &nbsp; width: 400px; <br />
            &nbsp; background-color: lightgray; <br />
            &nbsp; padding: 8px; <br />
            &nbsp; border-radius: 16px; <br />
            &#125; <br />
            div &#123; <br />
            &nbsp; display: flex; <br />
            &nbsp; justify-content: center; <br />
            &nbsp; align-items: center; <br />
            &nbsp; width: 100px; <br />
            &nbsp; height: 100px; <br />
            &nbsp; border: 4px; <br />
            &nbsp; border-color: white; <br />
            &nbsp; font-family: "Jersey 20" <br />
            &nbsp; font-size: 16px; <br />
            &nbsp; font-style: italic; <br />
            &nbsp; border-radius: 50%; <br />
            &nbsp; transition: all 0.2s <br />
            &#125; <br />
          </section>
          <section>
            div#one &#123; <br />
            &nbsp; background-color: lightyellow; <br />
            &#125; <br />
            div#one:hover &#123; <br />
            &nbsp; background-color: lightgreen; <br />
            &#125; <br />
            div#two &#123; <br />
            &nbsp; background-color: lightorange; <br />
            &#125; <br />
            div#two:hover &#123; <br />
            &nbsp; background-color: lightblue; <br />
            &#125;
          </section>
        </code>
        <section className="flex flex-col xl:flex-row justify-between items-center w-full">
          <section className="flex justify-around items-center w-100 bg-secondary-light p-2 rounded-md self-center">
            <div className="flex justify-center items-center bg-yellow-200 text-size-md font-text rounded-full w-20 h-20 transition-all duration-200 hover:bg-green-300 border-4 border-white italic">
              <h1>Form One</h1>
            </div>
            <div className="flex justify-center items-center bg-orange-300 text-size-md font-text rounded-full w-20 h-20 transition-all duration-200 hover:bg-blue-300 border-4 border-white italic">
              <h2>Form Two</h2>
            </div>
          </section>
          <button
            type="button"
            onClick={handleCompleteLevel}
            className="bg-darktext-muted font-heading text-lighttext p-sm transition-all duration-200 hover:scale-95 mt-sm rounded-md cursor-pointer border-2 border-darktext"
          >
            Next Level
          </button>
        </section>
      </article>
    </article>
  );
}
