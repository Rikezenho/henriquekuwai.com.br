import { StyledSocialAnchor } from "./styles";

interface ISocialAnchorProps {
  children: any;
  color: string;
  title?: string;
  url?: string;
  target?: string;
  styleProps?: object;
}

const SocialAnchor: React.FC<ISocialAnchorProps> = ({
  children,
  url,
  color,
  title,
  target = "_blank",
  ...styleProps
}: ISocialAnchorProps) => {
  return (
    <StyledSocialAnchor
      color={color}
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
