import React from "react";
import styles from "./InputSearch.module.scss";

interface InputSearchProps {
  placeholder: string;
  onChange: any;
  className: string;
}

const InputSearch = ({
  placeholder,
  onChange,
  className,
}: InputSearchProps) => {
  return (
    <div className={`${className} ${styles.inputContainer}`}>
      <img
        className={styles.imgSearch}
        src="https://img.icons8.com/search"
        alt=""
      />
      <input
        className={styles.inputSearch}
        type="text"
        placeholder={placeholder}
        name="gsearch"
        onChange={onChange}
      />
    </div>
  );
};
export default InputSearch;
