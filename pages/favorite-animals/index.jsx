import styles from "./styles.module.scss";

import { useEffect, useState } from "react";


import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import AnimalsCard from "@molecules/AnimalsCard";
import Input from "@molecules/Input";

export default function FavoriteAnimalsPage() {
  // const { getAnimals, getAnimal, getAuthors, getCuriosities } = useContentful();
  const [animal, setAnimal] = useState([]);
  const [searchAnimal, setSearchAnimal] = useState([]);
  const [loading, setLoading] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (!search) {
        let array = []
        let arrayKey = []
        
        setLoading(true);
       
        let size = localStorage.length

        for (let index = 0; index <= size; index++) {

          let animal = localStorage.getItem(localStorage.key(index))
          console.log(animal)
          try{
            animal = JSON.parse(animal)
          }catch(e){
          }
          let id = localStorage.key(index)
          arrayKey.push(id)
          let key = Number.parseInt(id)
          
          let isNumber = Number.isInteger(key)
          if(isNumber && (animal !== null) && (id !== null) && (typeof(animal) === 'object')){
            array.push(animal)
          }
        }
      
      if(arrayKey.includes('oceandex') === false){
        localStorage.clear()
        localStorage.setItem('oceandex', true)
      }
      
      setAnimal(array);
      setLoading(false);
      }  

    if(search) {
      setLoading(true);
      let length = search.length;
      let newArray = animal.filter((e) => {
        console.log(search);
        console.log(e.name.substring(0, [length]));
        return (
          search.substring(0, [length]).toLowerCase() ===
          e.name.substring(0, [length]).toLowerCase()
        );
      });
      setSearchAnimal(newArray);
      setLoading(false);
    }
  }, [search])

  function showAnimal() {
    {
      return !search
        ? animal.map((item) => {
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
          })
        : searchAnimal.map((item) => {
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
    <>
      <div className={styles[`FavoriteAnimals__Container`]}>
        <header className={styles[`FavoriteAnimals__Header`]}>
          <Heading
            className={styles[`FavoriteAnimals__Content`]}
            style="italic"
          >
            <Text
              className={styles[`FavoriteAnimals__Text`]}
              size="XLarge"
            >
              Favorite Animals
            </Text>
          </Heading>
        </header>
        <div className={styles[`FavoriteAnimals__Search`]}>
          <Input
            FavoriteAnimals
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            page="FavoriteAnimals"
            placeholder="Search for your favorite animals"
            aria-label="Search for your favorite animals"
          />
        </div>

        <section className={styles[`FavoriteAnimals__Cards`]} tabIndex={"1"}>
          {loading && <p>loading</p>}
          {!loading && showAnimal()}
        </section>
      </div>
    </>
  );
}


