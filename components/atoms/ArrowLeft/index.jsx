import Link from "next/link";
import styles from "./styles.module.scss";

export default function ArrowLeft({ href, white, className }) {
  const color = white ? "#ffffff" : "#000000";
  const classList = [];
  return (
    <Link href={`${href}`}>
      <svg
        viewBox="0 0 34 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${classList.join(" ")} ${className}`}
      >
        <path
          d="M33 14H4.375"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.25 6.40613L4.375 13.9999L12.25 21.5936"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Link>
  );
}
