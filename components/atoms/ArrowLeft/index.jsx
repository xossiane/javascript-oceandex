import Link from "next/link";
import styles from "./styles.module.scss";

export default function ArrowLeft({ href, white }) {
  const color = white ? '#ffffff' : '#000000';
  return (
    <Link href={`${href}`}>
      <svg
        viewBox="0 0 34 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrow}
      >
        <path
          d="M33 14H4.375"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.25 6.40613L4.375 13.9999L12.25 21.5936"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
