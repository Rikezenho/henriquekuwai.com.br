import { Contacts } from "../../data";
import {
  AiOutlineMail,
  AiOutlineGlobal,
  AiOutlineWhatsApp,
  AiOutlineEnvironment,
  AiOutlineGithub,
} from "react-icons/ai";
import { About } from "./styles";

const CvContacts: React.FC<Contacts> = (props: Contacts) => {
  const { phone, email, web, github, address } = props;

  return (
    <About className="about">
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
              <a href={web} target="_blank" rel="noreferrer">
                {web}
              </a>
            </div>
          ) : null}
          {github ? (
            <div className="item" title="Github">
              <AiOutlineGithub />{" "}
              <a href={github} target="_blank" rel="noreferrer">
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
    </About>
  );
};

export { CvContacts };
