import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import useContentful from "../../hooks/useContentful";
import Heading from "@atoms/Heading";
import Input from "@molecules/Input";
import FilterCArd from "@molecules/FilterCard";
import useFecthInput from "../../store/useFetchInput";

export default function OceanDexPage(){
  const { getAnimals } = useContentful();

  const setData = useFecthInput((state) => state.setSearch);

  const [loading, setLoading] = useState();

  const [animals, setAnimals] = useState([]);
  const [curiosities, setCuriosities] = useState();
  // const [authors, setAuthors] = useState();

  useEffect(() => {
    async function fetchAnimals() {
      setLoading(true);

      const response = await getAnimals();
      setAnimals(response);
      setLoading(false);
    }
    fetchAnimals();
  }, []);

  console.log(animals);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length === 0 || value.length > 2) {
      setData(value);
    }
  };

  //console.log(animal);
  function showAnimal() {
    const filteredAnimals = animals.filter(
      (item) =>
        item.name
          .toLowerCase()
          .includes(
            search.toLocaleLowerCase()
          ) /* || item.scientificName.toLowerCase().includes(search) */ ||
        item.classification.order
          .toLowerCase()
          .includes(search.toLocaleLowerCase()) ||
        item.classification.phylum
          .toLowerCase()
          .includes(search.toLocaleLowerCase())
    );

    if (filteredAnimals.length === 0 && search !== "") {
      return <Text weight="bold">No results Found</Text>;
    } else {
      return filteredAnimals.map((item) => {
        return (
          <AnimalsCard
            href="/About"
            key={item.id}
            name={item.name}
            order={item.classification.order}
            phylum={item.classification.phylum}
            Class={item.classification.class}
            kingdom={item.classification.kingdom}
            src={item.image}
            loading="lazy"
          />
        );
      });
    }
  }

  return (
    <>
      <div className={styles[`Oceandex__Container`]}>
        <header className={styles[`Oceandex__Header`]}>
          <Heading
            level="1"
            className={styles[`Oceandex__Content--text`]}
            color="grey"
            style="italic"
          >
            {" "}
            What marine creature are you looking for?{" "}
          </Heading>
        </header>

        <div className={styles[`Oceandex__Search`]}>
          <Input
            /* value={search} */
            placeholder={"Search for animals, filos..."}
            onChange={(e) => handleSubmit(e)}
            aria-label={""}
          />
        </div>
        <section className={styles[`Oceandex__Cards`]}>
          {loading && <p>loading</p>}
          {!loading && <FilterCArd animals={animals} />}
        </section>
      </div>
    </>
  );
};


