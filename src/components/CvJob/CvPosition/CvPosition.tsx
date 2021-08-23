import { EmployeePosition } from "../../../data";
import { CvAwards } from "../CvAwards";
import { JobDate, JobPosition } from "./styles";

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
      <h4 className="position-name">
        <JobDate>{date}</JobDate>
        {position}
      </h4>
      {description ? <div className="description">{description}</div> : null}
      <CvAwards awards={awards} />
    </JobPosition>
  );
};

export { CvPosition };
