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
          <Info title={el.title} value={el.value} />
        ))}
      </div>
      <div className={styles.footer}>
        <div className={styles.titleContainer}>
          <Paragraph className={styles.title} text="Tipo" />
          <TypePill type="normal" />
        </div>
        <div className={styles.titleContainer}>
          <Paragraph className={styles.title} text="Debilidad" />
          <TypePill type="normal" />
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
