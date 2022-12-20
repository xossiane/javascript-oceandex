import Arrow from "@atoms/ArrowLeft";
import Background from "@atoms/Background";
import Button from "@molecules/Button";
import Card from "@molecules/Card";
import Heading from "@atoms/Heading";
import LineTop from "@atoms/Line";
import Text from "@atoms/Text";
import Header from "@organisms/Header";
import React from "react";
import styles from "./styles.module.scss";

export default function OceanWorldwide() {
  const oceans = [
    {
      title: "Pacific Ocean",
      img: "/assets/images/icons/pacific.svg",
      description: "The biggest ocean",
      color: "purple",
    },
    {
      title: "Atlantic Ocean",
      img: "/assets/images/icons/atlantic.svg",
      description: "Sea of the atlas",
      color: "purple",
    },
    {
      title: "Indian Ocean",
      img: "/assets/images/icons/indian.svg",
      description: "Third-largest ocean",
      color: "purple",
    },
    {
      title: "Southern Ocean",
      img: "/assets/images/icons/southern.svg",
      description: "Portions of oceans",
      color: "purple",
    },
    {
      title: "Arctic Ocean",
      img: "/assets/images/icons/artic.svg",
      description: "The smallest ocean",
      color: "purple",
    },

    // "Pacific Ocean",
    // "Indian Ocean",
    // "Southern Ocean",
    // "Arctic Ocean",
  ];
  return (
    <>
    <Header/>
    <LineTop/>
    <div className={styles[`OceanWorldwide`]}>
      <div className={styles[`OceanWorldwide__container`]}>
        <span className={styles[`OceanWorldwide__Arrow`]}>
          <Arrow href="/home" white={true}></Arrow>
        </span>
        <section className={styles[`OceanWorldwide__header`]}>
          <Heading
            level="1"
            className={styles[`OceanWorldwide__container--text`]}
            color="black"
            style="italic"
          >
            {" "}
            Ocean WorldWide
          </Heading>
        </section>
        <div className={styles[`OceanWorldwide__content`]}>
          <section className={styles[`OceanWorldwide__content--buttons`]}>
            {oceans.map((ocean) => (
              <>
                <Button
                  href="/OceanCuriosities"
                  size="large"
                  color="purple"
                  title={ocean.title}
                  description={ocean.description}
                  img={ocean.img}
                  className={styles[`OceanWorldwide__buttonUnit`]}
                />
                <Card
                  color={ocean.color}
                  href={ocean.href}
                  title={ocean.title}
                  img={ocean.img}
                  description={ocean.description}
                />
              </>
            ))}
          </section>
        </div>
      </div>
      <section className={styles[`OceanWorldwide__background`]}>
        <Background />
      </section>
    </div>
    </>
  );
}
