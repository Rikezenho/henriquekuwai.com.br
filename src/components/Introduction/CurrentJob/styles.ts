import styled from "styled-components";

const Highlight = styled.span`
  display: inline-block;
  background: ${(props) => props.theme.colors.primary};
`;

export { Highlight };
