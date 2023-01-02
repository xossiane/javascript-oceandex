import * as Tabs from "@radix-ui/react-tabs";
import Mainpage from "../../../pages/index";
import styles from "./styles.module.scss";
import react from "react";
import Text from "@atoms/Text";
import AboutContent from "@molecules/AboutContent";
import CuriositiesContent from "@molecules/CuriositiesContent";
import LocationContent from "@molecules/LocationContent";
import DietContent from "@molecules/DietContent";
import useFetchData from "../../../store/useFetchData";

const TabsComponent = () => {
  const data = useFetchData((state) => state.data);

  return (
    <Tabs.Root className={styles[`tabs__root`]} defaultValue="About">
      <Tabs.List className={styles[`tabs__list`]} aria-label="About">
        <Tabs.Trigger
          className={styles[`tabs__trigger`]}
          aria-label="About"
          value="About"
        >
          <Text
            className={styles[`tabs__trigger--text`]}
            color="black"
            size="small"
          >
            About
          </Text>
        </Tabs.Trigger>
        <Tabs.Trigger
          className={styles[`tabs__trigger`]}
          value="Curiosities"
          aria-label="Curiosities"
        >
          <Text
            className={styles[`tabs__trigger--text`]}
            color="black"
            size="small"
          >
            Curiosities
          </Text>
        </Tabs.Trigger>
        <Tabs.Trigger
          className={styles[`tabs__trigger`]}
          value="Location"
          aria-label="Location"
        >
          <Text
            className={styles[`tabs__trigger--text`]}
            color="black"
            size="small"
          >
            Location
          </Text>
        </Tabs.Trigger>
        <Tabs.Trigger
          className={styles[`tabs__trigger`]}
          value="Diet"
          aria-label="Diet"
        >
          <Text
            className={styles[`tabs__trigger--text`]}
            color="black"
            size="small"
          >
            Diet
          </Text>
        </Tabs.Trigger>
      </Tabs.List>

      <div className={styles[`tabs__bottom`]}>
        <Tabs.Content
          className={styles[`tabs__content`]}
          value="About"
          aria-label="About"
        >
          <AboutContent data={data} />
        </Tabs.Content>
        <Tabs.Content
          className="tabs__content"
          value="Curiosities"
          aria-label="Curiosities"
        >
          <CuriositiesContent data={data} />
        </Tabs.Content>
        <Tabs.Content
          className="tabs__content"
          value="Location"
          aria-label="Location"
        >
          <LocationContent data={data} />
        </Tabs.Content>
        <Tabs.Content className="tabs__content" value="Diet" aria-label="Diet">
          <DietContent data={data} />
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};

export default TabsComponent;
