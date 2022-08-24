import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Shopadd from "../Shop/shopadd";
import Shopview from "../Shop/shopview";

function Shoptab() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Add">
        <Shopadd />
      </Tab>
      <Tab eventKey="profile" title="View">
        <Shopview />
      </Tab>
    </Tabs>
  );
}

export default Shoptab;
