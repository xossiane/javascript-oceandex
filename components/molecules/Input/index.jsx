import styles from "./styles.module.scss";
import GlobalSvg from "@atoms/GlobalSvg";
import { useState } from "react";

export default function Input({ placeholder, onChange }) {
  const [search, setSearch] = useState("");

  return (
    <form className={styles[`form`]}>
      <GlobalSvg iconPath="/assets/images/svg/SearchIcon.svg" />
      <input
        className={styles[`form__input`]}
        type="search"
        aria-label={placeholder}
        placeholder={placeholder}
        onChange={onChange}
      />
    </form>
  );
}
