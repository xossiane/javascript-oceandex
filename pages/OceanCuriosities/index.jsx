import Arrow from "@atoms/Arrow";
import Background from "@atoms/Background";
import Button from "@molecules/Button";
import Card from "@molecules/Card";
import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import Header from "@organisms/Header";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import useContentful from "../../hooks/useContentful";

export default function OceanWorldwide() {
  const oceans = [
    {
      title: "Pacific Ocean",
      img: "/assets/images/icons/pacific.svg",
      description: "The biggest ocean",
    },
    {
      title: "Atlantic Ocean",
      img: "/assets/images/icons/atlantic.svg",
      description: "Sea of the atlas",
    },
    {
      title: "Indian Ocean",
      img: "/assets/images/icons/indian.svg",
      description: "Third-largest ocean",
    },
    {
      title: "Southern Ocean",
      img: "/assets/images/icons/southern.svg",
      description: "Portions of oceans",
    },
    {
      title: "Arctic Ocean",
      img: "/assets/images/icons/artic.svg",
      description: "The smallest ocean",
    },

    // "Pacific Ocean",
    // "Indian Ocean",
    // "Southern Ocean",
    // "Arctic Ocean",
  ];

  const removeSpaces = (str) => {
    const string = str.replace(/\s/g, "");
    const lowerCase = string.charAt(0).toLowerCase() + string.slice(1);
    return lowerCase;
  };

  const { getCuriosities } = useContentful();
  const [loading, setLoading] = useState();

  const [oceanCuriosities, setOceanCuriosities] = useState([]);

  useEffect(() => {
    async function fetchCuriosities() {
      const response = await getCuriosities("ocean");
      setOceanCuriosities(response);
    }
    fetchCuriosities();
  }, []);
  //console.log(oceanCuriosities);

  return (
    <>
      <div className={styles[`OceanWorldwide`]}>
        <div className={styles[`OceanWorldwide__container`]}>
          <span className={styles[`OceanWorldwide__Arrow`]}>
            <Arrow direction="left" href="/" />
          </span>
          <section className={styles[`OceanWorldwide__header`]}>
            <Heading
              level="1"
              className={styles[`OceanWorldwide__container--text`]}
              color="black"
              style="italic"
            >
              Ocean Curiosities
            </Heading>
          </section>
          <div className={styles[`OceanWorldwide__content`]}>
            <section className={styles[`OceanWorldwide__content--buttons`]}>
              {oceans.map((ocean) => (
                <>
                  <Button
                    href={`/OceanCuriosities/${removeSpaces(ocean.title)}`}
                    size="large"
                    color="purple"
                    title={ocean.title}
                    description={ocean.description}
                    img={ocean.img}
                    className={styles[`OceanWorldwide__buttonUnit`]}
                  />
                  <Card
                    color="purple"
                    href={`/OceanCuriosities/${removeSpaces(ocean.title)}`}
                    title={ocean.title}
                    img={ocean.img}
                    description={ocean.description}
                    className={styles[`OceanWorldwide__CardUnit`]}
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
