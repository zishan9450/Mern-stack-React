import { BallCanvas } from "./canvas";
import { sectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default sectionWrapper(Tech, "");