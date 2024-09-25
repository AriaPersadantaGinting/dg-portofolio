import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="/src/assets/bg32new.png"
            className="w-[80vw] h-[100vw] lg:w-[27.8vw] lg:h-[40vw] md:w-[70%] md:h-[80vw] mx-auto rounded-xl"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
