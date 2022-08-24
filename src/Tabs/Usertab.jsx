import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserManagement from '../Usermanagement/UserAdd';
import UserView from '../Usermanagement/UserView';

function Usertab() {
  return (
    <>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Add">
           <UserManagement />
          </Tab>
          <Tab eventKey="profile" title="View">
          <UserView/>
          </Tab>
        </Tabs>
    </>
  )
}

export default Usertab;