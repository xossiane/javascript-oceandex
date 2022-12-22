import styles from "./styles.module.scss";

import { useEffect, useState } from "react";


import Arrow from "@atoms/ArrowLeft";
import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import AnimalsCard from "@molecules/AnimalsCard";
import Input from "@molecules/Input";

const index = () => {
  // const { getAnimals, getAnimal, getAuthors, getCuriosities } = useContentful();
  const [animal, setAnimal] = useState([]);
  const [loading, setLoading] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {

   
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

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
          "id": 9,
          "nickname": "Moray Eel",
          "name": "Green Moray",
          "kingdom": "Animalia",
          "phylum": "Chordata",
          "class": "Actinopterygii",
          "order": "Anguilliformes",
          "icon": "assets/images/icons/09-morayEel.png",
          "image": "//images.ctfassets.net/zrxg7ng9qct2/1zjWF0adY6C0B6VZe9RvAt/f527a6bb7d6c1588ab1199bf362828c1/01-angelFish.png",
          "tabs": [
            {
              "about": [
                {
                  "scientificName": "Gymnothorax funebris",
                  "description": "Moray eels, or Muraenidae, are a family of eels whose members are found worldwide. There are approximately 200 species in 15 genera which are almost exclusively marine, but several species are regularly seen in brackish water, and a few are found in fresh water.",
                  "height": "1.8m (length)",
                  "weight": "30-36kg"
                }
              ],
              "breeding": [
                {
                  "method": "Egg - larvae - glass ell - elver - adult"
                }
              ],
              "curiosities": [
                {
                  "curiositiesText": "Moray eels are carnivorous, and ambush predators. They live a rather sedentary life, waiting in hidden places for prey to pass near them.",
                  "curiositiesImage": "assets/images/realAnimals/09-morayEel.jpg"
                }
              ],
              "locationText": "Moray eels are found worldwide in both deep and shallow waters, but tend to prefer warmer temperatures.",
              "locationImage": "assets/images/oceans/MapaMundi.webp",
              "diet": [
                {
                  "item": "Crabs",
                  "itemImage": "assets/images/diet/crab.png"
                },
                {
                  "item": "Octopuses",
                  "itemImage": "assets/images/diet/octopus.png"
                }
              ]
            }
          ]
        }
        localStorage.setItem(2,JSON.stringify(obj))
      

        let size = localStorage.length

        for (let index = 0; index < size; index++) {

          let animal = localStorage.getItem(index)
          let chave = localStorage.key(index)
          chave = Number.parseInt(chave)
          let isNumber = !isNaN(chave)

          
          if(isNumber){
          console.log(animal)
          animal = JSON.parse(animal)
          console.log(animal)
          array.push(animal)
        }
          
        }


        setAnimal(array)
        setLoading(false);
        
      }
    
    if (search) {
        setLoading(true);
        // setAnimal(response);
        setLoading(false);
    }
  }, [search]);

  function showAnimal() {
    return animal.map((item) => {
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
        />
      );
    });
  }

  return (
    <div className={styles[`Oceandex__Container`]}>
      <span className={styles[`Oceandex__Arrow`]}>
        <Arrow href="/" white={false}></Arrow>
      </span>
      <header className={styles[`Oceandex__Header`]}>
        <Heading
          className={styles[`Oceandex__Content`]}
          style="italic"
        >
          <Text
          className={styles[`Oceandex__Content--text`]}
          size="XLarge"
          >Favorite Animals</Text>
        </Heading>
      </header>
      <div className={styles[`Oceandex__Search`]}>
        <Input FavoriteAnimals page="FavoriteAnimals" placeholder="Search for your favorite animals" aria-label="Search for your favorite animals" />
      </div>
      
      <section className={styles[`Oceandex__Cards`]}>
        {loading && <p>loading</p>}
        {!loading && showAnimal()}
      </section>
    </div>
  );
};

export default index;
