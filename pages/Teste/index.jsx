import Container from "@organisms/Container";
import GeneralCuriosities from "@molecules/GeneralCuriosities";
import Background from "@atoms/Background";

export default function Teste() {
  return (
    <div>
      <Container
        href="/home"
        title="General Curiosities"
        backgroundColorHeader="#567A79"
      >
        <GeneralCuriosities />
      </Container>
      <Background />
    </div>
  );
}
