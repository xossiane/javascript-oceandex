import Arrow from "@atoms/Arrow";
import Heading from "@atoms/Heading";
import Like from "@atoms/Like";
import AnimalsTag from "@molecules/AnimalsTag";
import TabsDemo from "@organisms/Tabs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useContentful from "../../hooks/useContentful";
import useFetchData from "../../store/useFetchData";
import styles from "./aboutstyles.module.scss";

export default function AboutPage() {
  const router = useRouter();
  console.log(router.query);

  const { getAnimals } = useContentful();
  const setData = useFetchData((state) => state.setData);
  const [liked, setLiked] = useState(false)


  useEffect(() => {
    async function fetchAnimals() {
      const response = await getAnimals();
      const findAnimal = await response.find(
        (element) => element.name === router.query.about
      );
      setData(findAnimal);
    }
    const hadLiked = () =>{
        console.log(data)
        let array = localStorage.getItem('oceandex');
        if(array !== null){
        array = JSON.parse(array)
        let had = array.findIndex((animal)=>{
          return animal.name === router.query.about
        })
        console.log(had)
        if(had !== -1){
          setLiked(true)
        }
      }
    }
    hadLiked()
    fetchAnimals();
  }, [router.query.about]);


  const likeAnimal = (item) => {
    let array = localStorage.getItem('oceandex')
    if(liked === false){
      if(array === null){
        array = []
        array.push(item)
        let animal = JSON.stringify(array)
        localStorage.setItem('oceandex',animal)
      }else{
        array = JSON.parse(array)
        let findItem = array.findIndex(itemArray => itemArray.id === item.id)
        if(findItem === -1){
          array.push(item)
          let animal = JSON.stringify(array)
          localStorage.setItem('oceandex',animal)
        }
      }
    }else{
      array = JSON.parse(array)
      let index = array.findIndex((element)=>{
        return element.name === router.query.about
      })
      array.splice(index, 1)
      array = JSON.stringify(array)
      localStorage.setItem('oceandex',array)
    }
    setLiked(!liked)
  }

  const data = useFetchData((state) => state.data);
  
  if (data) {

    return (
      <div className={styles[`AboutPage`]}>
        <div className={styles[`AboutPage__title`]}>
          {/* <Heading
          level="1"
          className={styles[`AboutPage__Header--text`]}
          color="black"
        >
          {" "}
          Octopus{" "}
        </Heading> */}
        </div>
        <div className={styles[`AboutPage__Content`]}>
          <div className={styles[`AboutPage__Container`]}>
            <header className={styles[`AboutPage__Header`]}>
              <div className={styles[`AboutPage__Header--arrow`]}>
                {" "}
                <Arrow direction="left" href="/Oceandex" white />
              </div>
              <Like
                onClick={()=>{likeAnimal(data)}}
                white={true}
                liked={liked}
                className={styles[`AboutPage__Header--like`]}
              />
            </header>
            <section className={styles[`AboutPage__Header--info`]}>
              <Heading
                level="1"
                className={styles[`AboutPage__Header--text`]}
                color="white"
              >
                {data.name}
              </Heading>
              <section className={styles[`AboutPage__tag`]}>
                <AnimalsTag mw="mw" label={data.classification.kingdom} text="text"></AnimalsTag>{" "}
                <AnimalsTag mw="mw"label={data.classification.phylum} text="text"></AnimalsTag>
              </section>
              <section className={styles[`AboutPage__tag--bottom`]}>
                <AnimalsTag mw="mw"label={data.classification.class} text="text"></AnimalsTag>{" "}
                <AnimalsTag mw="mw"label={data.classification.order} text="text"></AnimalsTag>
              </section>
              <img
                src={data.image}
                className={styles[`AboutPage__Header--icon`]}
                alt="animal icon"
              ></img>
            </section>
          </div>
          <div className={styles[`AboutPage__Container--bottom`]}>
            <TabsDemo></TabsDemo>
          </div>
        </div>
      </div>
    );
  }



}
