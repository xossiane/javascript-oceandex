import styles from "./styles.module.scss";

export default function Text({
  size = "medium",
  color,
  weight,
  style,
  children,
  className,
  id
}) {
  const classList = [];
  classList.push(styles[`text--${size}`]);
  classList.push(styles[`text--${color}`]);
  classList.push(styles[`text--${weight}`]);
  classList.push(styles[`text--${style}`]);

  return <p id={id} className={`${classList.join(" ")} ${className}`}>{children}</p>;
}
