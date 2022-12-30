import styles from "./styles.module.scss";

import { useEffect, useState } from "react";


import Arrow from "@atoms/Arrow";
import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import AnimalsCard from "@molecules/AnimalsCard";
import Input from "@molecules/Input";

const index = () => {
  // const { getAnimals, getAnimal, getAuthors, getCuriosities } = useContentful();
  const [animal, setAnimal] = useState([]);
  const [searchAnimal, setSearchAnimal] = useState([]);
  const [loading, setLoading] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (!search) {
        let array = []
        
        setLoading(true);
        let obj = {
          "id": 7,
          "nickname": "Crab",
          "name": "Atlantic red crab",
          "kingdom": "Animalia",
          "phylum": "Arthropoda",
          "class": "Crustacea",
          "order": "Decapoda",
          "icon": "assets/images/icons/07-crab.png",
          "image": "//images.ctfassets.net/zrxg7ng9qct2/5J7gXBdokCfHrQTggwFZlk/9b5aed522b7acf75d79fa21b906d126f/clownfish.png",
          "tabs": [
            {
              "about": [
                {
                  "scientificName": "Chaceon quinquedens",
                  "description": "Red deep sea crab on the US east coast show distinct sex segregation by depth along the continental slope. Females predominate in depths of 450–700 m, and those in shallow water are predominantly reproductive adults, whereas males predominate at greater depths.",
                  "height": "12.5cm - 17.5cm",
                  "weight": "0,9kg"
                }
              ],
              "breeding": [
                {
                  "method": "Egg - zoea - megalopae - juvenile - adult"
                }
              ],
              "curiosities": [
                {
                  "curiositiesText": "After mating, females carry fertilized eggs on their pleopods for up to 9 months until the larvae are released.",
                  "curiositiesImage": "assets/images/realAnimals/07-crab.jpg"
                }
              ],
              "locationText": "Atlantic red crab or red crab is a crab that lives in the Atlantic Ocean off the East Coast of the United States and Canada, from North Carolina to Nova Scotia.",
              "locationImage": "assets/images/oceans/AtlanticOcean.jpg",
              "diet": [
                {
                  "item": "Squid",
                  "itemImage": "assets/images/diet/smallSquid.png"
                },
                {
                  "item": "Shrimp",
                  "itemImage": "assets/images/diet/shrimp.png"
                }
              ]
            }
          ]
        }
        localStorage.setItem(1,JSON.stringify(obj))
        obj = {
          "id": 11,
          "nickname": "Jellyfish",
          "name": "Jellyfish",
          "kingdom": "Animalia",
          "phylum": "Cnidaria",
          "class": "Scyphozoa",
          "order": "Semaeostomeae",
          "icon": "assets/images/icons/11-jellyfish.png",
          "image":"//images.ctfassets.net/zrxg7ng9qct2/5J7gXBdokCfHrQTggwFZlk/9b5aed522b7acf75d79fa21b906d126f/clownfish.png",
          "tabs": [
            {
              "about": [
                {
                  "scientificName": "Pelagia noctiluca",
                  "description": "The jellyfish are mainly free-swimming marine animals with umbrella-shaped bells and trailing tentacles, although a few are anchored to the seabed by stalks rather than being mobile. The bell can pulsate to provide propulsion for highly efficient locomotion. ",
                  "height": "1cm - 40cm",
                  "weight": "20g - 400g"
                }
              ],
              "breeding": [
                {
                  "method": "Egg - planula - attached planula - polyp - budding polyp - juvenile - adult"
                }
              ],
              "curiosities": [
                {
                  "curiositiesText": "Jellyfish are the oldest multicellular animals on the planet.Scientists have discovered jellyfish fossil snapshots in rocks believed to be more than 500 million years old. That makes them even older than dinosaurs!",
                  "curiositiesImage": "assets/images/realAnimals/11-jellyfish.jpg"
                }
              ],
              "locationText": "Atlantic Ocean",
              "locationImage": "assets/images/oceans/AtlanticOcean.jpg",
              "diet": [
                {
                  "item": "Zooplankton",
                  "itemImage": "assets/images/diet/zooplankton.png"
                },
                {
                  "item": "Crustaceans",
                  "itemImage": "assets/images/diet/crustacean.png"
              
                }
              ]
            }
          ]
        }
        localStorage.setItem(2,JSON.stringify(obj))
       
        let size = localStorage.length

        for (let index = 1; index <= size; index++) {
          let animal = localStorage.getItem(index)
          animal = JSON.parse(animal)
          let id = animal?.id
          let chave = Number.parseInt(id)
          let isNumber = Number.isInteger(chave)
          if(isNumber && (animal !== null) && (id !== null)){
            array.push(animal)
          }
        }
      }

      setAnimal(array);
      setLoading(false);
  

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
                order={item.order}
                phylum={item.phylum}
                Class={item.class}
                kingdom={item.kingdom}
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
                order={item.order}
                phylum={item.phylum}
                Class={item.class}
                kingdom={item.kingdom}
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

export default index;
