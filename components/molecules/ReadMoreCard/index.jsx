import React from "react";
import Image from "next/image"

import styles from "./styles.module.scss";

import Heading from "@atoms/Heading"

export default function ReadMoreCard({ title, img, description, bg }) {
  return (
    <div className={styles[`card--${bg}`]}>
      <Heading level="1" color="white">{title}</Heading>
      <Image src={img} width={196} height={181} alt="" />
      <p>{description}</p>
      <button>Read more...</button>
    </div>
  );
}
