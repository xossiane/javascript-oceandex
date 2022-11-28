import SearchIcon from "../../atoms/Search/Search";
import styles from "./Input.module.scss";
import AnimalsCard from "@molecules/AnimalsCard/AnimalsCard";

import { useState } from "react";

export default function Input() {
  const [search, setSearch] = useState("");
  const [animal, setAnimal] = useState([]);

  const handleSubmit = async (e) => {
    if (search.trim().length === 0) {
      return;
    }
    if (e.key === "Enter") {
      const data = await animal(search.toLocaleLowerCase());
      setAnimal(data);
    }
  };

  return (
    <form className={styles.inputContainer}>
      <SearchIcon size="48" />
      <input
        className={styles.inputContainer__box}
        type="search"
        aria-label="Search animal, locations, diet..."
        placeholder="Search animal, locations, diet..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={handleSubmit}
      />
    </form>
  );
}
