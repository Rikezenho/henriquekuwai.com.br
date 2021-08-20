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
      Currently employed at <Highlight>{provider}</Highlight>.
    </>
  ) : (
    <>
      <br />
      Currently <Highlight>available for jobs</Highlight>.
    </>
  );
};

export { CurrentJob };
