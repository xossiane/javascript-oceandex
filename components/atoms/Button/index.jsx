import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import Heading from "@atoms/Heading";
export default function Button({
  href,
  size,
  color,
  fontsize,
  className,
  children,
  img,
  description,
}) {
  const classList = [];
  classList.push(styles[`button--${size}`]);
  classList.push(styles[`button--${color}`]);
  classList.push(styles[`button--${fontsize}`]);
  classList.push(styles[`button`]);

  const deskTopClass = [];
  deskTopClass.push(styles[`button--${color}`]);
  deskTopClass.push(styles[`button__desktop`]);

  return (
    <>
      <div className={`${deskTopClass.join(" ")}`}>
        <Heading level="1" color="white">
          {children}
        </Heading>
        <Image src={img} width={196} height={181} alt="" />
        <p>{description}</p>
        <div className={styles[`button__linktag`]}>
          <Link href={`${href}`}>
            <div className={styles[`button__desktopLink`]}>Read More...</div>
          </Link>
        </div>
      </div>

      <Link href={`${href}`}>
        <div className={`${classList.join(" ")} ${className}`}>{children}</div>
      </Link>
    </>
  );
}
