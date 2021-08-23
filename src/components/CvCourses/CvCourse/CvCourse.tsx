import { Course } from "../../../data";
import { CourseInfo, CourseWrapper } from "./styles";

interface ICvCourseProps extends Course {
  single?: boolean;
}

const CvCourse: React.FC<ICvCourseProps> = (props: ICvCourseProps) => {
  const { course, institute, date, single } = props;

  return (
    <CourseWrapper className="course-item" as={single ? "div" : "li"}>
      <CourseInfo>
        <div className="title">{course}</div>
        <div className="subtitle">{institute}</div>
        <div className="date">{date}</div>
      </CourseInfo>
    </CourseWrapper>
  );
};

export { CvCourse };
