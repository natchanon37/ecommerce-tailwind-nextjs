import React, {
  useRef,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";

const Masthead: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImgLoaded = useCallback(() => {
    setImgLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className=" min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full absolute object-cover"
      >
        <source src="/assets/bg-2.mp4" type="video/mp4" />
      </video>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_#727271] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6  text-4xl xl:text-5xl font-mono">DuckyDup.dev</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span className=" font-mono">Web Developer,</span>
          <span className=" font-mono"> Tailwind.</span>
        </h2>
      </div>
      <div
        className={`pb-20 flex-grow-0 md:pb-10 transition-all duration-1000 ${
          imgLoaded ? "opacity-0" : " opacity-100 -translate-y-10"
        }`}
      >
        <Image
          src="/assets/arrowdown.png"
          width={188 / 6}
          height={105 / 6}
          alt="scroll down"
          onLoad={handleImgLoaded}
        ></Image>
      </div>
    </div>
  );
};
export default Masthead;
