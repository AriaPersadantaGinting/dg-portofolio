/* eslint-disable react/prop-types */
import { CardSpotlight } from "./card-spotlight";
import html5Icon from "/src/assets/html5Icon.svg";
import css3Icon from "/src/assets/css3Icon.svg";
import nodejsIcon from "/src/assets/nodejsIcon.svg";
import reactIcon from "/src/assets/react.svg";
import framerMotion from "/src/assets/framerMotion.svg";
import javascriptIcon from "/src/assets/javascriptIcon.svg";
import typescriptIcon from "/src/assets/typescriptIcon.svg";
import bootstrapIcon from "/src/assets/bootstrapIcon.svg";
import tailwindIcon from "/src/assets/tailwindIcon.svg";
import mysqlIcon from "/src/assets/mysqlcon.svg";
import expressjsIcon from "/src/assets/expressjsIcon.svg";
import kotlinIcon from "/src/assets/kotlin.svg";
import githubIcon from "/src/assets/github.svg";

export function CardSpotlightSKill() {
  const icons = [
    {
      src: html5Icon,
      alt: "HTML5",
      title: "HTML5",
      level: "advance",
      description: "HTML ",
      description2: "mid-2023 ",
      tag1: " Supersimpledev, ",
      tag2: "Web Programming Unpas, ",
      tag3: " and Programmer Zaman Now, ",
      tag4: " W3Schools ",
      color: [179, 18, 23],
      color2: [255, 0, 0],
    },
    {
      src: css3Icon,
      alt: "CSS3",
      title: "CSS3",
      level: "advance",
      description: "CSS ",
      description2: "mid-2023 ",
      tag1: " Supersimpledev, ",
      tag2: "Web Programming Unpas, ",
      tag3: "",
      tag4: " W3Schools ",
      description3: "website.",
      color: [179, 18, 23],
      color2: [255, 0, 0],
    },
    {
      src: javascriptIcon,
      alt: "Javascript",
      title: "JAVASCRIPT",
      level: "advance",
      description: "Javascript ",
      description2: "mid-2023 ",
      tag1: " FreeCodeCamp.org, ",
      tag2: "Web Programming Unpas, ",
      tag3: "Programmer Zaman Now ",
      tag4: " W3Schools ",
      description3: "website.",
      color: [179, 18, 23],
      color2: [255, 0, 0],
    },
    {
      src: typescriptIcon,
      alt: "Typescript",
      title: "TYPESCRIPT",
      level: "intermideatly",
      description: "Typescript ",
      description2: " in January 2024 ",
      tag1: " FreeCodeCamp.org and ",
      tag2: "Programmer Zaman Now ",
      tag3: "",
      tag4: " W3Schools ",
      description3: "website.",
      color: [58, 134, 255],
      color2: [173, 216, 230],
    },
    {
      src: nodejsIcon,
      alt: "Node.js",
      title: "NODE JS",
      level: "advance",
      description: "Node Js ",
      description2: " in July 2023 ",
      tag1: " Net Ninja, ",
      tag2: "Programmer Zaman Now, ",
      tag3: "Web Programming Unpas, ",
      tag4: " W3Schools and Dicoding ",
      description3: "website.",
      color: [179, 18, 23],
      color2: [255, 0, 0],
    },
    {
      src: reactIcon,
      alt: "React",
      title: "REACT JS",
      level: "intermideatly",
      description: "ReactJs ",
      description2: " in SEPTEMBER 2023 ",
      tag1: " Programming With Mosh, ",
      tag2: " Vip Code Studio, ",
      tag3: "Web Programming Unpas, ",
      tag4: " W3Schools ",
      description3: "website.",
      color: [58, 134, 255],
      color2: [173, 216, 230],
    },
    {
      src: framerMotion,
      alt: "Framer Motion",
      title: "FRAMER MOTION",
      level: "intermideatly",
      description: "Framer Motion ",
      description2: " in Mei 2024 ",
      tag1: " Net Ninja, ",
      tag2: "",
      tag3: "",
      tag4: " Framer Motion ",
      description3: " Documentation.",
      color: [58, 134, 255],
      color2: [173, 216, 230],
    },
    {
      src: expressjsIcon,
      alt: "ExpressJS",
      title: "EXPRESS JS",
      level: "advance",
      description: "Express Js ",
      description2: " in Agustus 2023 ",
      tag1: " Anson The Developer, ",
      tag2: "",
      tag3: "",
      tag4: " Express Js ",
      description3: " Documentation.",
      color: [179, 18, 23],
      color2: [255, 0, 0],
    },
    {
      src: bootstrapIcon,
      alt: "Bootstrap",
      title: "BOOTSTRAP",
      level: "intermideatly",
      description: "Bootstrap",
      description2: " in Mei 2023 ",
      tag1: " FreeCodeCamp.org, ",
      tag2: "",
      tag3: "",
      tag4: "  Bootstrap ",
      description3: " Documentation.",
      color: [58, 134, 255],
      color2: [173, 216, 230],
    },
    {
      src: tailwindIcon,
      alt: "Tailwind",
      title: "TAILWIND CSS",
      level: "advance",
      description: "Tailwind Css ",
      description2: " in January 2024 ",
      tag1: "Web Programming Unpas, ",
      tag2: "",
      tag3: "",
      tag4: " Tailwind Css ",
      description3: "Documentation.",
      color: [179, 18, 23],
      color2: [255, 0, 0],
    },
    {
      src: mysqlIcon,
      alt: "Mysql Icon",
      title: "MYSQL",
      level: "intermideatly",
      description: "Mysql",
      description2: " in November 2023 ",
      tag1: "Progammer Zaman Now, ",
      tag2: "",
      tag3: "",
      tag4: " Mysql ",
      description3: "Documentation.",
      color: [58, 134, 255],
      color2: [173, 216, 230],
    },
    {
      src: kotlinIcon,
      alt: "Kotlin Icon",
      title: "Kotlin",
      level: "Begginer",
      description: "Kotlin",
      description2: " in April 2024 ",
      tag1: "Progammer Zaman Now, ",
      tag2: "",
      tag3: "",
      tag4: " Kotlin ",
      description3: "Documentation.",
      color: [136, 214, 108],
      color2: [0, 100, 0],
    },
    {
      src: githubIcon,
      alt: "Github Icon",
      title: "GitHub",
      level: "Begginer",
      description: "Github",
      description2: " in Oktober 2023 ",
      tag1: "Web Programming Unpas ",
      tag2: "",
      tag3: "",
      tag4: " Github ",
      description3: "Documentation.",
      color: [136, 214, 108],
      color2: [0, 100, 0],
    },
  ];
  return (
    <>
      {icons.map((icon, index) => (
        <CardSpotlight
          key={index}
          className="h-96 lg:w-[30.5vw] md:w-[40vw] sm:w-[44vw] w-[80vw] lg:mx-1 md:mx-auto sm:mx-auto mx-auto my-2"
          style={icon.color}
          style2={icon.color2}
        >
          <p className="text-xl text-center font-bold relative z-20 mt-2 text-white">
            {icon.title}
          </p>
          <div className="text-neutral-200 mt-4 relative z-20 flex justify-center">
            <img src={`${icon.src}`} alt={icon.alt} className="w-32 h-32" />
          </div>
          <p className="text-neutral-300 mt-4 text-center relative z-20 text-sm">
            I started learning {icon.description}
            {icon.description2}through YouTube channels{" "}
            <span className="font-bold">{icon.tag1}</span>
            <span className="font-bold">{icon.tag2}</span>
            <span className="font-bold">{icon.tag3}</span>
            as well as from the
            {<span className="font-bold">{icon.tag4}</span>}
            {icon.description3}
          </p>
        </CardSpotlight>
      ))}
    </>
  );
}
