import Heading from "@atoms/Heading";
import AnimalsCard from "@molecules/AnimalsCard";
import Input from "@molecules/Input";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function FavoriteAnimalsPage() {
  // const { getAnimals, getAnimal, getAuthors, getCuriosities } = useContentful();
  const [animal, setAnimal] = useState([]);
  const [searchAnimal, setSearchAnimal] = useState([]);
  const [loading, setLoading] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (!search) {
      let array = localStorage.getItem("oceandex");
      array = JSON.parse(array);
      setAnimal(array);
      setLoading(false);
    }

    if (search) {
      setLoading(true);
      let length = search.length;
      let newArray;
      if(animal !== null){
      newArray = animal.filter((e) => {
        const searchLower = search.substring(0, [length]).toLowerCase();
        return (
          searchLower === e.name.substring(0, [length]).toLowerCase() ||
          searchLower ===
            e.classification.class.substring(0, [length]).toLowerCase() ||
          searchLower ===
            e.classification.order.substring(0, [length]).toLowerCase() ||
          searchLower ===
            e.classification.kingdom.substring(0, [length]).toLowerCase() ||
          searchLower ===
            e.classification.phylum.substring(0, [length]).toLowerCase()
        );
      });
    }
      setSearchAnimal(newArray);
      setLoading(false);
    }
  }, [search]);;

  function showAnimal() {
    {
      return !search && animal != null
        ? animal.map((item) => {
            return (
              <AnimalsCard
                href={`/oceandex/${item.name}`}
                key={item.id}
                name={item.name}
                order={item.classification.order}
                phylum={item.classification.phylum}
                Class={item.classification.class}
                kingdom={item.classification.kingdom}
                src={item.image}
                alt={item.name}
              />
            );
          })
        : searchAnimal?.map((item) => {
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
                alt={item.name}
              />
            );
          });
    }
  }

  return (
      <section className={styles[`favoriteAnimals`]}>
          <Heading level="1" style="italic" color="black" pageTitle={true}>
            Favorite Animals
          </Heading>
        <article className={styles[`favoriteAnimals__search`]}>
          <Input
            FavoriteAnimals
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            page="FavoriteAnimals"
            placeholder="Search your ♥ animals"
            aria-label="Search for your favorite animals"
          />
        </article>

        <article className={styles[`favoriteAnimals__cards`]} tabIndex={"1"}>
          {loading && <p>loading</p>}
          {!loading && showAnimal()}
        </article>
      </section>
  );
}
