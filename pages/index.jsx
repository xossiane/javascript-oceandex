import Head from "next/head";
import GeneralCuriositiesPage from "./GeneralCuriosities";

export default function MainPage() {
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
