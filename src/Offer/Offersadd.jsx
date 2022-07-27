import React from 'react';
import './offer.css';
import { useState } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
function OfferAdd() {

  let [offer_id, setOffer_id] = useState('');
  let[coupan_code, setCoupan_code] = useState('');
  let[from_date, setFrom_date] = useState('');
  let [to_date, setTo_date] = useState('');
  let [discountPersentage, setDiscountPersentage] = useState('');
  let [flat_discount, setFlat_discount] = useState('');
  let [valid_in, setValid_in] = useState('');
  let [additional_offers, setAdditional_offers] = useState('');

  // post api
  
  function addOffer(){

    let userdata ={
      offer_id: offer_id,
      coupan_code: coupan_code,
      From_date: from_date,
      to_date:to_date,
      discountPersentage:discountPersentage,
      flat_discount: flat_discount,
      valid_in: valid_in,
      additional_offers: additional_offers
    }
    let reqData={
      method: "POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(userdata)
    }
    fetch("http://localhost:5050/offer/offer", reqData)
    .then(response => console.log(`Data Submitted ${response.status}`))
  }

  return (
    <div className='addoffer'>
      <h1>Offer form</h1>
      <Form>
        <Form.Label>Offer_Id</Form.Label>
        <Form.Control type="text" value={offer_id}
        onChange={(e) => setOffer_id(e.target.value)} />
        <Form.Label>Coupan_Code</Form.Label>
        <Form.Control type="text" value={coupan_code} onChange={(e) =>setCoupan_code(e.target.value)} />
      <Row>
        <Col><Form.Label>From_date</Form.Label>
        <Form.Control type="date" value={from_date} onChange={(e) =>setFrom_date(e.target.value)} /></Col>
        <Col><Form.Label>To_date</Form.Label>
        <Form.Control type="date" value={to_date} onChange={(e) =>setTo_date(e.target.value)} /></Col>
      </Row>
      <Row>
        <Col><Form.Label>Discount Persentage</Form.Label>
        <Form.Control type="text" value={discountPersentage} onChange={(e) =>setDiscountPersentage(e.target.value)} /></Col>
        <Col><Form.Label>Flat Discount</Form.Label>
        <Form.Control type="text" value={flat_discount} onChange={(e) => setFlat_discount(e.target.value)} /></Col>
      </Row>
        <Form.Label>Valid_In</Form.Label>
        <select class="form-select" value={valid_in} onChange={(e) =>setValid_in(e.target.value)}>
          <option></option>
           <option>All India</option>
           <option>Indore</option>
           <option>Bhopal</option>
           <option>Jabalpur</option>
         </select>
        <Form.Label>Additional Offers</Form.Label>
        <Form.Control type="text" value={additional_offers} onChange={(e) =>setAdditional_offers(e.target.value)} />
    <br/>
      <Button variant="primary" type="submit" onClick={addOffer}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default OfferAdd