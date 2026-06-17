"use client";
import { useState } from "react";
import Aside from "@/components/layout/aside";
import PageOne from "@/components/csspages/pageone";
import PageTwo from "@/components/csspages/pagetwo";
import PageThree from "@/components/csspages/pagethree";
import PageFour from "@/components/csspages/pagefour";
import PageFive from "@/components/csspages/pagefive";
import PageSix from "@/components/csspages/pagesix";
import PageSeven from "@/components/csspages/pageseven";
import PageEight from "@/components/csspages/pageeight";

export default function LevelTwo() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <PageOne />,
    <PageTwo />,
    <PageThree />,
    <PageFour />,
    <PageFive />,
    <PageSix />,
    <PageSeven />,
    <PageEight />,
  ];

  function prevPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <main className="w-full flex flex-col justify-center items-center xl:flex-row overflow-x-hidden xl:overflow-y-auto">
      <Aside></Aside>
      <section className="flex flex-col justify-center items-center w-full min-h-dvh">
        <section className="w-full flex justify-evenly items-center flex-1 bg-[url('/images/worldfeatures/bgforestpixel.webp')] bg-cover bg-center bg-no-repeat p-md">
          <div className="bg-secondary border-2 border-secondary-light h-full p-md rounded-md flex justify-center items-center">
            {pages[currentPage]}
          </div>
        </section>

        <nav className="flex pointer-events-none w-full justify-between items-center p-md mt-auto border-t-2 border-border">
          <button
            type="button"
            onClick={prevPage}
            className="xl:text-size-lg text-size-sm text-lighttext bg-darktext xl:px-5 px-2 py-1 cursor-pointer transition-all duration-200 hover:bg-darktext-muted hover:scale-95 pointer-events-auto font-heading rounded-md"
          >
            &lt; Previous Page
          </button>
          <button
            type="button"
            onClick={nextPage}
            className="xl:text-size-lg text-size-sm text-lighttext bg-darktext xl:px-5 px-2 py-1 cursor-pointer transition-all duration-200 hover:bg-darktext-muted hover:scale-95 pointer-events-auto font-heading rounded-md"
          >
            Next Page &gt;
          </button>
        </nav>
      </section>
    </main>
  );
}
