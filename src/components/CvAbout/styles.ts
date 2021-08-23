import styled, { css } from "styled-components";

const FlexHalf = css`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 50%;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
    width: 100%;
  }
`;

const AboutSection = styled.section`
  padding: 20px 0;
`;

const AboutWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const AboutDescription = styled.div`
  ${FlexHalf}
`;

const AboutBio = styled.div`
  ${FlexHalf}
  padding-left: 20px;

  .item {
    padding-bottom: 10px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding-top: 20px;
    padding-left: 0px;
  }
`;

export { AboutSection, AboutWrapper, AboutDescription, AboutBio };
