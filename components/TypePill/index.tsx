import Caption from "../Caption";
import "./TypePill.scss";

const TypePill = ({ type }) => {
  return (
    <div className={`typePill ${type}`}>
      <Caption colorVariant="white" text={type} />
    </div>
  );
};

export default TypePill;
