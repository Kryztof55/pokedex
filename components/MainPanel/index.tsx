import Title from "../Title";
import InfoPanel from "../InfoPanel";
import Bar from "../Bar";
import "./MainPanel.scss";

const MainPanel = ({ stats, info }) => {
  return (
    <div className="panel">
      <div className="panel-container">
        <div>
          <Title className="panel-title" text="Pokemon" />
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
