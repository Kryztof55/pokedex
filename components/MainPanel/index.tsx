import Title from "../Title";
import InfoPanel from "../InfoPanel";
import Bar from "../Bar";
import styles from "./MainPanel.module.scss";

const MainPanel = ({ stats, info }) => {
  return (
    <div className={styles.panel}>
      <div className={styles.panelContainer}>
        <div>
          <Title className={styles.panelTitle} text="Pokemon" />
          {stats.map((el, i) => {
            return <Bar stat={el.stat} text={el.text} />;
          })}
        </div>
        <InfoPanel info={info} />
      </div>
    </div>
  );
};

export default MainPanel;
