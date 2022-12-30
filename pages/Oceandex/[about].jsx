import { useRouter } from "next/router";
import useContentful from "../../hooks/useContentful";
import Arrow from "@atoms/Arrow";
import Heading from "@atoms/Heading";
import AnimalsTag from "@molecules/AnimalsTag";
import TabsDemo from "@organisms/Tabs";
import Background from "@atoms/Background";
import styles from "./aboutstyles.module.scss";
import Like from "@atoms/Like";
import { useEffect, useState } from "react";
import useFetchData from "../../store/useFetchData";

export default function AboutPage() {
  const router = useRouter();
  console.log(router.query);

  const { getAnimals } = useContentful();
  //const [Animal, setAnimal] = useState([]);
  const setData = useFetchData((state) => state.setData);

  useEffect(() => {
    async function fetchAnimals() {
      const response = await getAnimals();
      const findAnimal = await response.find(
        (element) => element.name === router.query.about
      );
      setData(findAnimal);
    }
    fetchAnimals();
  }, [router.query.about]);
  const data = useFetchData((state) => state.data);
  if (data) {
    return (
      <div className={styles[`AboutPage`]}>
        <div className={styles[`AboutPage__title`]}>
          {/* <Heading
          level="1"
          className={styles[`AboutPage__Header--text`]}
          color="black"
        >
          {" "}
          Octopus{" "}
        </Heading> */}
        </div>
        <div className={styles[`AboutPage__Content`]}>
          <div className={styles[`AboutPage__Container`]}>
            <header className={styles[`AboutPage__Header`]}>
              <div className={styles[`AboutPage__Header--arrow`]}>
                {" "}
                <Arrow direction="left" href="/Oceandex" white />
              </div>
              <Like
                white={true}
                className={styles[`AboutPage__Header--like`]}
              />
            </header>
            <section className={styles[`AboutPage__Header--info`]}>
              <Heading
                level="1"
                className={styles[`AboutPage__Header--text`]}
                color="white"
              >
                {data.name}
              </Heading>
              <section className={styles[`AboutPage__tag`]}>
                <AnimalsTag label={data.classification.kingdom} text="text"></AnimalsTag>{" "}
                <AnimalsTag label={data.classification.phylum} text="text"></AnimalsTag>
              </section>
              <section className={styles[`AboutPage__tag--bottom`]}>
                <AnimalsTag label={data.classification.class} text="text"></AnimalsTag>{" "}
                <AnimalsTag label={data.classification.order} text="text"></AnimalsTag>
              </section>
              <img
                src={data.image}
                className={styles[`AboutPage__Header--icon`]}
                alt="animal icon"
              ></img>
            </section>
          </div>
          <div className={styles[`AboutPage__Container--bottom`]}>
            <TabsDemo></TabsDemo>
          </div>
        </div>
      </div>
    );
  }
}
