import styled from "styled-components";

const IntroductionWrapper = styled.section`
  padding: 0 10%;
`;

const IntroductionTitle = styled.h1`
  display: block;
  font-weight: 700;
  font-size: 4.5rem;
  letter-spacing: 1px;
  margin: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.mobileL}) {
    font-size: 4rem;
    line-height: 1.2;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobileM}) {
    font-size: 3rem;
  }
`;

const IntroductionSubtitle = styled.h2`
  margin-top: 0;
  font-weight: 300;
  font-size: 2.3rem;
  padding-bottom: 0px;
  line-height: 1.4;

  @media (max-width: ${(props) => props.theme.breakpoints.mobileL}) {
    font-size: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobileM}) {
    font-size: 1.5rem;
  }
`;

export { IntroductionWrapper, IntroductionTitle, IntroductionSubtitle };
