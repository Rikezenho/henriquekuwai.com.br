import styled from "styled-components";

const CourseWrapper = styled.li`
  padding: 10px 0;
  display: flex;

  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 33.3333333%;
  padding: 10px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobileL}) {
    display: block;
    width: 100%;
  }

  @media print {
    flex-basis: 50%;
    padding: 0 10px;
  }
`;

const CourseLogo = styled.div`
  width: 10%;
  text-align: center;

  img {
    max-width: 100%;
  }
`;

const CourseInfo = styled.div`
  width: 90%;
  padding-left: 20px;

  .title {
    font-weight: 700;
    font-size: 18px;
  }
`;

export { CourseWrapper, CourseLogo, CourseInfo };
