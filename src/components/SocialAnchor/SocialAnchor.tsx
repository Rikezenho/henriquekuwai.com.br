import { StyledSocialAnchor } from "./styles";

interface ISocialAnchorProps {
  name: string;
  color: string;
  bgColor: string;
  url?: string;
  target?: string;
  styleProps?: object;
}

const SocialAnchor: React.FC<ISocialAnchorProps> = ({
  name,
  url,
  color,
  bgColor,
  target = "_blank",
  ...styleProps
}: ISocialAnchorProps) => {
  return (
    <StyledSocialAnchor
      color={color}
      bgColor={bgColor}
      {...(url ? { href: url } : {})}
      {...(target ? { target } : {})}
      {...styleProps}
    >
      {name}
    </StyledSocialAnchor>
  );
};

export { SocialAnchor };
