import Arrow from "@atoms/Arrow";
import Heading from "@atoms/Heading";
import Background from "@atoms/Background";
import styles from "./styles.module.scss";

export default function Container({
  href,
  title,
  backgroundColorHeader,
  children,
}) {
  return (
    <>
      <div className={styles[`Container`]}>
        <header
          className={styles[`Container--header`]}
          style={{ backgroundColor: backgroundColorHeader }}
        >
          <div className={styles[`Container--rectangle`]}>
            <img src="assets/images/extras/Rectangle.png" alt="" />
          </div>
          <div className={styles[`Container--arrow`]}>
            <Arrow href={href} white={true}></Arrow>
          </div>
          <div className={styles[`Container--title`]}>
            <Heading level="1" size="Xlarge" color="white">
              {title}
            </Heading>
          </div>
        </header>
        <main className={styles[`Container--main`]}></main>
      </div>
      <Background />
    </>
  );
}
