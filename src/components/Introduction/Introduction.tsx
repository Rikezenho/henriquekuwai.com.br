import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiTwotoneMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiFilePaper2Fill } from "react-icons/ri";
import logo from "../../../public/logo.png";
import { PersonalData } from "../../types/data";
import { IntroductionData } from "../../types/introduction";
import { Locale } from "../../types/locale";
import { SocialAnchor } from "../SocialAnchor";
import { TextIcon } from "../SocialAnchor/styles";
import { CurrentJob } from "./CurrentJob";
import {
  IntroductionWrapper,
  IntroductionTitle,
  IntroductionSubtitle,
  IntroductionLinks,
} from "./styles";

interface IIntroductionProps {
  personalData: PersonalData;
  introduction: IntroductionData;
  localeToToggle: Locale;
}

export const Introduction: React.FC<IIntroductionProps> = ({
  personalData,
  introduction,
  localeToToggle,
}: IIntroductionProps) => {
  const {
    personal: { shortName },
    contacts: { email, linkedin, github },
    employees,
  } = personalData;

  const { subtitle } = introduction;

  return (
    <IntroductionWrapper>
      <main>
        <IntroductionTitle>
          <Image src={logo} alt="" /> <span className="text">{shortName}</span>
        </IntroductionTitle>
        <IntroductionSubtitle>
          <div dangerouslySetInnerHTML={{ __html: subtitle }}></div>
          <CurrentJob employees={employees} introduction={introduction} />
        </IntroductionSubtitle>
        <IntroductionLinks>
          <Link href="/" passHref locale={localeToToggle.locale}>
            <SocialAnchor
              color="#000"
              styleProps={{ backgroundColor: "#EFEFEF" }}
              target=""
              title={localeToToggle.text}
            >
              <TextIcon>{localeToToggle.countryCode}</TextIcon>
            </SocialAnchor>
          </Link>
          <SocialAnchor
            url={`mailto:${email}`}
            color="#000"
            styleProps={{ backgroundColor: "#EFEFEF" }}
            title="E-mail"
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
            title="LinkedIn"
          >
            <AiFillLinkedin /> LinkedIn
          </SocialAnchor>
          <SocialAnchor
            url={github}
            color="#FFF"
            styleProps={{ backgroundColor: "#000" }}
            title="Github"
          >
            <AiFillGithub /> Github
          </SocialAnchor>
        </IntroductionLinks>
      </main>
    </IntroductionWrapper>
  );
};
