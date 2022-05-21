import React, { useContext, useRef } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-observer";

const opcaityForBlock = (sectionProcess: number, blockNo: number) => {
  const progress = sectionProcess - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="text-white bg-zinc-800">
      <div className="flex flex-col items-center justify-center max-w-5xl min-h-screen px-10 py-24 mx-auto text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl lg:px-20 lg:py-36 md:py-28">
        <div className="leading-[1.15]">
          <div
            className={s.skillText}
            style={{ opacity: opcaityForBlock(progress, 0) }}
          >
            We know the app inside out
          </div>
          <span
            className={`${s.skillText} inline-block after:content-['_']`}
            style={{ opacity: opcaityForBlock(progress, 1) }}
          >
            {" "}
            Our team has contributed 123 commits to React native, powering
            thousands of apps around world.
          </span>
          <span
            className={`${s.skillText} inline-block`}
            style={{ opacity: opcaityForBlock(progress, 2) }}
          >
            Popular project over <strong>1,523</strong> downloaded.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
