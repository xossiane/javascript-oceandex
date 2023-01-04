import styles from "./styles.module.scss";
import Link from "next/link";

export default function Buttons({
  href,
  size,
  color,
  fontsize,
  className,
  title,
  handleClick,
}) {
  const classList = [];
  classList.push(styles[`button--${size}`]);
  classList.push(styles[`button--${color}`]);
  classList.push(styles[`button--${fontsize}`]);
  classList.push(styles[`button`]);

  return (
    <Link href={`${href}`}>
      <a
        className={`${classList.join(" ")} ${className}`}
        onClick={handleClick}
      >
        {title}
      </a>
    </Link>
  );
}
