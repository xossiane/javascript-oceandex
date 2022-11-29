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
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    getAnimals().then((response) => {
      setLoading(true);
      setAnimal(response);
      setLoading(false);
    });
  }, []);

  function showAnimal() {
    return animal.map((item) => (
      <AnimalsCard
        href="/"
        key={item.id}
        name={item.animal.name}
        order={item.animal.classifications.order}
        phylum={item.animal.classifications.phylum}
        src={item.animal.images.file.url}
      />
    ));
  }

  function showAnimalSearch() {
    return animal.filter(
      (name) => search.includes(animal.name)
      // <AnimalsCard
      //   href="/"
      //   key={item.id}
      //   name={item.animal.name}
      //   order={item.animal.classifications.order}
      //   phylum={item.animal.classifications.phylum}
      //   src={item.animal.images.file.url}
      // />
    );
  }

  // let showAnimalSearch = animal.filter((item) => item.animal.name === search);

  console.log(search.length);

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
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label={""}
        />
      </div>
      <section className={styles[`Oceandex__Cards`]}>
        {loading && <p>loading</p>}
        {!loading && showAnimal()}
      </section>
      <section className={styles[`Oceandex__Cards`]}>
        {loading && <p>loading</p>}
        {search.length > 2 && !loading && showAnimalSearch()}
      </section>
    </div>
  );
};

export default index;
