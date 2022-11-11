import SearchIcon from '../../atoms/Search/Search'
import styles from "./Input.module.scss";

export default function Input() {
  return (
    <form className={styles.inputContainer}>
      <SearchIcon />
      <input
        className={styles.inputContainer__box}
        type="text"
        aria-label="Search animal, locations, diet..."
        placeholder="Search animal, locations, diet..."
      />
    </form>
  );
}
