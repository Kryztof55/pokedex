import Paragraph from "../Paragraph";
import Caption from "../Caption";
import "./Info.scss";

const Info = ({ title, value }) => {
  return (
    <div className="info">
      <Paragraph text="Altura" />
      <Caption text="1,0" />
    </div>
  );
};

export default Info;
