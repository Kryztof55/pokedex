import Info from "../Info";
import Paragraph from "../Paragraph";
import TypePill from "../TypePill";
import styles from "./InfoPanel.module.scss";

const InfoPanel = ({ info }) => {
  return (
    <div>
      <div className={styles.infoPanel}>
        {info.map((el, i) => (
          <Info title={el.title} value={el.value} />
        ))}
      </div>
      <div className={styles.titleContainer}>
        <Paragraph className={styles.title} text="Tipos" />
        <TypePill type="normal" />
      </div>
      <div className={styles.titleContainer}>
        <Paragraph className={styles.title} text="Debilidades" />
        <TypePill type="normal" />
      </div>
    </div>
  );
};

export default InfoPanel;
