// import Arrow from "@atoms/ArrowLeft";
// import Background from "@atoms/Background";
// import Button from "@atoms/Button";
import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import Button from "@molecules/Button";
import Card from "@molecules/Card";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function TrophicLevelPage() {
  const [selected, setSelected] = useState("Deep Ocean");

  return (
    <>
        <Heading
          style="italic"
          color="black"
          level="1"
        >
          Trophic Level
        </Heading>
        <Text className={styles[`TrophicLevel__Paragraph`]} size="large">
        Based on the source of their nutrition or food, organisms occupy a specific place in the food chain known as their trophic level. Primary producers comprise the first trophic level, followed by primary consumers (herbivores), secondary consumers (carnivores are feeding on herbivores), etc. Food webs are the complex networks through which energy and materials move in an environment, from microbes all the way through to predators. They are often studied and modelled in terms of the flow of energy between different organisms. Marine food webs include all animals living in the sea, from phytoplankton, bacteria and small shrimp-like animals in the water, to animals living on the sea bed like sponges and corals, to fish, squid, whales, seals and seabirds.
        </Text>

      <div className={styles[`TrophicLevel__ContainerCard`]}>
        <Card
          href="#Text"
          title="Deep Ocean"
          color="oliveGreen"
          description="Below 200 meters"
          onClick={() => setSelected("Deep Ocean")}
          img="/assets/images/icons/deep_ocean.svg"
          state={selected}
          loading="lazy"
        />
        <Card
          href="#Text"
          title="Arctic Ocean"
          color="oliveGreen"
          description="Coldest waters"
          onClick={() => setSelected("Arctic Ocean")}
          img="/assets/images/icons/artic_ocean.svg"
          state={selected}
          loading="lazy"
        />
        <Card
          href="#Text"
          title="Pelagic Ocean"
          color="oliveGreen"
          description="Where light meets water"
          onClick={() => setSelected("Pelagic Ocean")}
          img="/assets/images/icons/pelagic_ocean.svg"
          state={selected}
          loading="lazy"
        />
        <Button
          href="#deepOcean"
          color="oliveGreen"
          title="Deep Ocean"
          description="Below 200 meters"
          img="/assets/images/icons/deep_ocean.svg"
          loading="lazy"
        />
        <Button
          href="#arcticOcean"
          color="oliveGreen"
          description="Coldest waters"
          img="/assets/images/icons/artic_ocean.svg"
          title="Arctic Ocean"
          loading="lazy"
        />
        <Button
          href="#pelagicOcean"
          color="oliveGreen"
          description="Where light meets water"
          img="/assets/images/icons/pelagic_ocean.svg"
          title="Pelagic Ocean"
          loading="lazy"
        />
      </div>

      <div className={styles[`TrophicLevel__ContainerText`]}>
        {selected === "Deep Ocean" && (
          <Text className={styles[`TrophicLevel__ContainerText__Title`]}>
            Deep Ocean
          </Text>
        )}
        {selected === "Arctic Ocean" && (
          <Text className={styles[`TrophicLevel__ContainerText__Title`]}>
            Arctic Ocean
          </Text>
        )}
        {selected === "Pelagic Ocean" && (
          <Text className={styles[`TrophicLevel__ContainerText__Title`]}>
            Pelagic Ocean
          </Text>
        )}
        {selected === "Deep Ocean" && (
          <Text
            id="Text"
            size="large"
            className={styles[`TrophicLevel__ContainerText__Paragraph`]}
          >
            With no sunlight, photosynthesis cannot occur below 200 metres in
            the Twilight Zone. There are no plants here to fulfil the role of
            nutrient producers. There is only marine snow, bringing down the
            leftovers from above. It might be enough to sustain an abundance of
            detrivores, or small filter feeders like sponges, but this alone is
            not enough to support a complex biological community. Pelagic
            wanderers can go for very long periods of time without feeding.
            Their slowed metabolisms are a useful adaptation down here where
            nutrients are scarce. Even so, wanderers cannot rely entirely on
            residual nutrients brought to them from vents and seeps. They must
            become opportunistic feeders, and be able to take advantage of any
            kind of food they come across.
          </Text>
        )}
        {selected === "Arctic Ocean" && (
          <Text
            id="Text"
            size="large"
            className={styles[`TrophicLevel__ContainerText__Paragraph`]}
          >
            The Arctic food web is unique in there is not an abundance of
            typical plants to serve as primary producers. Instead, primary
            produces in the Arctic come in the form of algae and phytoplankton.
            Phytoplankton are small floating plants that are often microscopic
            in size. While they may not appear like typical plants with leaves,
            roots, and fruits, they still contain chlorophyll and engage in
            photosynthesis. Thus, phytoplankton in the Arctic are actively
            converting solar energy into chemical energy. Phytoplankton are not
            restricted to the Arctic either and are found in many ocean food
            webs.
          </Text>
        )}
        {selected === "Pelagic Ocean" && (
          <Text
            id="Text"
            size="large"
            className={styles[`TrophicLevel__ContainerText__Paragraph`]}
          >
            The open ocean is often called the pelagic zone. The pelagic zone is
            sometimes thought of as a cylinder or column of water that goes from
            the surface of the sea to near the bottom. Plants and animals that
            live in this column are called pelagic animals and pelagic plants.
            Animals that eat phytoplankton are called herbivores. The most
            common ocean herbivore is zooplankton. Zooplankton are also
            microscopic but exist in huge numbers in the ocean. Another ocean
            herbivore is krill. Krill is like a tiny shrimp about 5cm long. They
            eat mostly phytoplankton and sometimes zooplankton. Krill are a very
            important food for many larger animals such as fish, birds and
            whales.
          </Text>
        )}
      </div>

      <div className={styles[`TrophicLevel__ContainerMobile`]}>
        <Text
          id="deepOcean"
          className={styles[`TrophicLevel__ContainerMobile__Title`]}
        >
          Deep Ocean
        </Text>
        <img
          className={styles[`TrophicLevel__ContainerMobile__Image`]}
          src="/assets/images/foodChain/deepOceanMobile.png"
          alt="Deep ocean"
        />
        <Text className={styles[`TrophicLevel__ContainerMobile__Paragraph`]}>
          With no sunlight, photosynthesis cannot occur below 200 metres in the
          Twilight Zone. There are no plants here to fulfil the role of nutrient
          producers. There is only marine snow, bringing down the leftovers from
          above. It might be enough to sustain an abundance of detrivores, or
          small filter feeders like sponges, but this alone is not enough to
          support a complex biological community. Pelagic wanderers can go for
          very long periods of time without feeding. Their slowed metabolisms
          are a useful adaptation down here where nutrients are scarce. Even so,
          wanderers cannot rely entirely on residual nutrients brought to them
          from vents and seeps. They must become opportunistic feeders, and be
          able to take advantage of any kind of food they come across.
        </Text>
        <Text
          id="arcticOcean"
          className={styles[`TrophicLevel__ContainerMobile__Title`]}
        >
          Arctic Ocean
        </Text>
        <img
          className={styles[`TrophicLevel__ContainerMobile__Image`]}
          src="/assets/images/foodChain/arcticOceanMobile.png"
          alt="Arctic ocean"
        />
        <Text className={styles[`TrophicLevel__ContainerMobile__Paragraph`]}>
          The Arctic food web is unique in there is not an abundance of typical
          plants to serve as primary producers. Instead, primary produces in the
          Arctic come in the form of algae and phytoplankton. Phytoplankton are
          small floating plants that are often microscopic in size. While they
          may not appear like typical plants with leaves, roots, and fruits,
          they still contain chlorophyll and engage in photosynthesis. Thus,
          phytoplankton in the Arctic are actively converting solar energy into
          chemical energy. Phytoplankton are not restricted to the Arctic either
          and are found in many ocean food webs.
        </Text>
        <Text
          id="pelagicOcean"
          className={styles[`TrophicLevel__ContainerMobile__Title`]}
        >
          Pelagic Ocean
        </Text>
        <img
          className={styles[`TrophicLevel__ContainerMobile__Image`]}
          src="/assets/images/foodChain/pelagicOceanMobile.png"
          alt="Pelagic Ocean"
        />
        <Text className={styles[`TrophicLevel__ContainerMobile__Paragraph`]}>
          The open ocean is often called the pelagic zone. The pelagic zone is
          sometimes thought of as a cylinder or column of water that goes from
          the surface of the sea to near the bottom. Plants and animals that
          live in this column are called pelagic animals and pelagic plants.
          Animals that eat phytoplankton are called herbivores. The most common
          ocean herbivore is zooplankton. Zooplankton are also microscopic but
          exist in huge numbers in the ocean. Another ocean herbivore is krill.
          Krill is like a tiny shrimp about 5cm long. They eat mostly
          phytoplankton and sometimes zooplankton. Krill are a very important
          food for many larger animals such as fish, birds and whales.
        </Text>
      </div>

      <div className={styles[`TrophicLevel__ContainerImage`]}>
        {selected === "Deep Ocean" && (
          <img src="/assets/images/foodChain/deepOcean.png" alt="Deep ocean" />
        )}
        {selected === "Arctic Ocean" && (
          <img
            src="/assets/images/foodChain/ArticOcean.png"
            alt="Arctic Ocean"
          />
        )}
        {selected === "Pelagic Ocean" && (
          <img
            src="/assets/images/foodChain/pelagicOcean.png"
            alt="Pelagic ocean"
          />
        )}
      </div>
    </>
  );
}
