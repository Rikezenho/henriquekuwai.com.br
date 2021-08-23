import { School } from "../../../data";
import { CourseInfo, CourseLogo, CourseWrapper } from "./styles";

const CvCourse: React.FC<School> = (props: School) => {
  const { logo, course, institute, date } = props;

  return (
    <CourseWrapper className="course-item">
      <CourseLogo>
        <img src={`/img/cv/${logo}`} />
      </CourseLogo>
      <CourseInfo>
        <div className="title">{course}</div>
        <div className="subtitle">{institute}</div>
        <div className="date">{date}</div>
      </CourseInfo>
    </CourseWrapper>
  );
};

export { CvCourse };
