import Heading from "@atoms/Heading";
import FilterCArd from "@molecules/FilterCard";
import Input from "@molecules/Input";
import { useEffect, useState } from "react";
import useContentful from "../../hooks/useContentful";
import useFecthInput from "../../store/useFetchInput";
import styles from "./styles.module.scss";

export default function OceanDexPage() {
  const { getAnimals } = useContentful();

  const setData = useFecthInput((state) => state.setSearch);
  const [loading, setLoading] = useState();
  const [animals, setAnimals] = useState([]);

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
      return <Text weight="bold">No results found</Text>;
    } else {
      return filteredAnimals.map((item) => {
        return (
          <AnimalsCard
            href="/"
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
    <section className={styles[`oceandex`]}>
        <Heading
          level="1"
          color="black"
          style="italic"
          pageTitle={true}
        >
          {" "}
          What marine creature are you looking for?{" "}
        </Heading>

      <div className={styles[`oceandex__search`]}>
        <Input
          /* value={search} */
          placeholder={"Search for animals, filos..."}
          onChange={(e) => handleSubmit(e)}
          aria-label={""}
        />
      </div>
      <section className={styles[`oceandex__cards`]}>
        {loading && <p>loading</p>}
        {!loading && <FilterCArd animals={animals} />}
      </section>
    </section>
  );
}
