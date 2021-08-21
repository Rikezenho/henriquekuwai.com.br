import { School } from "../../data";
import { CourseWrapper } from "./styles";

const CvCourse: React.FC<School> = (props: School) => {
  const { logo, course, institute, date } = props;

  return (
    <CourseWrapper className="course-item">
      <div className="logo">
        <img src={`/img/cv/${logo}`} />
      </div>
      <div className="info">
        <div className="title">{course}</div>
        <div className="subtitle">{institute}</div>
        <div className="date">{date}</div>
      </div>
    </CourseWrapper>
  );
};

export { CvCourse };
