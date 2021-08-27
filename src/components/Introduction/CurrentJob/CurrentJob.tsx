import { Employee } from "../../../data";
import { Highlight } from "./styles";

interface ICurrentJobProps {
  employees: Array<Employee>;
}

const CurrentJob: React.FC<ICurrentJobProps> = ({
  employees,
}: ICurrentJobProps) => {
  const [{ provider }] = employees;

  return provider ? (
    <>
      <br />
      💼 Working at <Highlight>{provider}</Highlight>.
    </>
  ) : (
    <>
      <br />
      🔎 <Highlight>Available for jobs</Highlight>.
    </>
  );
};

export { CurrentJob };
