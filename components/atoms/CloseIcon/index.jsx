import styles from "./styles.module.scss";

export default function CLoseIcon({white}) {
  const color = white ? '#ffffff' : '#000000';
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.closeIcon}
    >
      <path
        d="M25 7L7 25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 25L7 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
