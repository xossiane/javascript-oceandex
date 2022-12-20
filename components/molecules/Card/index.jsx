import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
export default function Card({ href, color, title, img, description }) {
  const classList = [];
  classList.push(styles[`card--${color}`]);
  classList.push(styles[`card`]);

  return (
    <div className={`${classList.join(" ")}`}>
      <Heading
        level="1"
        color="white"
        size="small"
        weight="normal"
        format="uppercase"
      >
        {title}
      </Heading>
      <Image src={img} width={196} height={181} alt="" />
      <Text size="large" color="white" weight="bold">
        {description}
      </Text>

      <Link href={`${href}`}>
        <a className={styles[`card__Link`]}>Read More...</a>
      </Link>
    </div>
  );
}
