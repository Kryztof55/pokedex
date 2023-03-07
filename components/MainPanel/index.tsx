import Title from "../Title";
import InfoPanel from "../InfoPanel";
import Bar from "../Bar";
import AddFav from "../AddFav";
import styles from "./MainPanel.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectaddFavs, setAddFavs } from "../../store/favs";

interface MainPanelProps {
  stats: array;
  info: array;
  name: string;
}

const MainPanel = ({ stats, info, name = "pokemon" }: MainPanelProps) => {
  const arrFavs = useSelector(selectaddFavs);
  const dispatch = useDispatch();

  const handleAddFav = () => {
    dispatch(setAddFavs(name));
  };
  const statsFilterd = stats?.slice(0, 4);
  return (
    <div className={styles.panel}>
      <div className={styles.panelContainer}>
        <div>
          <div className={styles.headName}>
            <Title className={styles.panelTitle} text={name} />
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
