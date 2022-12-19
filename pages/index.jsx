import styles from "../styles/home.module.scss";

import { useEffect, useState } from "react";

import useContentful from "../hooks/useContentful";
import Heading from "@atoms/Heading";

import Card from "@molecules/Card";
import Btn from "@molecules/Button";
import btnCardIndex from "../data/btnCardIndex.json";

export default function MainPage() {
  const { getAnimals } = useContentful();
  const [model, setModel] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    getAnimals().then((response) => {
      setModel(response);
    });
  }, []);
  //console.log(model);
  return (
    <div className={styles[`Home`]}>
      <main className={styles[`Home__container`]}>
        <Heading level="1" size="Xlarge" color="grey" weight="italic">
          Discover the Ocean
        </Heading>

        <section className={styles[`Home__content`]}>
          <section className={styles[`Home__content`]}>
            {btnCardIndex.map((element) => (
              <>
                <Btn
                  color={element.color}
                  className={styles[`Home__buttons--unit`]}
                  href={element.href}
                  title={element.title}
                  size={element.size}
                  fontsize={element.fontsize}
                />
                <Card
                  color={element.color}
                  href={element.href}
                  title={element.title}
                  img={element.img}
                  description={element.description}
                />
              </>
            ))}
          </section>
        </section>
      </main>
    </div>
  );
}
