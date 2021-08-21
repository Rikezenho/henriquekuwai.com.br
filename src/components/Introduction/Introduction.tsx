import Image from "next/image";
import logo from "../../../public/logo.png";
import { PersonalData } from "../../data";
import { SocialAnchor } from "../SocialAnchor";
import { CurrentJob } from "./CurrentJob";
import {
  IntroductionWrapper,
  IntroductionTitle,
  IntroductionSubtitle,
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
      <IntroductionTitle>
        <Image src={logo} /> <span className="text">Henrique Kuwai</span>
      </IntroductionTitle>
      <IntroductionSubtitle>
        JavaScript &amp; CSS lover.
        <br />
        Developing things since {developingSince}.
        <br />
        Focusing in front-end since {frontendSince}.
        <CurrentJob employees={employees} />
      </IntroductionSubtitle>
      <section>
        <SocialAnchor
          url={`mailto:${email}`}
          name="Email"
          color="#000"
          bgColor="#EFEFEF"
        ></SocialAnchor>
        <SocialAnchor
          url={linkedin}
          name="LinkedIn"
          color="#FFF"
          bgColor="#006397"
        ></SocialAnchor>
        <SocialAnchor
          url={github}
          name="Github"
          color="#FFF"
          bgColor="#000"
        ></SocialAnchor>
      </section>
    </IntroductionWrapper>
  );
};
