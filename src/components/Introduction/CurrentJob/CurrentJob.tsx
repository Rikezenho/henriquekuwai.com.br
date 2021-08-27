import { Employee } from "../../../types/data";
import { IntroductionData } from "../../../types/introduction";
import { Highlight } from "./styles";

interface ICurrentJobProps {
  employees: Array<Employee>;
  introduction: IntroductionData;
}

const CurrentJob: React.FC<ICurrentJobProps> = ({
  employees,
  introduction,
}: ICurrentJobProps) => {
  const [{ provider }] = employees;
  const { currentlyEmployed, lookingForJobs } = introduction;

  return provider ? (
    <>
      {currentlyEmployed} <Highlight>{provider}</Highlight>.
    </>
  ) : (
    <>
      <Highlight>{lookingForJobs}</Highlight>.
    </>
  );
};

export { CurrentJob };
