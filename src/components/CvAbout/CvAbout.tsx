import { Course } from "../../types/data";
import { CvCourse } from "../CvCourses/CvCourse";
import {
  AboutBio,
  AboutDescription,
  AboutSection,
  AboutWrapper,
} from "./styles";

interface ICvAboutProps {
  description: string;
  languages: string[];
  school: Course;
}

const CvAbout: React.FC<ICvAboutProps> = ({
  description,
  languages,
  school,
}: ICvAboutProps) => {
  return (
    <AboutSection className="bio-wrapper">
      <h2>Sobre</h2>
      <AboutWrapper>
        <AboutDescription
          className="sobre"
          dangerouslySetInnerHTML={{ __html: description }}
        ></AboutDescription>
        <AboutBio>
          {languages.length ? (
            <div className="item">
              <strong>Idiomas:</strong>
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
              <strong>Formação acadêmica:</strong>
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
