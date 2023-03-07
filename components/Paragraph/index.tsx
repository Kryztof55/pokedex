import styles from "./Paragraph.module.scss";

interface ParagraphProps {
  text: string;
  colorVariant: "white" | "dark" | "blue";
  className?: string;
}

const Paragraph = ({
  text,
  colorVariant = "dark",
  className,
}: ParagraphProps) => {
  const colorClass =
    colorVariant === "white"
      ? "text-white"
      : colorVariant === "blue"
      ? "text-blue"
      : "text-dark";
  return (
    <p className={`${styles.paragraph} ${colorClass} ${className}`}>{text}</p>
  );
};

export default Paragraph;
