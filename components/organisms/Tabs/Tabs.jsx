import * as Tabs from "@radix-ui/react-tabs";
import Mainpage from "../../../pages/index";
import styles from './Tabs.module.scss'; 
import react from "react";
import Text from "@atoms/Text/Text";
import AboutContent from "@organisms/AboutContent/AboutContent";


 const TabsDemo = () => (
  /* NOME DAS TABS */
  <Tabs.Root className={styles[`TabsRoot`]} defaultValue="tab1">
    <Tabs.List className={styles[`TabsList`]} aria-label="">
      <Tabs.Trigger className={styles[`TabsTrigger`]} value="About">
        <Text color="black" size="small">About</Text>
      </Tabs.Trigger>
      <Tabs.Trigger className={styles[`TabsTrigger`]} value="Curiosities">
      <Text color="black" size="small">Curiosities</Text>
      </Tabs.Trigger>
      <Tabs.Trigger className={styles[`TabsTrigger`]} value="Location">
      <Text color="black" size="small">Location</Text>
      </Tabs.Trigger>
      <Tabs.Trigger className={styles[`TabsTrigger`]} value="Diet">
      <Text color="black" size="small">Diet</Text>
      </Tabs.Trigger>
    </Tabs.List>

    {/* CONTEUDO DAS TABS */}

    <Tabs.Content className={styles[`TabsContent`]} value="About">
      <AboutContent></AboutContent>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="Curiosities">
      
      {/* <p className="Text">AQUI SERAO NOSSAS PAGINAS</p> */}
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="Location">
      <p className="Text">THIS IS LOCATION</p>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="Diet">
      <p className="Text">FOOOOD</p>
    </Tabs.Content>
  </Tabs.Root>
 )

export default TabsDemo
