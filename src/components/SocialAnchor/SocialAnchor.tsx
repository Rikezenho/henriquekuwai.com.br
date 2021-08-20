import { StyledSocialAnchor } from "./styles";

interface ISocialAnchorProps {
  name: string;
  url: string;
  color: string;
  bgColor: string;
}

const SocialAnchor: React.FC<ISocialAnchorProps> = ({
  name,
  url,
  color,
  bgColor,
}: ISocialAnchorProps) => {
  return (
    <StyledSocialAnchor
      color={color}
      bgColor={bgColor}
      href={url}
      target="_blank"
    >
      {name}
    </StyledSocialAnchor>
  );
};

export { SocialAnchor };
