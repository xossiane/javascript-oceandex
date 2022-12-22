import * as Tabs from "@radix-ui/react-tabs";
import Mainpage from "../../../pages/index";
import styles from "./styles.module.scss";
import react from "react";
import Text from "@atoms/Text";
import AboutContent from "@organisms/AboutContent";
import Curiosities from "@organisms/Curiosities";
import Location from "@organisms/Location";
import Diet from "@organisms/Diet";

const TabsDemo = () => (
  /* NOME DAS TABS */
  <Tabs.Root className={styles[`TabsRoot`]} defaultValue="About">
    <Tabs.List className={styles[`TabsList`]} aria-label="">
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
      <Tabs.Trigger className={styles[`TabsTrigger`]} value="Curiosities">
        <Text
          className={styles[`TabsTrigger--text`]}
          color="black"
          size="small"
        >
          Curiosities
        </Text>
      </Tabs.Trigger>
      <Tabs.Trigger className={styles[`TabsTrigger`]} value="Location">
        <Text
          className={styles[`TabsTrigger--text`]}
          color="black"
          size="small"
        >
          Location
        </Text>
      </Tabs.Trigger>
      <Tabs.Trigger className={styles[`TabsTrigger`]} value="Diet">
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

    <Tabs.Content className={styles[`TabsContent`]} value="About">
      <AboutContent />
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="Curiosities">
      <Curiosities />
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="Location">
      <Location />
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="Diet">
      <Diet />
    </Tabs.Content>
  </Tabs.Root>
);

export default TabsDemo;
