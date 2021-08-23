import { Employee } from "../../../data";
import { CvPosition } from "./CvPosition";
import { Job } from "./styles";

interface ICVJobProps extends Employee {
  highlight: boolean;
}

const CvJob: React.FC<ICVJobProps> = (props: ICVJobProps) => {
  const { provider, location, positions, highlight } = props;

  return (
    <Job className="job-item">
      <h3 className="title">
        {provider} - {location}
      </h3>
      {positions.map((positionData) => (
        <CvPosition positionData={positionData} highlight={highlight} />
      ))}
    </Job>
  );
};

export { CvJob };
