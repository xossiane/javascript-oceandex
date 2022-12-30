import Text from "@atoms/Text";
import AnimalsCard from "@molecules/AnimalsCard";
import { internalMutate } from "swr/_internal";
import styles from "./styles.module.scss";

export default function Curiosities() {
  return (
    <div className={styles[`Curiosities`]}>
      <Text color="black" size="medium" className={styles[`Curiosities__text`]}>
        Octopuses tend to be solitary, though they do interact with other
        octopuses at times. Some species of octopuses hunt at night, while
        others only hunt at dusk and dawn. When scared, octopuses will shoot a
        dark liquid, sometimes called ink, at the thing that scared them. This
        will temporarily blind and confuse a potential attacker, giving the
        octopus time to swim away. The ink can also dull the attacker's smelling
        and tasting abilities, according to the Smithsonian article. This will
        temporarily blind and confuse a potential attacker, giving the octopus
        time to swim away. Octopuses tend to be solitary, though they do
        interact with other octopuses at times. Some species of octopuses hunt
        at night, while others only hunt at dusk and dawn. When scared,
        octopuses will shoot a dark liquid, sometimes called ink, at the thing
        that scared them. This will temporarily blind and confuse a potential
        attacker, giving the octopus time to swim away. The ink can also dull
        the attacker's smelling and tasting abilities, according to the
        Smithsonian article. This will temporarily blind and confuse a potential
        attacker, giving the octopus time to swim away.
      </Text>
      <img
        src="../assets/images/realAnimals/16-octopus.jpg"
        className={styles[`Curiosities__img`]}
        alt="Animal"
        loading="lazy"
      ></img>
    </div>
  );
}
