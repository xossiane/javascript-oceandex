import Arrow from "@atoms/Arrow";
import Button from "@molecules/Button";
import Card from "@molecules/Card";
import Heading from "@atoms/Heading";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import useOceanPage from "../../store/useOceanPage";

export default function OceanWorldwide() {
  const oceans = [
    {
      title: "Pacific Ocean",
      img: "/assets/images/icons/pacific.svg",
      description: "The biggest ocean",
      icon: "/assets/images/designIcons/ocean1.png",
    },
    {
      title: "Atlantic Ocean",
      img: "/assets/images/icons/atlantic.svg",
      description: "Sea of the atlas",
      icon: "/assets/images/designIcons/ocean2.png",
    },
    {
      title: "Indian Ocean",
      img: "/assets/images/icons/indian.svg",
      description: "Third-largest ocean",
      icon: "/assets/images/designIcons/ocean3.png",
    },
    {
      title: "Southern Ocean",
      img: "/assets/images/icons/southern.svg",
      description: "Portions of oceans",
      icon: "/assets/images/designIcons/ocean4.png",
    },
    {
      title: "Arctic Ocean",
      img: "/assets/images/icons/artic.svg",
      description: "The smallest ocean",
      icon: "/assets/images/designIcons/ocean6.png",
    },
  ];

  const removeSpaces = (str) => {
    const string = str.replace(/\s/g, "");
    const lowerCase = string.charAt(0).toLowerCase() + string.slice(1);
    return lowerCase;
  };

  const [oceanPage, setOceanPage] = useState();
  const setOcean = useOceanPage((state) => state.setPage);
  useEffect(() => {
    setOcean(oceanPage);
  }, [oceanPage]);

  return (
    <>
      
        <section className={styles[`oceanWorldwide__container`]}>
          <div className={styles[`oceanWorldwide__arrow`]}>
            <Arrow direction="left" href="/" />
          </div>
          <header className={styles[`oceanWorldwide__header`]}>
            <Heading
              level="1"
              color="black"
              style="italic"
              pageTitle = {true}
            >
              Ocean Curiosities
            </Heading>
          </header>
          <main className={styles[`oceanWorldwide__content`]}>
            <section className={styles[`oceanWorldwide__buttons`]}>
              {oceans.map((ocean) => (
                <>
                  <Button
                    href={`/ocean-curiosities/${removeSpaces(ocean.title)}`}
                    size="large"
                    color="purple"
                    title={ocean.title}
                    description={ocean.description}
                    img={ocean.img}
                    icon={ocean.icon}
                    className={styles[`oceanWorldwide__buttonUnit`]}
                    key={ocean.id}
                  >
                    {" "}
                  </Button>

                  <Card
                    color="purple"
                    href={`/ocean-curiosities/${removeSpaces(ocean.title)}`}
                    title={ocean.title}
                    img={ocean.img}
                    description={ocean.description}
                    className={styles[`oceanWorldwide__cardUnit`]}
                    key={ocean.id}
                  ></Card>
                </>
              ))}
            </section>
          </main>
        </section>
     
    </>
  );
}
