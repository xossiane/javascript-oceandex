import styles from "./styles.module.scss";

import { useEffect, useState } from "react";

import useContentful from "../../hooks/useContentful";

import Heading from "@atoms/Heading";
import Arrow from "@atoms/ArrowLeft";
import Input from "@molecules/Input";
import Text from "@atoms/Text";
import AnimalsCard from "@molecules/AnimalsCard";

const index = () => {
  const { getAnimals, getAnimal } = useContentful();
  const [animal, setAnimal] = useState([]);
  const [loading, setLoading] = useState();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!search) {
      getAnimals().then((response) => {
        setLoading(true);
        setAnimal(response);
        setLoading(false);
      });
    }
    if (search) {
      getAnimal(search).then((response) => {
        setLoading(true);
        setAnimal(response);
        setLoading(false);
      });
    }
  }, [search]);

  function showAnimal() {
    return animal?.map(
      (item) =>
        item && (
          <AnimalsCard
            href="/"
            key={item.id}
            name={item.name}
            order={item.classifications.order}
            phylum={item.classifications.phylum}
            src={item.images.file.url}
          />
        )
    );
  }

  return (
    <div className={styles[`Oceandex__Container`]}>
      <span className={styles[`Oceandex__Arrow`]}>
        <Arrow href="/" white={false}></Arrow>
      </span>
      <header className={styles[`Oceandex__Header`]}>
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
        <input
          value={search}
          onChange={(e) => handleSubmit(e)}
          aria-label={""}
        />
      </div>
      <section className={styles[`Oceandex__Cards`]}>
        {loading && <p>loading</p>}
        {!loading && showAnimal()}
      </section>
    </div>
  );
};

export default index;
