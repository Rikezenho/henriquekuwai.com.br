import { Course } from "../../types/data";
import { CvCourse } from "../CvCourses/CvCourse";
import {
  AboutBio,
  AboutDescription,
  AboutSection,
  AboutWrapper,
} from "./styles";

interface ICvAboutProps {
  aboutTitle: string;
  description: string;
  languagesTitle: string;
  languages: string[];
  schoolTitle: string;
  school: Course;
}

const CvAbout: React.FC<ICvAboutProps> = ({
  aboutTitle,
  description,
  languagesTitle,
  languages,
  schoolTitle,
  school,
}: ICvAboutProps) => {
  return (
    <AboutSection className="bio-wrapper">
      <h2>{aboutTitle}</h2>
      <AboutWrapper>
        <AboutDescription
          className="sobre"
          dangerouslySetInnerHTML={{ __html: description }}
        ></AboutDescription>
        <AboutBio>
          {languages.length ? (
            <div className="item">
              <strong>{languagesTitle}</strong>
              <br />
              {languages.map((language: string, index: number) => (
                <span key={`language-${index}`}>
                  {language}
                  {index !== languages.length - 1 ? ", " : null}
                </span>
              ))}
            </div>
          ) : null}

          {school ? (
            <div className="item">
              <strong>{schoolTitle}</strong>
              <br />
              <CvCourse {...school} single />
            </div>
          ) : null}
        </AboutBio>
      </AboutWrapper>
    </AboutSection>
  );
};

export { CvAbout };
