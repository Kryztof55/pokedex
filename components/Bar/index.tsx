import Caption from "../Caption";
import "./Bar.scss";

const Bar = ({ stat, text }) => {
  const fillerStyles = {
    width: `${stat}%`,
    backgroundColor: "green",
  };

  return (
    <div className="bar-container">
      <div className="bar">
        <div className="bar-fill" style={fillerStyles}>
          <Caption colorVariant="white" text={stat} />
        </div>
      </div>
      <Caption text={text} />
    </div>
  );
};

export default Bar;
