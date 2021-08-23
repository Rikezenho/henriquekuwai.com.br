import styled from "styled-components";

const JobPosition = styled.div`
  padding: 5px 0 5px 10px;
  border-left: 2px solid #ccc;

  &.highlight {
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

const JobPositionTitle = styled.h4`
  color: #555;
`;

const JobDate = styled.div`
  border: 2px solid #ccc;
  padding: 0 10px;
  border-radius: 5px;
  float: left;
  margin-right: 5px;
  font-size: 0.8rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    float: none;
    display: inline-block;
  }
`;

export { JobPosition, JobPositionTitle, JobDate };
