export default function PageFive() {
  return (
    <article className="flex flex-col justify-center items-start gap-lg xl:w-150">
      <h2 className="font-heading text-size-lg backdrop-blur-md text-lighttext-muted self-center">
        Flexbox
      </h2>
      <p className="text-lighttext font-text xl:text-size-lg text-size-md indent-5 text-justify">
        Flexbox (Flexible Box Layout) is a CSS layout system designed to
        efficiently arrange, align, and distribute space among elements within a
        container, even when their sizes are dynamic or unknown. It works along
        a main axis and a cross axis, allowing developers to easily control
        direction, alignment, spacing, and ordering of items using properties
        like display: flex, justify-content, align-items, and flex-wrap, making
        it ideal for building responsive and flexible layouts.
      </p>
      <ul className="text-lighttext font-text xl:text-size-lg text-size-md text-justify self-center flex flex-col gap-xs">
        <li>
          <span className="text-secondary-light">
            justify-content: flex-start;
          </span>
          <div className="flex justify-start p-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
          </div>
        </li>
        <li>
          <span className="text-secondary-light">justify-content: center;</span>
          <div className="flex justify-center p-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
          </div>
        </li>
        <li>
          <span className="text-secondary-light">
            justify-content: flex-end;
          </span>
          <div className="flex justify-end p-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
          </div>
        </li>
        <li>
          <span className="text-secondary-light">
            justify-content: space-evenly;
          </span>
          <div className="flex justify-evenly p-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
          </div>
        </li>
        <li>
          <span className="text-secondary-light">
            justify-content: space-around;
          </span>
          <div className="flex justify-around p-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
          </div>
        </li>
        <li>
          <span className="text-secondary-light">
            justify-content: space-between;
          </span>
          <div className="flex justify-between p-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
          </div>
        </li>
      </ul>
    </article>
  );
}
