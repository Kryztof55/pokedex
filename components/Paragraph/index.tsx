import styles from "./Paragraph.module.scss";

interface ParagraphProps {
  text: string;
  colorVariant: "white" | "dark" | "blue";
  weight: "light" | "regular" | "bold";
  className?: string;
}

const Paragraph = ({
  text,
  colorVariant = "dark",
  weight = "regular",
  className,
}: ParagraphProps) => {
  const colorClass =
    colorVariant === "white"
      ? "text-white"
      : colorVariant === "blue"
      ? "text-blue"
      : "text-dark";
  const weightClass =
    weight === "light"
      ? "font-light"
      : weight === "regular"
      ? "font-normal"
      : "font-bold";
  return (
    <p
      className={`${styles.paragraph} ${colorClass} ${weightClass} ${className}`}
    >
      {text}
    </p>
  );
};

export default Paragraph;
