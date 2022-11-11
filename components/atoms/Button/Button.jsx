import styles from "./Button.module.scss";

export default function Button({ size, color, fontsize, className, children}) {
    const classList = [];
    classList.push(styles[`button--${size}`]);
    classList.push(styles[`button--${color}`]);
    classList.push(styles[`button--${fontsize}`]);
    classList.push(styles[`button`]);
  
    return <button className={`${classList.join(" ")} ${className}`}>{children}</button>;
  }
  
