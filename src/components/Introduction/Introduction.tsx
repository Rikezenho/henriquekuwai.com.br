import Image from "next/image";
import logo from "../../../public/logo.png";
import { PersonalData } from "../../data";
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
    employees,
  } = personalData;

  return (
    <IntroductionWrapper>
      <IntroductionTitle>
        <Image src={logo} /> <span className="text">Henrique Kuwai</span>
      </IntroductionTitle>
      <IntroductionSubtitle>
        JavaScript lover. Developer since {developingSince}.<br />
        Focusing in front-end since {frontendSince}.
        <CurrentJob employees={employees} />
      </IntroductionSubtitle>
    </IntroductionWrapper>
  );
};
