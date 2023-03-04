import styles from "./Caption.module.scss";

interface CaptionProps {
  text: string;
  colorVariant: "white" | "dark" | "blue";
}

const Caption = ({ text, colorVariant = "dark" }: CaptionProps) => {
  const colorClass =
    colorVariant === "white"
      ? "text-white"
      : colorVariant === "blue"
      ? "text-blue"
      : "text-dark";
  return <p className={`${styles.caption} ${colorClass}`}>{text}</p>;
};

export default Caption;
