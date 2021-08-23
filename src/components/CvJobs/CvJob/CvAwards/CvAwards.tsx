import { AiFillTrophy } from "react-icons/ai";
import { Award, AwardTag } from "./styles";

interface ICvAwardsProps {
  awards?: string[];
}

const CvAwards: React.FC<ICvAwardsProps> = ({ awards }: ICvAwardsProps) => {
  if (!awards || !awards.length) {
    return null;
  }

  return (
    <div className="awards">
      {awards.map((title, key) => (
        <Award key={key} className="award-item">
          <AwardTag>
            <AiFillTrophy className="icon" />{" "}
            <span className="info">{title}</span>
          </AwardTag>
        </Award>
      ))}
    </div>
  );
};

export { CvAwards };
