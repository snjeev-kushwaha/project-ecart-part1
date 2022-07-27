import React from 'react'
import './shop.css'
import {Form, Button, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
function Shopadd() {

  let [reg_no, setReg_no] = useState('');
  let[shop_id, setShop_id] = useState('');
  let[shop_name, setShop_name] = useState('');
  let [address, setAddress] = useState('');
  let [state, setState] = useState('');
  let [city, setCity] = useState('');
  let [pincode, setPincode] =useState('');
  let [contact, setContact] = useState('');
  let [owner, setOwner] = useState('');
  let [type, setType] = useState('');
  let [email, setEmail] = useState('');
  let [url, setUrl] = useState('');
  let [gst, setGst] = useState('');
  let [ternover, setTernover] = useState('');
  let [description, setDescription] = useState('');
  let[term_condition, setTerm_condition]= useState('');
  let[status, setStatus] = useState('');

  // post api
  
  function addShop(){

    let userdata ={
        Reg_no: reg_no,
        shop_id:shop_id,
        shop_name:shop_name,
        address: address,
        state:state,
        city:city,
        pincode:pincode,
        contact:contact,
        owner:owner, 
        type:type,  
        email:email,
        url:url,
        gst:gst,
        ternover:ternover,
        description:description,
        term_condition:term_condition,
        status:status
    }

    let reqData={
      method: "POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(userdata)
    }
    fetch("http://localhost:5050/shop_registration/shop_registration", reqData)
    .then(response => console.log(`Data Submitted${response.status}`))
  }
  
  return (
    <div className='shopadd'>
      <h2>Shop Registraion from</h2>
      <Form>
      <Row>
        <Col><Form.Label>Registration Number</Form.Label>
        <Form.Control type="text" value={reg_no} onChange={(e) =>setReg_no(e.target.value)} /></Col>
        <Col><Form.Label>Shop_id</Form.Label>
        <Form.Control type="text" value={shop_id} onChange={(e) =>setShop_id(e.target.value)} /></Col>
      </Row>
      <Row>
        <Col><Form.Label>Shop_name</Form.Label>
        <Form.Control type="text" value={shop_name} onChange={(e)=>setShop_name(e.target.value)} /></Col>
        <Col><Form.Label>Address</Form.Label>
        <Form.Control type="text" value={address} onChange={(e) =>setAddress(e.target.value)} /></Col>
      </Row>
      <Row>
        <Col><Form.Label>State</Form.Label>
        <select class="form-select" value={state} onChange ={(e) =>setState(e.target.value)}>
          <option></option>
          <option>Madhyapradesh</option>
          <option>Utter pradesh</option>
          <option>Gujrat</option>
          <option>Maharastra</option>
        </select>
        </Col>
        <Col><Form.Label>City</Form.Label>
        <select class="form-select" value={city} onChange ={(e) =>setCity(e.target.value)}>
          <option></option>
          <option>Bhopal</option>
          <option>Indore</option>
          <option>Mumbai</option>
          <option>jabalpur</option>
        </select>
      
        </Col>
      </Row>
      <Row>
        <Col><Form.Label>Pincode</Form.Label>
        <Form.Control type="text" value={pincode} onChange={(e) =>setPincode(e.target.value)} /></Col>
        <Col><Form.Label>Contact</Form.Label>
        <Form.Control type="text" value={contact} onChange={(e) =>setContact(e.target.value)} /></Col>
      </Row>
      <Row>
        <Col><Form.Label>Show_owner</Form.Label>
        <Form.Control type="text" value={owner} onChange={(e) => setOwner(e.target.value)} /></Col>
        <Col><Form.Label>Shop_type</Form.Label>
        <select class="form-select" value={type} onChange={(e) => setType(e.target.value)}>
          <option></option>
          <option>Electritions</option>
          <option>Grocery</option>
          <option>General store</option>
          <option>Footwere</option>
        </select>
        </Col>
      </Row>
      <Row>
        <Col><Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) =>setEmail(e.target.value)} /></Col>
        <Col><Form.Label>URL</Form.Label>
        <Form.Control type="text" value={url} onChange={(e) =>setUrl(e.target.value)} /></Col>
      </Row>
      <Row>
        <Col><Form.Label>GST</Form.Label>
        <Form.Control type="text" value={gst} onChange={(e) =>setGst(e.target.value)} /></Col>
        <Col><Form.Label>Turn Over</Form.Label>
        <Form.Control type="text" value={ternover} onChange={(e) => setTernover(e.target.value)} /></Col>
      </Row>
      <Row>
        <Col><Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} onChange={(e) =>setDescription(e.target.value)} /></Col>
        <Col><Form.Label>Term-condition</Form.Label>
        <Form.Control type="text" value={term_condition} onChange={(e) =>setTerm_condition(e.target.value)} /></Col>
      </Row>
      <Form.Label>Status</Form.Label>
      <select class="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option></option>
          <option>Activated</option>
          <option>pendding</option>
        </select>
      <Button variant="primary" type="submit" onClick={addShop}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Shopadd