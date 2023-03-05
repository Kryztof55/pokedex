import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartOutlined } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFilled } from "@fortawesome/free-solid-svg-icons";
import styles from "./AddFav.module.scss";

interface Props {
  onAddToFavorites: () => void;
}

const AddFavoritos = ({ onAddToFavs }: Props) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
    onAddToFavs();
  };

  const heartIcon = isFilled ? faHeartFilled : faHeartOutlined;

  return (
    <div className={styles.containerFav} onClick={handleClick}>
      <FontAwesomeIcon
        className={styles.addFav}
        icon={heartIcon}
        color={isFilled ? "red" : "grey"}
      />
    </div>
  );
};

export default AddFavoritos;
