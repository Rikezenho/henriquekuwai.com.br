import { Course } from "../../types/data";
import { CvCourse } from "./CvCourse/CvCourse";
import { CoursesWrapper } from "./styles";

interface ICvCoursesProps {
  courses: Array<Course>;
}

const CvCourses: React.FC<ICvCoursesProps> = ({ courses }: ICvCoursesProps) => {
  return (
    <CoursesWrapper>
      {courses.map((course: Course, index: number) => (
        <CvCourse key={`course-${index}`} {...course} />
      ))}
    </CoursesWrapper>
  );
};

export { CvCourses };
