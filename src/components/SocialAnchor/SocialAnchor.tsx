import { StyledSocialAnchor } from "./styles";

export interface ISocialAnchorProps {
  children: any;
  color: string;
  title?: string;
  url?: string;
  target?: string;
  styleProps?: {
    bgColor: string;
  };
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
