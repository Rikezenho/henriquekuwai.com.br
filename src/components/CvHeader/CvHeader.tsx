import Image from "next/image";
import { useMemo } from "react";
import moment from "moment";
import logo from "../../../public/logo.png";
import { Personal } from "../../data";

const CvHeader: React.FC<Personal> = (props: Personal) => {
  const { name, subtitle, birthDate } = props;

  const age = useMemo(() => moment().diff(birthDate, "years"), [birthDate]);

  return (
    <div className="header">
      <div className="logo">
        <Image src={logo} />
      </div>
      <div className="text">
        <h1>{name}</h1>
        <div className="subtitulo">
          {subtitle}, {age} anos.
        </div>
      </div>
    </div>
  );
};

export { CvHeader };
