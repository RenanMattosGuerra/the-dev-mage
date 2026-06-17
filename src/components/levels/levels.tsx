import Image from "next/image";

type levelsParams = {
  level: number;
  title: string;
  description: string;
  src: string;
  alt: string;
};

export function Level({ level, title, description, src, alt }: levelsParams) {
  return (
    <div className="flex flex-col justify-center items-center p-xs">
      <h2 className="font-title text-size-xxl  xl:text-primary-light text-page">
        Level {level}
      </h2>
      <h3 className="font-heading text-size-lg text-lighttext-muted xl:text-darktext">
        {title}
      </h3>
      <Image src={src} alt={alt} width={110} height={110}></Image>
      <p className="font-text text-size-md text-lighttext xl:text-darktext-muted">
        {description}
      </p>
    </div>
  );
}
