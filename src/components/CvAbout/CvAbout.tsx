import { Contacts } from "../../data";
import {
  AiOutlineMail,
  AiOutlineGlobal,
  AiOutlineWhatsApp,
  AiOutlineEnvironment,
  AiOutlineGithub,
} from "react-icons/ai";

const CvAbout: React.FC<Contacts> = (props: Contacts) => {
  const { phone, email, web, github, address } = props;

  return (
    <div className="about">
      <div className="content">
        <div className="block">
          {phone ? (
            <div className="item" title="WhatsApp">
              <AiOutlineWhatsApp /> {phone}
            </div>
          ) : null}
          {email ? (
            <div className="item" title="E-mail">
              <a href={`mailto:${email}`}>
                <AiOutlineMail /> {email}
              </a>
            </div>
          ) : null}
          {web ? (
            <div className="item" title="Website">
              <AiOutlineGlobal />{" "}
              <a href={web} target="_blank">
                {web}
              </a>
            </div>
          ) : null}
          {github ? (
            <div className="item" title="Github">
              <AiOutlineGithub />{" "}
              <a href={github} target="_blank">
                {github}
              </a>
            </div>
          ) : null}
        </div>
        {address ? (
          <div className="block" title="Endereço">
            <AiOutlineEnvironment /> {address}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export { CvAbout };
