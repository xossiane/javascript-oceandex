import Link from "next/link";
import styles from "./styles.module.scss";

export default function Arrow({ href = "/", white, direction }) {
  const color = white ? "#ffffff" : "#000000";
  const classList = [styles.arrow];
  classList.push(styles[`arrow--${direction}`]);

  return (
    <Link href={`${href}`}>
      <svg
        viewBox="0 0 27 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classList.join(" ")}
      >
        <path
          d="M13.5 33L13.5 4.375"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.0939 12.25L13.5001 4.375L5.90637 12.25"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
