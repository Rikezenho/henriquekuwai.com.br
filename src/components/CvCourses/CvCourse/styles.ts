import styled from "styled-components";
import { AboutBio } from "../../CvAbout/styles";

const CourseWrapper = styled.li`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;

  ${AboutBio} & {
    border: 0;
    border-radius: 0;
    padding: 0 0 0 10px;
    border-left: 2px solid #ccc;
    margin: 5px 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobileL}) {
    display: block;
    width: 100%;
  }

  @media print {
    flex-basis: 50%;
    padding: 0 10px;
  }
`;

const CourseInfo = styled.div`
  .title {
    font-weight: 700;
    font-size: 1rem;
  }
`;

export { CourseWrapper, CourseInfo };
