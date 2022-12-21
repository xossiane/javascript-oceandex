import SearchIcon from "@atoms/SearchIcon";
import styles from "./styles.module.scss";

import { useState } from "react";

export default function Input({ placeholder, onChange, search}) {
  //const [search, setSearch] = useState("");

  return (
    <form className={styles.inputContainer}>
      <SearchIcon />
      <input
        className={styles.inputContainer__box}
        type="search"
        aria-label={placeholder}
        placeholder={placeholder}
        value={search}
        onChange={onChange}
      />
    </form>
  );
}
