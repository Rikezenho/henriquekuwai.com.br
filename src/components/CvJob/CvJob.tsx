import { Employee } from "../../data";
import { AiFillTrophy } from "react-icons/ai";
import { Job } from "./styles";

const CvJob: React.FC<Employee> = (props: Employee) => {
  const { date, position, provider, description, awards } = props;

  return (
    <Job className="job-item">
      <div className="title">
        <div className="date">{date}</div>
        <span className="text">{position}</span>
      </div>
      <div className="provider">{provider}</div>
      {description ? <div className="description">{description}</div> : null}
      {awards?.length ? (
        <div className="awards">
          {awards.map((title, key) => (
            <div key={key} className="award-item">
              <AiFillTrophy className="icon" />{" "}
              <span className="info">{title}</span>
            </div>
          ))}
        </div>
      ) : null}
    </Job>
  );
};

export { CvJob };
