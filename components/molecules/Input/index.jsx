import SearchIcon from "@atoms/SearchIcon";
import styles from "./styles.module.scss";

import { useState } from "react";

export default function Input() {
  const [search, setSearch] = useState("");

  return (
    <form className={styles.inputContainer}>
      <SearchIcon />
      <input
        className={styles.inputContainer__box}
        type="search"
        aria-label="Search animal, locations, diet..."
        placeholder="Search animal, locations, diet..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
