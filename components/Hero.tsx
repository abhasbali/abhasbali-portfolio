import Image from "next/image"; // Import Next.js Image component
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-4xl lg:max-w-[80vw] flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left side: Image */}
          <div className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 relative rounded-full overflow-hidden border-2 border-purple-500 shadow-lg flex-shrink-0">
            <Image
              src="/jsm-logo.png" // Make sure this image is in your public folder
              alt="JSM Logo"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Right side: Text content */}
          <div className="flex flex-col items-center md:items-start justify-center gap-6 flex-1">
            <p className="uppercase tracking-widest text-xs text-center md:text-left text-blue-100 max-w-80">
              Welcome to my Portfolio
            </p>

            {/**
             *  Link: https://ui.aceternity.com/components/text-generate-effect
             */}
            <TextGenerateEffect
              words="Hi, I'm Abhas. I build sleek, interactive websites and full-stack applications."
              className="text-center md:text-left text-[32px] md:text-4xl lg:text-5xl xl:text-6xl"
            />

            <p className="text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
              Hi! I&apos;m Abhas, a Next.js Developer studying in SRM.
            </p>

            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;