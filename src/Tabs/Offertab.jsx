import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import OfferAdd from "../Offer/Offersadd";
import Offerview from "../Offer/Offerview";
function Offertab() {
  return (
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Add">
          <OfferAdd />
        </Tab>
        <Tab eventKey="profile" title="View">
          <Offerview />
        </Tab>
      </Tabs>
  );
}

export default Offertab;
