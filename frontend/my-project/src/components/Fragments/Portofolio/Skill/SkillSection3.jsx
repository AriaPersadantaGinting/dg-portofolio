/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardSpotlightSKill } from "../../../Elements/ui/card-spotlight-skill";

const SkillSection3 = (props) => {
  const { style } = props;
  return (
    <>
      <section className="w-full mt-10">
        <div className="flex flex-wrap lg:w-[94vw] mx-auto">
          <CardSpotlightSKill></CardSpotlightSKill>
        </div>
      </section>
    </>
  );
};
export default SkillSection3;
