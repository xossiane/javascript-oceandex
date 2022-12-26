import React, { useState } from "react";
import animalsCuriosities from "@molecules/animalsCuriosities";
import Background from "@atoms/Background";
import MenuMobile from "@molecules/MenuMobile";
import Header from "@organisms/Header";
import Container from "@organisms/Container";
import AboutContent from "@organisms/AboutContent";

import styles from "./styles.module.scss";

export default function Teste() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <div>
      <Container>
        <AboutContent />
        <animalsCuriosities />
      </Container>
    </div>
  );
}
