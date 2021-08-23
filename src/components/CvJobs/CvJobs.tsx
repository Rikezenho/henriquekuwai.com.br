import { Employee } from "../../data";
import { CvJob } from "./CvJob/CvJob";
import { JobsWrapper } from "./styles";

interface ICvJobsProps {
  employees: Array<Employee>;
}

const CvJobs: React.FC<ICvJobsProps> = ({ employees }: ICvJobsProps) => {
  return (
    <JobsWrapper>
      {employees.map((employee: Employee, index: number) => (
        <CvJob key={`history-${index}`} {...employee} highlight={index === 0} />
      ))}
    </JobsWrapper>
  );
};

export { CvJobs };
