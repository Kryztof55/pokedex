import Title from "../Title";
import InfoPanel from "../InfoPanel";
import Bar from "../Bar";
import AddFav from "../AddFav";
import styles from "./MainPanel.module.scss";

interface MainPanelProps {
  stats: array;
  info: array;
}

const MainPanel = ({ stats, info }: MainPanelProps) => {
  const handleAddFav = () => {
    console.log("Added");
  };
  const statsFilterd = stats?.slice(0, 4);
  return (
    <div className={styles.panel}>
      <div className={styles.panelContainer}>
        <div>
          <div className={styles.headName}>
            <Title className={styles.panelTitle} text="Pokemon" />
            <AddFav onAddToFavs={handleAddFav} />
          </div>
          {statsFilterd?.map((el, i) => {
            return <Bar key={i} stat={el.base_stat} text={el.stat.name} />;
          })}
        </div>
        <InfoPanel info={info} />
      </div>
    </div>
  );
};

export default MainPanel;
