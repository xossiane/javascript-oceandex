import styles from "./Oceandex.module.scss";

import { useEffect, useState } from "react";

import useContentful from "../../hooks/useContentful";

import Heading from "@atoms/Heading/Heading";
import Arrow from "@atoms/Arrow/Arrow";
import Input from "@molecules/Input/Input";
import Text from "@atoms/Text/Text";
import AnimalsCard from "@molecules/AnimalsCard/AnimalsCard";

const index = () => {
  const { getAnimals } = useContentful();
  const [animal, setAnimal] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    getAnimals().then((response) => {
      setLoading(true);
      setAnimal(response);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles[`Oceandex__Container`]}>
      <header className={styles[`Oceandex__Header`]}>
        <Arrow href="/home" white={false}></Arrow>
        <Heading
          level="1"
          className={styles[`Oceandex__Content--text`]}
          size="Xlarge"
          color="grey"
          style="italic"
        >
          {" "}
          OceanDex{" "}
        </Heading>
      </header>
      <div className={styles[`Oceandex__Search`]}>
        <Input />
      </div>
      <section className={styles[`Oceandex__Cards`]}>
        {loading && <p>loading</p>}
        {!loading &&
          animal.map((item) => (
            <AnimalsCard
              name={item.animal.name}
              order={item.animal.classifications.order}
              phylum={item.animal.classifications.phylum}
              src={item.animal.images.file.url}
            />
          ))}
      </section>
    </div>
  );
};

export default index;
