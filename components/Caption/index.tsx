import "./Caption.scss";

interface CaptionProps {
  text: string;
  colorVariant: "white" | "dark" | "blue";
  weight: "light" | "regular" | "bold";
}

const Caption = ({
  text,
  colorVariant = "dark",
  weight = "regular",
}: CaptionProps) => {
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
  return <p className={`caption ${colorClass} ${weightClass}`}>{text}</p>;
};

export default Caption;
