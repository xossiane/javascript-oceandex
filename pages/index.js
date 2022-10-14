import Arrow from "@atoms/Arrow/Arrow";
import Heading from "@atoms/Heading/Heading";
import Like from "@atoms/Like/Like";
import Text from "@atoms/Text/Text";

export default function mainpage() {
  return (
    <>
      <Arrow white={false} />
      <div style={{ width: "100px" }}>
        <Like liked={false} size={"1"} />
        <Text color="black" size="small" />
        <Heading level="3" size="large" color="white" weight="bold">
          teste
        </Heading>
      </div>
    </>
  );
}
