import Paragraph from "../Paragraph";
import Caption from "../Caption";
import styles from "./Info.module.scss";

const Info = ({ title, value }) => {
  return (
    <div className={styles.info}>
      <Paragraph text="Altura" />
      <Caption text="1,0" />
    </div>
  );
};

export default Info;
