import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { CvAbout } from "../components/CvAbout";
import { CvCourse } from "../components/CvCourse";
import { CvHeader } from "../components/CvHeader";
import { CvJob } from "../components/CvJob";
import { Complementary, Employee, PersonalData } from "../data";

export const getStaticProps = async () => {
  const { personalData } = await import("../data");
  const {
    repository: { url: repositoryUrl },
  } = await import("../../package.json");

  const props = {
    personalData,
    repositoryUrl,
  };

  return { props };
};

interface ICurriculumProps {
  personalData: PersonalData;
  repositoryUrl: string;
}

const Curriculum: React.FC<ICurriculumProps> = ({
  personalData,
  repositoryUrl,
}: ICurriculumProps) => {
  const {
    description,
    languages,
    personal,
    contacts,
    school,
    employees,
    complementary,
    nodeLists,
    lastUpdate,
  } = personalData;
  return (
    <>
      <Head>
        <title>Henrique Kuwai - Curriculum</title>
      </Head>
      <div className="cv">
        <header>
          <div className="content">
            <CvHeader {...personal} />
          </div>
          <CvAbout {...contacts} />
        </header>
        <div className="conteudo">
          <div className="content">
            {description || languages.length ? (
              <div className="bio-wrapper">
                <h2>Sobre</h2>
                <div className="flex-wrapper">
                  <div
                    className="sobre"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></div>
                  <div className="bio">
                    {languages.length ? (
                      <div className="item">
                        <strong>Idiomas:</strong>
                        <br />
                        {languages.map((language: string, index: number) => (
                          <span key={`language-${index}`}>
                            {language}
                            {index !== language.length - 1 ? " ," : null}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  {school ? (
                    <div className="item">
                      <strong>Formação acadêmica:</strong>
                      <br />
                      <CvCourse {...school} />
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}

            {employees.length ? (
              <div className="history-wrapper has-hr">
                <h2>Experiência profissional</h2>
                <ul className="ul-history">
                  {employees.map((employee: Employee, index: number) => (
                    <li key={`history-${index}`} className="item">
                      <CvJob {...employee} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {complementary.length ? (
              <div className="complementary-wrapper has-hr avoid-page-break">
                <h2>Cursos complementares</h2>
                <ul className="ul-complementary-courses">
                  {complementary.map((course: Complementary, index: number) => (
                    <li key={`course-${index}`} className="item">
                      <CvCourse {...course} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {Object.keys(nodeLists).length
              ? Object.entries(nodeLists).map(([key, { title, items }]) => (
                  <div
                    key={key}
                    className={`${key}-wrapper has-hr avoid-page-break`}
                  >
                    <h2>{title}</h2>
                    <ul className="ul-nodelists">
                      {items.map((item: string, index: number) => (
                        <li key={`node-${index}`} className="item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              : null}
          </div>
        </div>
        <footer className="footer">
          <div className="content">
            {contacts.linkedin ? (
              <div className="additional-info linkedIn-info">
                <AiFillLinkedin />
                Veja mais no meu LinkedIn:
                <a href={contacts.linkedin} target="_blank">
                  {contacts.linkedin}
                </a>
              </div>
            ) : null}
            {repositoryUrl ? (
              <div className="additional-info github-info">
                <AiFillGithub />
                Código-fonte do currículo:
                <a href={repositoryUrl} target="_blank">
                  {repositoryUrl}
                </a>
              </div>
            ) : null}
            <br />
            Última atualização em {lastUpdate}.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Curriculum;
