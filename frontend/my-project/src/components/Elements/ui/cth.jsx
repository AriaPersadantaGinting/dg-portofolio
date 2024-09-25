"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  // const words = [
  //   {
  //     text: "Build",
  //   },
  //   {
  //     text: "awesome",
  //   },
  //   {
  //     text: "apps",
  //   },
  //   {
  //     text: "with",
  //   },
  //   {
  //     text: "Aceternity.",
  //     className: "text-blue-500 dark:text-blue-500",
  //   },
  // ];
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I'm ",
    },
    {
      text: "Aria ",
    },
    {
      text: "Persadanta ",
    },
    {
      text: "Ginting, ",
    },
    {
      text: "a ",
    },
    {
      text: "Creative ",
    },
    {
      text: "Web ",
    },
    {
      text: "Developer ",
    },
    {
      text: "with ",
    },
    {
      text: "a ",
    },
    {
      text: "passion ",
    },
    {
      text: "for ",
    },
    {
      text: "blending ",
    },
    {
      text: "design ",
    },
    {
      text: "and ",
    },
    {
      text: "technology. ",
    },
    {
      text: "I ",
    },
    {
      text: "craft ",
    },
    {
      text: "engaging ",
    },
    {
      text: "and ",
    },
    // {
    //   text: "functional ",
    // },
    // {
    //   text: "websites ",
    // },
    // {
    //   text: "that ",
    // },
    // {
    //   text: "bring ",
    // },
    // {
    //   text: "your ",
    // },
    // {
    //   text: "digital ",
    // },
    // {
    //   text: "vision ",
    // },
    // {
    //   text: "to ",
    // },
    // {
    //   text: "life. ",
    //   className: "text-blue-500 dark:text-blue-500",
    // },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
