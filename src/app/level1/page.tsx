"use client";
import { useState } from "react";
import Aside from "@/components/layout/aside";
import PageOne from "@/components/htmlpages/pageone";
import PageTwo from "@/components/htmlpages/pagetwo";
import PageThree from "@/components/htmlpages/pagethree";
import PageFour from "@/components/htmlpages/pagefour";
import PageFive from "@/components/htmlpages/pagefive";

export default function LevelOne() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <PageOne />,
    <PageTwo />,
    <PageThree />,
    <PageFour />,
    <PageFive />,
  ];

  function nextPage() {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }
  return (
    <main className="w-full flex flex-col justify-center items-center xl:flex-row overflow-x-hidden xl:overflow-y-auto">
      <Aside></Aside>
      <section className="flex flex-col justify-center items-center w-full min-h-dvh">
        <section className="w-full flex flex-col justify-center items-center flex-1 bg-[url('/images/worldfeatures/bgclassroom.webp')] bg-cover bg-no-repeat bg-center">
          <section className="xl:bg-[url('/images/worldfeatures/parchment.svg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center w-full flex-1">
            <div className="flex flex-1 justify-center items-center p-md">
              {pages[currentPage]}
            </div>
          </section>
        </section>
        <nav className="flex pointer-events-none w-full justify-between items-center p-md mt-auto border-t-2 border-border">
          <button
            type="button"
            onClick={prevPage}
            className="xl:text-size-lg text-size-md text-lighttext bg-darktext px-5 py-1 cursor-pointer transition-all duration-200 hover:bg-darktext-muted hover:scale-95 pointer-events-auto font-heading rounded-md"
          >
            &lt; Previous Page
          </button>
          <button
            type="button"
            onClick={nextPage}
            className="xl:text-size-lg text-size-md text-lighttext bg-darktext px-5 py-1 cursor-pointer transition-all duration-200 hover:bg-darktext-muted hover:scale-95 pointer-events-auto font-heading rounded-md"
          >
            Next Page &gt;
          </button>
        </nav>
      </section>
    </main>
  );
}
