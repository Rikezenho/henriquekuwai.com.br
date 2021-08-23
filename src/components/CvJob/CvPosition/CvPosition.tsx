import { EmployeePosition } from "../../../data";
import { CvAwards } from "../CvAwards";
import { JobDate, JobPosition, JobPositionTitle } from "./styles";

interface ICvPositionProps {
  positionData: EmployeePosition;
  highlight: boolean;
}

const CvPosition: React.FC<ICvPositionProps> = ({
  positionData,
  highlight,
}: ICvPositionProps) => {
  const { date, position, description, awards } = positionData;
  return (
    <JobPosition className={`position ${highlight ? "highlight" : ""}`}>
      <JobPositionTitle>
        <JobDate>{date}</JobDate>
        {position}
      </JobPositionTitle>
      {description ? <div className="description">{description}</div> : null}
      <CvAwards awards={awards} />
    </JobPosition>
  );
};

export { CvPosition };
