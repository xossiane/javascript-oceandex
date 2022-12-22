import Header from "@organisms/Header";
import Footer from "@organisms/Footer";
import styles from "./styles.module.scss";

import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles[`content`]}>{children}</div>
      <Footer />
    </>
  );
}
