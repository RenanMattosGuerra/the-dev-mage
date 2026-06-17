export default function PageSix() {
  return (
    <article className="flex flex-col justify-center items-center gap-xxl">
      <ul className="font-text xl:text-size-lg text-size-md text-justify flex flex-col justify-start items-start gap-xs">
        <li className="flex min-w-60 lg:min-w-110 justify-between items-center">
          <span className="text-secondary-light min-w-40">
            align-items: flex-start;
          </span>
          <div className="flex h-20 items-start p-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
          </div>
        </li>
        <li className="flex min-w-60 lg:min-w-110 justify-between items-center">
          <span className="text-secondary-light min-w-40">
            align-items: center;
          </span>
          <div className="flex h-20 items-center p-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
          </div>
        </li>
        <li className="flex min-w-60 lg:min-w-110 justify-between items-center">
          <span className="text-secondary-light min-w-40">
            align-items: flex-end;
          </span>
          <div className="flex h-20 items-end p-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
          </div>
        </li>
      </ul>

      <ul className="font-text xl:text-size-lg text-size-md text-justify flex flex-col justify-center items-center gap-xs">
        <li className="flex min-w-60 lg:min-w-110 justify-between items-center">
          <span className="text-secondary-light min-w-40">
            flex-direction: row;
          </span>
          <div className="flex h-5 items-center justify-center py-3 px-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
          </div>
        </li>
        <li className="flex min-w-60 lg:min-w-110 justify-between items-center">
          <span className="text-secondary-light min-w-40">
            flex-direction: column;
          </span>
          <div className="flex flex-col items-center py-3 px-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
          </div>
        </li>
        <li className="flex min-w-60 lg:min-w-110 justify-between items-center">
          <span className="text-secondary-light min-w-40">
            flex-direction: row-reverse;
          </span>
          <div className="flex h-5 flex-row-reverse items-center py-3 px-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
          </div>
        </li>
        <li className="flex min-w-60 xl:min-w-110 justify-between items-center">
          <span className="text-secondary-light">
            flex-direction: column-reverse;
          </span>
          <div className="flex flex-col-reverse items-center py-3 px-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
          </div>
        </li>
      </ul>

      <ul className="font-text xl:text-size-lg text-size-md text-justify flex flex-col justify-center items-start gap-xs">
        <li className="flex min-w-60 lg:min-w-110 justify-between items-center">
          <span className="text-secondary-light flex gap-xs justify-center items-center align-center">
            <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
            align-self: flex-end;
          </span>
          <div className="flex h-20 py-3 px-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full self-end"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
          </div>
        </li>
        <li className="flex min-w-60 lg:min-w-110 justify-between items-center">
          <div className="flex gap-sm">
            <span className="text-secondary-light flex gap-xs justify-center items-center align-center">
              <div className="bg-purple-600 w-4 h-4 rounded-full"></div>
              order: 1;
            </span>
            <span className="text-secondary-light flex gap-xs justify-center items-center align-center">
              <div className="bg-red-500 w-4 h-4 rounded-full"></div>
              order: 2;
            </span>
            <span className="text-secondary-light flex gap-xs justify-center items-center align-center">
              <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
              order: 3;
            </span>
          </div>
          <div className="flex items-center py-3 px-2 border border-lighttext">
            <div className="bg-red-500 w-4 h-4 rounded-full order-2"></div>
            <div className="bg-yellow-300 w-4 h-4 rounded-full order-3"></div>
            <div className="bg-purple-600 w-4 h-4 rounded-full order-1"></div>
          </div>
        </li>
      </ul>
    </article>
  );
}
