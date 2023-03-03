import Info from "../Info";
import Paragraph from "../Paragraph";
import TypePill from "../TypePill";
import "./InfoPanel.scss";

const InfoPanel = ({ info }) => {
  return (
    <div>
      <div className="info-panel">
        {info.map((el, i) => (
          <Info title={el.title} value={el.value} />
        ))}
      </div>
      <div className="title-container">
        <Paragraph className="title" text="Tipos" />
        <TypePill type="normal" />
      </div>
      <div className="title-container">
        <Paragraph className="title" text="Debilidades" />
        <TypePill type="normal" />
      </div>
    </div>
  );
};

export default InfoPanel;
