/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Timeline } from "../../../Elements/ui/timeline";

const data = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quam
          officia nostrum nulla a cupiditate ratione. Voluptatibus rerum
          praesentium atque, impedit eveniet eos. Quo debitis cupiditate, ad
          soluta voluptates accusamus?
        </p>
      </div>
    ),
  },
  {
    title: "Early 2023",
    content: (
      <div>
        <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut
          voluptatum id aperiam quisquam, nam atque saepe, provident odit sequi
          nesciunt recusandae ducimus fugiat soluta?
        </p>
        <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Lorem ipsum is for people who are too lazy to write copy. But we are
          not. Here are some more example of beautiful designs I built.
        </p>
      </div>
    ),
  },
  {
    title: "Changelog",
    content: (
      <div>
        <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
          ratione officia neque quia nesciunt vero, asperiores atque enim ipsum,
          sed adipisci magni consectetur odio reiciendis recusandae ullam iure
          eius similique. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Architecto, vitae laboriosam cumque, eveniet ratione sed
          voluptatem non suscipit aut laborum, unde ad. Numquam tenetur,
          repudiandae reiciendis deserunt quisquam nemo at.
        </p>
      </div>
    ),
  },
];
const AboutSection3 = () => {
  return (
    <>
      <section className="flex flex-col w-full">
        <div className="w-full bg-black">
          <Timeline data={data} />
        </div>
      </section>
    </>
  );
};
export default AboutSection3;
