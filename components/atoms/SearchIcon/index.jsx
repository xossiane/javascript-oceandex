import styles from "./styles.module.scss";
export default function SearchIcon() {
  return (
      <svg
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.searchIcon}
      >
        <path
          d="M13.5938 23.4375C19.0304 23.4375 23.4376 19.0303 23.4376 13.5938C23.4376 8.1572 19.0304 3.75 13.5938 3.75C8.15726 3.75 3.75006 8.1572 3.75006 13.5938C3.75006 19.0303 8.15726 23.4375 13.5938 23.4375Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5548 20.5547L26.2501 26.25"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
  );
}
