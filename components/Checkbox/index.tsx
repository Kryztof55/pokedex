import styles from "./Checkbox.module.scss";
import Paragraph from "../Paragraph";
interface CheckboxProps {
  colorVariant: "white" | "dark" | "blue";
  onChange: () => void;
  label: string;
}
const Checkbox = ({
  colorVariant = "dark",
  onChange,
  label = "Label",
}: CheckboxProps) => {
  return (
    <div className={styles.checkbox}>
      <Paragraph
        colorVariant={colorVariant}
        className={styles.generation}
        text={label}
      />
      <label className={styles.switch}>
        <input type="checkbox" onChange={onChange} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default Checkbox;
