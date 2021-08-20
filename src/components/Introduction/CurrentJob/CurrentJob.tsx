import { Employee } from "../../../data";

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
      Currently employed at <span className="highlight">{provider}</span>.
    </>
  ) : (
    <>
      <br />
      Currently <span className="highlight">available for jobs</span>.
    </>
  );
};

export { CurrentJob };
