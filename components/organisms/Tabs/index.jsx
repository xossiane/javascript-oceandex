
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Mainpage from '../../../pages/index';
/* import styles from './Tabs.module.css'; */

const TabsDemo = () => (

    /* NOME DAS TABS */
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="About">
        About
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="Curiosities">
        Curiosities
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="Location">
        Location
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="Diet">
        Diet
      </Tabs.Trigger>
    </Tabs.List>

    {/* CONTEUDO DAS TABS */}

    <Tabs.Content className="TabsContent" value="About">
      <p className="Text">aqui a gente renderiza o organismo</p>
      
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20, width: '900px'}}>
        
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="Curiosities">
        <Mainpage/>
      {/* <p className="Text">AQUI SERAO NOSSAS PAGINAS</p> */}
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="Location">
      <p className="Text">THIS IS LOCATION</p>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="Diet">
      <p className="Text">FOOOOD</p>
    </Tabs.Content>

  </Tabs.Root>
);
export default TabsDemo;