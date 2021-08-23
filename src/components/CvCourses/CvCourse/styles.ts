import styled from "styled-components";

const CourseWrapper = styled.li`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;

  .bio & {
    border: 0;
    border-radius: 0;
    padding: 5px 5px 5px 0;
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
    font-size: 18px;
  }
`;

export { CourseWrapper, CourseInfo };
