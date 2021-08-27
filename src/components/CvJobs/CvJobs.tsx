import { Employee } from "../../types/data";
import { CvJob } from "./CvJob/CvJob";
import { JobsWrapper } from "./styles";

interface ICvJobsProps {
  employeesTitle: string;
  employees: Array<Employee>;
}

const CvJobs: React.FC<ICvJobsProps> = ({
  employeesTitle,
  employees,
}: ICvJobsProps) => {
  return (
    <>
      <h2>{employeesTitle}</h2>
      <JobsWrapper>
        {employees.map((employee: Employee, index: number) => (
          <CvJob
            key={`history-${index}`}
            {...employee}
            highlight={index === 0}
          />
        ))}
      </JobsWrapper>
    </>
  );
};

export { CvJobs };
