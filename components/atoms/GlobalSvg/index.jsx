import Link from "next/link";
import styles from "./styles.module.scss";
export default function GlobalSvg({
  iconPath,
  external = false,
  link = "",
  color,
  children,
}) {
  const classList = [];
  classList.push(styles[`svgIcon--${color}`]);
  classList.push(styles[`svgIcon--${color}`]);

  if (!external) {
    return (
      <Link href="/">
        <img src={iconPath} className={classList.join(" ")} />
      </Link>
    );
  }
  return <img src={iconPath} className={classList.join(" ")} />;
}
