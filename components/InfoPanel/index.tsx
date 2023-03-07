import Info from "../Info";
import Paragraph from "../Paragraph";
import TypePill from "../TypePill";
import styles from "./InfoPanel.module.scss";

interface InfoPanelProps {
  info: array;
}

const InfoPanel = ({ info }: InfoPanelProps) => {
  return (
    <div>
      <div className={styles.infoPanel}>
        {info.map((el, i) => (
          <Info key={i} title={el.title} value={el.value} />
        ))}
      </div>
    </div>
  );
};

export default InfoPanel;
