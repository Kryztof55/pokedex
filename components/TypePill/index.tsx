import Caption from "../Caption";
import styles from "./TypePill.module.scss";

interface TypePillProps {
  type: string;
}

const TypePill = ({ type = "normal" }: TypePillProps) => {
  const className = styles[type];

  return (
    <div className={`${styles.typePill} ${className}`}>
      <Caption colorVariant="white" text={type} />
    </div>
  );
};

export default TypePill;
