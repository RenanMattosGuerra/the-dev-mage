import Aside from "@/components/layout/aside";
export default function LevelThree() {
  return (
    <main className="flex flex-col xl:flex-row gap-md">
      <Aside></Aside>
      <section className="w-full flex justify-center items-center">
        <h1 className="text-lighttext font-heading text-size-xl">
          In Development...
        </h1>
      </section>
    </main>
  );
}
