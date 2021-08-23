import { Complementary, School } from "../../data";
import { CvCourse } from "./CvCourse/CvCourse";
import { CoursesWrapper } from "./styles";

interface ICvCoursesProps {
  complementary: Array<School>;
}

const CvCourses: React.FC<ICvCoursesProps> = ({
  complementary,
}: ICvCoursesProps) => {
  return (
    <CoursesWrapper>
      {complementary.map((course: Complementary, index: number) => (
        <CvCourse key={`course-${index}`} {...course} />
      ))}
    </CoursesWrapper>
  );
};

export { CvCourses };
