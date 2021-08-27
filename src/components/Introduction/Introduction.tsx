import Image from "next/image";
import Link from "next/link";
import { AiTwotoneMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiFilePaper2Fill } from "react-icons/ri";
import logo from "../../../public/logo.png";
import { PersonalData } from "../../data";
import { SocialAnchor } from "../SocialAnchor";
import { CurrentJob } from "./CurrentJob";
import {
  IntroductionWrapper,
  IntroductionTitle,
  IntroductionSubtitle,
  IntroductionLinks,
} from "./styles";

interface IIntroductionProps {
  personalData: PersonalData;
}

export const Introduction: React.FC<IIntroductionProps> = ({
  personalData,
}: IIntroductionProps) => {
  const {
    dates: { developingSince, frontendSince },
    contacts: { email, linkedin, github },
    employees,
  } = personalData;

  return (
    <IntroductionWrapper>
      <main>
        <IntroductionTitle>
          <Image src={logo} alt="" />{" "}
          <span className="text">Henrique Kuwai</span>
        </IntroductionTitle>
        <IntroductionSubtitle>
          JavaScript &amp; CSS lover.
          <br />
          Developing things since {developingSince}.
          <br />
          Focusing in front-end since {frontendSince}.
          <CurrentJob employees={employees} />
        </IntroductionSubtitle>
        <IntroductionLinks>
          <SocialAnchor
            url={`mailto:${email}`}
            color="#000"
            styleProps={{ backgroundColor: "#EFEFEF" }}
          >
            <AiTwotoneMail /> Email
          </SocialAnchor>
          <Link href="/cv" passHref>
            <SocialAnchor
              color="#000"
              styleProps={{ backgroundColor: "#EFEFEF" }}
              target=""
              title="Curriculum"
            >
              <RiFilePaper2Fill /> CV
            </SocialAnchor>
          </Link>
          <SocialAnchor
            url={linkedin}
            color="#FFF"
            styleProps={{ backgroundColor: "#006397" }}
          >
            <AiFillLinkedin /> LinkedIn
          </SocialAnchor>
          <SocialAnchor
            url={github}
            color="#FFF"
            styleProps={{ backgroundColor: "#000" }}
          >
            <AiFillGithub /> Github
          </SocialAnchor>
        </IntroductionLinks>
      </main>
    </IntroductionWrapper>
  );
};
