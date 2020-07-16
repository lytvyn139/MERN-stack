//https://www.npmjs.com/package/react-tabs
// npm install react-tabs

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Tabs>
        <TabList>
          <Tab>Bacon</Tab>
          <Tab>Shrooms</Tab>
          <Tab>Lorem</Tab>
        </TabList>
        <TabPanel>
          <h2>this give you magical power 🔥🥓</h2>
        </TabPanel>
        <TabPanel>
          <h2>Don't eat the shrooms 🍄</h2>
        </TabPanel>
        <TabPanel>
          <h2>Lorem ipsum blah blah</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
