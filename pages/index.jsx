import Arrow from "@atoms/Arrow/Arrow";
import Background from "@atoms/Background";
import Heading from "@atoms/Heading/Heading";
import Like from "@atoms/Like/Like";
import Text from "@atoms/Text/Text";
import AnimalsCard from "@molecules/AnimalsCard";

import AnimalsTag from "@molecules/AnimalsTag";
import GeneralCuriositiesPage from "@organisms/GeneralCuriositiesPage";
import OceanWorldWide from "@organisms/OceanWorldwide";
import Tabs from "@organisms/Tabs";

import animals from "oceananimals.json";

import useContentful from "hooks/useContentful";
import { useEffect, useState } from "react";

export default function mainpage() {
  //const firstAnimal = animals[20];
  const { getAnimals } = useContentful();
  const [oceanAnimals, setOceanAnimals] = useState([]);

  useEffect(() => {
    getAnimals().then((response) => setOceanAnimals(response));
  }, []);
  console.log(oceanAnimals);
  return (
    <>
      <Arrow white={false} />
      <div style={{ width: "100px" }}>
        <Like liked={true} size={"1"} />
        <Text color="black" size="small" />
        <Heading level="3" size="large" color="white" weight="bold">
          teste
        </Heading>
        <AnimalsTag></AnimalsTag>
        <Background></Background>
        <AnimalsTag>teste</AnimalsTag>
        <div
          style={{
            width: "150px",
            height: "110px",
          }}
        >
          {oceanAnimals.map((animal, index) => (
            <AnimalsCard
              key={index}
              name={animal.name}
              order={animal.classification.order}
              phylum={animal.classification.phylum}
              src={animal.image.file.url}
            />
          ))}
        </div>
      </div>
      
    </>
  );
}
