import * as Tabs from "@radix-ui/react-tabs";
import Mainpage from "../../../pages/index";
import styles from "./styles.module.scss";
import react from "react";
import Text from "@atoms/Text";
import AboutContent from "@molecules/AboutContent";
import CuriositiesContent from "@molecules/CuriositiesContent";
import LocationContent from "@molecules/LocationContent";
import DietContent from "@molecules/DietContent";

const TabsDemo = () => (
  /* NOME DAS TABS */
  <Tabs.Root className={styles[`TabsRoot`]} defaultValue="About">
    <Tabs.List className={styles[`TabsList`]} aria-label="About">
      <Tabs.Trigger
        className={styles[`TabsTrigger`]}
        aria-label="About"
        value="About"
      >
        <Text
          className={styles[`TabsTrigger--text`]}
          color="black"
          size="small"
        >
          About
        </Text>
      </Tabs.Trigger>
      <Tabs.Trigger className={styles[`TabsTrigger`]} value="Curiosities" aria-label="Curiosities">
        <Text
          className={styles[`TabsTrigger--text`]}
          color="black"
          size="small"
        >
          Curiosities
        </Text>
      </Tabs.Trigger>
      <Tabs.Trigger className={styles[`TabsTrigger`]} value="Location" aria-label="Location" >
        <Text
          className={styles[`TabsTrigger--text`]}
          color="black"
          size="small"
        >
          Location
        </Text>
      </Tabs.Trigger>
      <Tabs.Trigger className={styles[`TabsTrigger`]} value="Diet" aria-label="Diet">
        <Text
          className={styles[`TabsTrigger--text`]}
          color="black"
          size="small"
        >
          Diet
        </Text>
      </Tabs.Trigger>
    </Tabs.List>

    {/* CONTEUDO DAS TABS */}

    <div className={styles[`TabsBottom`]}>
      <Tabs.Content className={styles[`TabsContent`]} value="About" aria-label="About">
        <AboutContent />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="Curiosities" aria-label="Curiosities">
        <CuriositiesContent />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="Location" aria-label="Location">
        <LocationContent />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="Diet" aria-label="Diet">
        <DietContent />
      </Tabs.Content>
    </div>
  </Tabs.Root>
);

export default TabsDemo;
