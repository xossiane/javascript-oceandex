import { useRouter } from "next/router";
import useContentful from "../../../hooks/useContentful";
import Arrow from "@atoms/Arrow";
import Heading from "@atoms/Heading";
import AnimalsTag from "@molecules/AnimalsTag";
import TabsComponent from "@organisms/Tabs";
import styles from "./styles.module.scss";
import Like from "@atoms/Like";
import { useEffect, useState } from "react";
import useFetchData from "../../../store/useFetchData";

export default function AboutPage() {
  const router = useRouter();
  const { getAnimals } = useContentful();
  const setData = useFetchData((state) => state.setData);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    async function fetchAnimals() {
      const response = await getAnimals();
      const findAnimal = await response.find(
        (element) => element.name === router.query.about
      );
      setData(findAnimal);
    }
    const hadLiked = () => {
      let array = localStorage.getItem("oceandex");
      if (array !== null) {
        array = JSON.parse(array);
        let had = array.findIndex((animal) => {
          return animal.name === router.query.about;
        });
        if (had !== -1) {
          setLiked(true);
        }
      }
    };
    hadLiked();
    fetchAnimals();
  }, [router.query.about]);

  const likeAnimal = (item) => {
    let array = localStorage.getItem("oceandex");
    if (liked === false) {
      if (array === null) {
        array = [];
        array.push(item);
        let animal = JSON.stringify(array);
        localStorage.setItem("oceandex", animal);
      } else {
        array = JSON.parse(array);
        let findItem = array.findIndex((itemArray) => itemArray.id === item.id);
        if (findItem === -1) {
          array.push(item);
          let animal = JSON.stringify(array);
          localStorage.setItem("oceandex", animal);
        }
      }
    } else {
      array = JSON.parse(array);
      let index = array.findIndex((element) => {
        return element.name === router.query.about;
      });
      array.splice(index, 1);
      array = JSON.stringify(array);
      localStorage.setItem("oceandex", array);
    }
    setLiked(!liked);
  };

  const data = useFetchData((state) => state.data);

  if (data) {
    return (
      <div className={styles[`aboutPage`]}>
        <div className={styles[`aboutPage__content`]}>
          <div className={styles[`aboutPage__container`]}>
            <header className={styles[`aboutPage__header`]}>
              <div className={styles[`aboutPage__header--arrow`]}>
                {" "}
                <Arrow direction="left" href="/oceandex" white />
              </div>
              <Like
                onClick={() => {
                  likeAnimal(data);
                }}
                white={true}
                liked={liked}
                className={styles[`aboutPage__header--like`]}
              />
            </header>
            <section className={styles[`aboutPage__header--info`]}>
              <Heading
                level="1"
                className={styles[`aboutPage__header--text`]}
                color="white"
              >
                {data.name}
              </Heading>
              <section className={styles[`aboutPage__tag`]}>
                <AnimalsTag
                  mw="mw"
                  label={data.classification.kingdom}
                  text="text"
                />
                <AnimalsTag
                  mw="mw"
                  label={data.classification.phylum}
                  text="text"
                />
              </section>
              <section className={styles[`aboutPage__tag--bottom`]}>
                <AnimalsTag
                  mw="mw"
                  label={data.classification.class}
                  text="text"
                />
                <AnimalsTag
                  mw="mw"
                  label={data.classification.order}
                  text="text"
                />
              </section>
              <img
                src={data.image}
                className={styles[`aboutPage__header--icon`]}
                alt={data.name}
              ></img>
            </section>
          </div>
          <div className={styles[`aboutPage__container--bottom`]}>
            <TabsComponent />
          </div>
        </div>
      </div>
    );
  }
}
