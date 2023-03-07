import styles from "./Caption.module.scss";

interface CaptionProps {
  text: string;
  colorVariant: "white" | "dark" | "blue";
  className?: string;
}

const Caption = ({ text, colorVariant = "dark", className }: CaptionProps) => {
  const colorClass =
    colorVariant === "white"
      ? "text-white"
      : colorVariant === "blue"
      ? "text-blue"
      : "text-dark";
  return (
    <p className={`${styles.caption} ${colorClass} ${className}`}>{text}</p>
  );
};

export default Caption;
