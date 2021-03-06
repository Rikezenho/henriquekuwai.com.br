import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { CvAbout } from "../components/CvAbout/CvAbout";
import { CvContacts } from "../components/CvContacts";
import { CvCourses } from "../components/CvCourses";
import { CvHeader } from "../components/CvHeader";
import { CvJobs } from "../components/CvJobs/CvJobs";
import { CvWrapper } from "../components/CvWrapper";
import { PersonalData } from "../types/data";
import { getLocale } from "../utils/locale";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { personalData } = await getLocale(context, ["data"]);
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
    personal,
    contacts,
    aboutTitle,
    description,
    languagesTitle,
    languages,
    schoolTitle,
    school,
    employeesTitle,
    employees,
    complementaryTitle,
    complementary,
    nodeLists,
    linkedInTitle,
    sourceCodeTitle,
    lastUpdateTitle,
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
          <CvContacts {...contacts} />
        </header>
        <main className="conteudo">
          <div className="content">
            <CvAbout
              aboutTitle={aboutTitle}
              description={description}
              languagesTitle={languagesTitle}
              languages={languages}
              schoolTitle={schoolTitle}
              school={school}
            />

            {employees.length ? (
              <section className="history-wrapper has-hr">
                <CvJobs employeesTitle={employeesTitle} employees={employees} />
              </section>
            ) : null}

            {complementary.length ? (
              <section className="complementary-wrapper has-hr avoid-page-break">
                <CvCourses
                  complementaryTitle={complementaryTitle}
                  courses={complementary}
                />
              </section>
            ) : null}

            {nodeLists.length
              ? nodeLists.map(({ title, items }, index) => (
                  <section
                    key={`nodeList-${index}`}
                    className="has-hr avoid-page-break"
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
                <AiFillLinkedin /> {linkedInTitle}{" "}
                <a href={contacts.linkedin} target="_blank" rel="noreferrer">
                  {contacts.linkedin}
                </a>
              </div>
            ) : null}
            {repositoryUrl ? (
              <div className="additional-info github-info">
                <AiFillGithub /> {sourceCodeTitle}{" "}
                <a href={repositoryUrl} target="_blank" rel="noreferrer">
                  {repositoryUrl}
                </a>
              </div>
            ) : null}
            <br />
            {lastUpdateTitle} {lastUpdate}.
          </div>
        </footer>
      </CvWrapper>
    </>
  );
};

export default Curriculum;
