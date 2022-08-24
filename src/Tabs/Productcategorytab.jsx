import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Categoryadd from "../Product/Category/categoryadd";
import Categoryview from "../Product/Category/categoryview";

function Productcategorytab() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Add">
        <Categoryadd />
      </Tab>
      <Tab eventKey="profile" title="View">
        <Categoryview />
      </Tab>
    </Tabs>
  );
}

export default Productcategorytab;
