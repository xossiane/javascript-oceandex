import styles from "./Oceandex.module.scss";

import { useEffect, useState } from "react";

import useContentful from "../../hooks/useContentful";

import Heading from '@atoms/Heading/Heading';
import Arrow from '@atoms/Arrow/Arrow';
import Input from '@molecules/Input/Input';
import Text from '@atoms/Text/Text';
import AnimalsCard from "@molecules/AnimalsCard/AnimalsCard";

const index = () => {

  const { getAnimals } = useContentful();
  const [animal, setAnimal] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => { getAnimals().then((response) => {
    setLoading(true)
    setAnimal(response);
    setLoading(false);
    })
  },[]);

  console.log(animal);


  return (
    <div className={styles[`Oceandex__Container`]}>
      <header className={styles[`Oceandex__Header`]}>  
        <Arrow href= "/home" white={false}></Arrow>
        <Heading level="1" className={styles[`Oceandex__Content--text`]} size="Xlarge" color="grey" style="italic"> OceanDex </Heading>
      </header>
      <div className={styles[`Oceandex__Search`]}>
        <Input />
      </div>
      <section className={styles[`Oceandex__Cards`]}>
        {loading && <p>loading</p>}
        {!loading && animal.map((item) => {
          <AnimalsCard
          name={item.name}
          order={item.order}
          phylum={item.phylum}
          src={item.icon}
        />
        })}
        <AnimalsCard
          name="teste"
          order="teste"
          phylum="teste"
          src="../assets/images/icons/00-anemone.png"
        />
        <AnimalsCard
          name="teste"
          order="teste"
          phylum="teste"
          src="../assets/images/icons/01-angelFish.png"
        />
        <AnimalsCard
          name="teste"
          order="teste"
          phylum="teste"
          src="../assets/images/icons/02-cod.png"
        />
        <AnimalsCard
          name="teste"
          order="teste"
          phylum="teste"
          src="../assets/images/icons/03-dolphin.png"
        />
        <AnimalsCard
          name="teste"
          order="teste"
          phylum="teste"
          src="../assets/images/icons/04-blueWhale.png"
        />
        <AnimalsCard
          name="teste"
          order="teste"
          phylum="teste"
          src="../assets/images/icons/05-clownFish.png"
        />
        <AnimalsCard
          name="teste"
          order="teste"
          phylum="teste"
          src="../assets/images/icons/06-coral.png"
        />
        <AnimalsCard
          name="teste"
          order="teste"
          phylum="teste"
          src="../assets/images/icons/07-crab.png"
        />
        

      </section>
      
      
    </div>
  )
}

export default index