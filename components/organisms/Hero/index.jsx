import HeroInfo from "@molecules/HeroInfo";
import { useEffect, useState } from "react";
import heroData from "../../../heroData.json";
import styles from "./Hero.module.scss";


export default function Hero() {
  const data = heroData;
  const totalItem = data.length;
  const [currentItem, setCurrentItem] = useState(0);
  const [time, setTime] = useState();
  const handleFocus = (e) => {clearInterval(time)}


   useEffect(() => {
    
    const time = setTimeout(() => {
      if (totalItem - 1 === currentItem) {
        setCurrentItem(0);
      } else {
        setCurrentItem(currentItem + 1);
      }
    }, 1000);
    () => {
      time.clearTimeOut();
    };
    setTime(
      time
      )
  }, [currentItem]);
  


console.log(time)

  return (
    <section className={styles[`Hero`]} 
    onFocus={handleFocus()} 
    onMouseLeave={() => setTimeout(() => {
      if (totalItem - 1 === currentItem) {
        setCurrentItem(0);
      } else {
        setCurrentItem(currentItem + 1);
      }
    }, 1000)}
      role="hero"
      aria-label="illustrative images and informations"
      tabIndex={0}>
      <HeroInfo data={data} currentItem={currentItem}/>
      <div className={styles[`Hero__container`]} >
        {data.map((item) => {
          return (
            <span
              key={item.id}
              className={
                currentItem === item.id
                  ? `${styles['Hero__dots']} ${styles['Hero__dots--active']}` :  `${styles['Hero__dots']}`
              }
              
            >
            
              {" "}
            </span>
          );
        })}
      </div>
    </section>
  );
}
