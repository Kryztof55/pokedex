import Caption from "../Caption";
import styles from "./Bar.module.scss";

const Bar = ({ stat, text }) => {
  const fillerStyles = {
    width: `${stat}%`,
  };

  return (
    <div className={styles.barContainer}>
      <div className={styles.bar}>
        <div className={styles.barFill} style={fillerStyles}>
          <Caption colorVariant="white" text={stat} />
        </div>
      </div>
      <Caption text={text} />
    </div>
  );
};

export default Bar;
