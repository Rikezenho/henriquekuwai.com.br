import { Course } from "../../types/data";
import { CvCourse } from "./CvCourse/CvCourse";
import { CoursesWrapper } from "./styles";

interface ICvCoursesProps {
  complementaryTitle: string;
  courses: Array<Course>;
}

const CvCourses: React.FC<ICvCoursesProps> = ({
  complementaryTitle,
  courses,
}: ICvCoursesProps) => {
  return (
    <>
      <h2>{complementaryTitle}</h2>
      <CoursesWrapper>
        {courses.map((course: Course, index: number) => (
          <CvCourse key={`course-${index}`} {...course} />
        ))}
      </CoursesWrapper>
    </>
  );
};

export { CvCourses };
