import Arrow from "@atoms/Arrow/Arrow";
import Heading from "@atoms/Heading/Heading";
import Like from "@atoms/Like/Like";
import Text from "@atoms/Text/Text";
import AnimalsCard from "@molecules/AnimalsCard";

import AnimalsTag from "@molecules/AnimalsTag";

import animals from "oceananimals.json";
export default function mainpage() {
  const firstAnimal = animals[20];

  return (
    <>
      <Arrow white={false} />
      <div style={{ width: "100px" }}>
        <Like liked={true} size={"1"} />
        <Text color="black" size="small" />
        <Heading level="3" size="large" color="white" weight="bold">
          teste
        </Heading>
        <AnimalsTag>teste</AnimalsTag>
        <div
          style={{
            width: "150px",
            height: "110px",
          }}
        >
          <AnimalsCard
            name={firstAnimal.name}
            order={firstAnimal.order}
            phylum={firstAnimal.phylum}
            src={firstAnimal.icon}
          />
        </div>
      </div>
    </>
  );
}
