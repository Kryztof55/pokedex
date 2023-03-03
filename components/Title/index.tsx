import "./Title.scss";

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
  return <h1 className={`title ${colorClass} ${className}`}>{text}</h1>;
};

export default Title;
