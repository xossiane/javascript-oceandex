import HeroInfo from "@molecules/HeroInfo";
import { useEffect, useState } from "react";
import heroData from "../../../data/heroData.json";
import styles from "./styles.module.scss";

export default function Hero() {
  const data = heroData;
  const totalItem = data.length;
  const [currentItem, setCurrentItem] = useState(0);
  const [mouse, setMouse] = useState(false);

  const timer = setTimeout(() => {
    if (currentItem === totalItem - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem(currentItem + 1);
    }
  }, 3000);

  useEffect(() => {
    timer;
  }, [currentItem]);

  return (
    <section
      className={styles[`hero`]}
      // onFocus={handleFocus()}
      // onMouseLeave={() =>
      //   setTimeout(() => {
      //     if (totalItem - 1 === currentItem) {
      //       setCurrentItem(0);
      //     } else {
      //       setCurrentItem(currentItem + 1);
      //     }
      //   }, 1000)
      // }
      onMouseEnter={() => {
        clearInterval(timer);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          if (currentItem === totalItem - 1) {
            setCurrentItem(0);
          } else {
            setCurrentItem(currentItem + 1);
          }
        }, 1000);
      }}
      role="hero"
      aria-label="illustrative images and informations"
    >
      <HeroInfo data={data} currentItem={currentItem} />
      <div className={styles[`hero__container`]}>
        {data.map((item) => {
          return (
            <span
              key={item.id}
              className={
                currentItem === item.id
                  ? `${styles["hero__dots"]} ${styles["hero__dots--active"]}`
                  : `${styles["hero__dots"]}`
              }
              tabIndex={0}
            >
              {" "}
            </span>
          );
        })}
      </div>
    </section>
  );
}
