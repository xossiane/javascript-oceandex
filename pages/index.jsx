import styles from "../styles/home.module.scss";
import Heading from "@atoms/Heading";
import Button from "@molecules/Button";
import Card from "@molecules/Card";
import Hero from "@organisms/Hero";
import btnCardIndex from "../data/btnCardIndex.json";

export default function MainPage() {
  return (
    <div className={styles[`Home`]}>
      <main className={styles[`Home__container`]}>
        <Heading level="1" color="black" weight="italic" pageTitle={true}>
          Discover the Ocean
        </Heading>

        <Hero></Hero>

        <div className={styles[`Home__content`]}>
          {btnCardIndex.map((element) => (
            <Button
              color={element.color}
              className={styles[`Home__buttons--unit`]}
              href={element.href}
              title={element.title}
              size={element.size}
              fontsize={element.fontsize}
              key={element.title + "Btn"}
            />
          ))}
          <div className={styles[`Home__content`]}>
            {btnCardIndex.map((element) => (
              <Card
                color={element.color}
                href={element.href}
                title={element.title}
                img={element.img}
                description={element.description}
                key={element.title + "Card"}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
