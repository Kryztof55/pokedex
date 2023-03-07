import Paragraph from "../Paragraph";
import Caption from "../Caption";
import styles from "./Info.module.scss";

interface InfoProps {
  title: string;
  text: string;
}

const Info = ({ title, value }: InfoProps) => {
  return (
    <div className={styles.info}>
      <Paragraph text={title} />
      <Caption text={value} />
    </div>
  );
};

export default Info;
