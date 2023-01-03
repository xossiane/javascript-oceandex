import Background from "@atoms/Background";
import Footer from "@organisms/Footer";
import Header from "@organisms/Header";
import SkipLink from "@atoms/SkipLink";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <SkipLink />
      <Header />
      <div id="content" className={styles[`content`]}>
        {children}
      </div>
      {router.pathname === "/oceandex/[about]" ? "" : <Background />}

      <Footer />
    </>
  );
}
