import styled from "styled-components";

const IntroductionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding: 0 10%;
`;

const IntroductionTitle = styled.h1`
  display: block;
  font-weight: 700;
  font-size: 4.5rem;
  letter-spacing: 1px;
  margin: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 3.5rem;
    line-height: 1.2;

    .text {
      display: block;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobileM}) {
    font-size: 2.5rem;
  }
`;

const IntroductionSubtitle = styled.h2`
  margin-top: 0;
  font-weight: 300;
  font-size: 2.3rem;
  padding-bottom: 0px;
  line-height: 1.4;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 1.6rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobileM}) {
    font-size: 1.4rem;
  }
`;

const IntroductionLinks = styled.section`
  padding-top: 15px;
  display: flex;
`;

export {
  IntroductionWrapper,
  IntroductionTitle,
  IntroductionSubtitle,
  IntroductionLinks,
};
