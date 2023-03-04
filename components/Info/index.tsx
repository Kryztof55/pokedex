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
      <Paragraph text="Altura" />
      <Caption text="1,0" />
    </div>
  );
};

export default Info;
