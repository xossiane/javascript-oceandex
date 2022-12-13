import Head from "next/head";
import GeneralCuriositiesPage from "./GeneralCuriosities";

import { useEffect, useState } from "react";

import useContentful from "../hooks/useContentful";

export default function MainPage() {
  const { getAnimals } = useContentful();
  const [model, setModel] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    getAnimals().then((response) => {
      setModel(response);
    });
  }, []);
  console.log(model);
  return (
    <div>
      <Head>
        <title>Oceandex</title>
        <meta name="description" content="Oceandex app using Contentful" />
        <link rel="icon" href="./public/favicon.ico" />
      </Head>
      <GeneralCuriositiesPage></GeneralCuriositiesPage>
    </div>
  );
}
