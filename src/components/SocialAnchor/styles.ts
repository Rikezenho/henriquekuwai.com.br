import styled from "styled-components";
import { ISocialAnchorProps } from "./SocialAnchor";

const StyledSocialAnchor = styled.a<ISocialAnchorProps>`
  display: inline-block;
  padding: 5px 10px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.styleProps?.backgroundColor};
  border-radius: 25px;
  text-decoration: none;
  transition: transform 0.2s ease;
  font-size: 0;
  margin-right: 10px;

  svg {
    font-size: 24px;
  }

  &:hover,
  &:focus {
    color: ${(props) => props.color};
    transform: translateY(-2px);
  }

  &:visited {
    color: ${(props) => props.color};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    svg {
      font-size: 20px;
    }
  }
`;

const TextIcon = styled.span`
  font-size: 24px;
  line-height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    font-size: 20px;
    line-height: 20px;
  }
`;

export { StyledSocialAnchor, TextIcon };
