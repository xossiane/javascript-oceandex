import Arrow from "@atoms/Arrow/Arrow";
import Background from "@atoms/Background";
import Heading from "@atoms/Heading/Heading";
import Like from "@atoms/Like/Like";
import Text from "@atoms/Text/Text";
import AnimalsTag from "@molecules/AnimalsTag";
import GeneralCuriositiesPage from "@organisms/GeneralCuriositiesPage";
import OceanWorldWide from "@organisms/OceanWorldwide";

import Button from "@atoms/Button/Button";

export default function mainpage() {
  return (
    <>
      <Arrow white={false} />
      <div style={{ width: "100px" }}>
        <Like liked={true} size={"1"} />
        <Text color="black" size="small" />
        <Heading level="3" size="large" color="white" weight="bold">
          teste
        </Heading>
        <Button size="medium" color="lavander" fontsize="fontsmall"> <Text color="white" size="small">Teste2</Text> </Button>
        <AnimalsTag></AnimalsTag>
        
        <GeneralCuriositiesPage></GeneralCuriositiesPage>
        <OceanWorldWide></OceanWorldWide>
      </div>
    </>
  );
}
