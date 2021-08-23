import styled from "styled-components";
import { ISocialAnchorProps } from "./SocialAnchor";

const StyledSocialAnchor = styled.a<ISocialAnchorProps>`
  display: inline-block;
  padding: 5px 10px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.styleProps?.bgColor};
  border-radius: 25px;
  text-decoration: none;
  transition: transform 0.2s ease;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-right: 10px;

  &:hover,
  &:focus {
    color: ${(props) => props.color};
    transform: translateY(-2px);
  }

  &:visited {
    color: ${(props) => props.color};
  }
`;

export { StyledSocialAnchor };
