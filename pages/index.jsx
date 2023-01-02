import styles from "../styles/home.module.scss";

import Heading from "@atoms/Heading";
import Button from "@molecules/Button";
import useContentful from "../hooks/useContentful";
import { useEffect, useState } from "react";
import Hero from "@organisms/Hero";

import btnCardIndex from "../data/btnCardIndex.json";
import Card from "@molecules/Card";

export default function MainPage() {
  const { getAnimals } = useContentful();
  const [model, setModel] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    getAnimals().then((response) => {
      setModel(response);
    });
  }, []);
  console.log(model);
  return (
    <div className={styles[`Home`]}>
      <main className={styles[`Home__container`]}>
        <Heading level="1" color="grey" weight="italic">
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
