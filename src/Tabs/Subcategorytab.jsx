import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Subcategoryadd from '../Product/Subcategory/subcategoryadd';
import Subcategoryview from "../Product/Subcategory/subcategoryview";

function Subcategorytab() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Add">
        <Subcategoryadd />
      </Tab>
      <Tab eventKey="profile" title="View">
        <Subcategoryview />
      </Tab>
    </Tabs>
  );
}

export default Subcategorytab;
