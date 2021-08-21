import { StyledSocialAnchor } from "./styles";

interface ISocialAnchorProps {
  children: any;
  color: string;
  bgColor: string;
  title?: string;
  url?: string;
  target?: string;
  styleProps?: object;
}

const SocialAnchor: React.FC<ISocialAnchorProps> = ({
  children,
  url,
  color,
  bgColor,
  title,
  target = "_blank",
  ...styleProps
}: ISocialAnchorProps) => {
  return (
    <StyledSocialAnchor
      color={color}
      bgColor={bgColor}
      title={title}
      {...(url ? { href: url } : {})}
      {...(target ? { target } : {})}
      {...styleProps}
    >
      {children}
    </StyledSocialAnchor>
  );
};

export { SocialAnchor };
