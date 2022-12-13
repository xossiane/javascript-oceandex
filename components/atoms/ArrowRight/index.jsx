import Link from "next/link";
import styles from "./styles.module.scss";

export default function ArrowRight({ href, white }) {
  const color = white ? "#ffffff" : "#000000";
  return (
    <Link href={`${href}`}>
      <svg
        viewBox="0 0 34 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrow}
      >
        <path
          d="M1 14L29.625 14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.75 21.5939L29.625 14.0001L21.75 6.40637"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
