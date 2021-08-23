import styled from "styled-components";

const CoursesWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

export { CoursesWrapper };
