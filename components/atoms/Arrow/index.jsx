import Link from "next/link";
import styles from "./styles.module.scss";

export default function Arrow({ href, white, size }) {
  const color = white ? "#ffffff" : "#000000";
  return (
    <Link href={`${href}`}>
      <svg
        color={color}
        viewBox="0 0 22 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrow}
      >
        <path
          d="M21.0476 5.8724H3.25135L7.4978 1.62567C7.86982 1.25388 7.86982 0.650754 7.4978 0.279012C7.12578 -0.0930041 6.52266 -0.0930041 6.15119 0.279012L0.279012 6.1513C-0.0930041 6.5231 -0.0930041 7.12628 0.279012 7.49797L6.15119 13.3705C6.33715 13.5566 6.58085 13.6495 6.8245 13.6495C7.06814 13.6495 7.31185 13.5566 7.4978 13.3705C7.86982 12.9987 7.86982 12.3956 7.4978 12.0239L3.25135 7.77698H21.0476C21.5735 7.77698 22 7.35057 22 6.82466C22 6.29876 21.5736 5.8724 21.0476 5.8724Z"
          fill={color}
        />
      </svg>
    </Link>
  );
}
