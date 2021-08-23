import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { CvAbout } from "../components/CvAbout";
import { CvCourses } from "../components/CvCourses";
import { CvCourse } from "../components/CvCourses/CvCourse";
import { CvHeader } from "../components/CvHeader";
import { CvJob } from "../components/CvJob";
import { CvWrapper } from "../components/CvWrapper";
import { Employee, PersonalData } from "../data";

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
      <CvWrapper className="cv">
        <header>
          <div className="content">
            <CvHeader {...personal} />
          </div>
          <CvAbout {...contacts} />
        </header>
        <main className="conteudo">
          <div className="content">
            {description || languages.length ? (
              <section className="bio-wrapper">
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
                            {index !== language.length - 1 ? ", " : null}
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
                  </div>
                </div>
              </section>
            ) : null}

            {employees.length ? (
              <section className="history-wrapper has-hr">
                <h2>Experiência profissional</h2>
                <ul className="ul-history">
                  {employees.map((employee: Employee, index: number) => (
                    <li key={`history-${index}`} className="item">
                      <CvJob {...employee} highlight={index === 0} />
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {complementary.length ? (
              <section className="complementary-wrapper has-hr avoid-page-break">
                <h2>Cursos complementares</h2>
                <CvCourses courses={complementary} />
              </section>
            ) : null}

            {Object.keys(nodeLists).length
              ? Object.entries(nodeLists).map(([key, { title, items }]) => (
                  <section
                    key={key}
                    className={`${key}-wrapper has-hr avoid-page-break`}
                  >
                    <h2>{title}</h2>
                    <ul className="ul-nodelists">
                      {items.map((item: string, index: number) => (
                        <li key={`node-${index}`} className="item">
                          <div className="box">{item}</div>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))
              : null}
          </div>
        </main>
        <footer className="footer">
          <div className="content">
            {contacts.linkedin ? (
              <div className="additional-info linkedIn-info">
                <AiFillLinkedin /> Veja mais no meu LinkedIn:{" "}
                <a href={contacts.linkedin} target="_blank">
                  {contacts.linkedin}
                </a>
              </div>
            ) : null}
            {repositoryUrl ? (
              <div className="additional-info github-info">
                <AiFillGithub /> Código-fonte do currículo:{" "}
                <a href={repositoryUrl} target="_blank">
                  {repositoryUrl}
                </a>
              </div>
            ) : null}
            <br />
            Última atualização em {lastUpdate}.
          </div>
        </footer>
      </CvWrapper>
    </>
  );
};

export default Curriculum;
