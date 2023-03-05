import Title from "../Title";
import InfoPanel from "../InfoPanel";
import Bar from "../Bar";
import styles from "./MainPanel.module.scss";

interface MainPanelProps {
  stats: array;
  info: array;
}

const MainPanel = ({ stats, info }: MainPanelProps) => {
  console.log("stats", stats);
  const statsFilterd = stats?.slice(0, 4);
  return (
    <div className={styles.panel}>
      <div className={styles.panelContainer}>
        <div>
          <Title className={styles.panelTitle} text="Pokemon" />
          {statsFilterd?.map((el, i) => {
            return <Bar stat={el.base_stat} text={el.stat.name} />;
          })}
        </div>
        <InfoPanel info={info} />
      </div>
    </div>
  );
};

export default MainPanel;
