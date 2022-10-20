import styles from "./Text.module.scss";



export default function Text({ size, color, weight, children, className}) {
  const classList = [];
  classList.push(styles[`text--${size}`]);
  classList.push(styles[`text--${color}`]);
  classList.push(styles[`text--${weight}`]);

  return <p className={`${classList.join(" ")} ${className}`}>{children}</p>;
}
