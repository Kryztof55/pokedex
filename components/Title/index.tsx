import styles from "./Title.module.scss";

interface TitleProps {
  text: string;
  colorVariant: "white" | "blue";
  className?: string;
}

const Title = ({
  text,
  colorVariant = "blue",
  weight = "regular",
  className,
}: TitleProps) => {
  const colorClass = colorVariant === "white" ? "text-white" : "text-blue";
  return (
    <h1 className={`${styles.title} ${colorClass} ${className}`}>{text}</h1>
  );
};

export default Title;
