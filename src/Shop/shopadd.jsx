import React from "react";
import "./shop.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Country, State, City } from "country-state-city";

function Shopadd() {
  let [reg_no, setReg_no] = useState("");
  let [shop_id, setShop_id] = useState("");
  let [shop_name, setShop_name] = useState("");
  let [address, setAddress] = useState("");
  let [country, setCountry] = useState("");
  let [state, setState] = useState([]);
  let [city, setCity] = useState([]);
  let [pincode, setPincode] = useState("");
  let [contact, setContact] = useState("");
  let [owner, setOwner] = useState("");
  let [type, setType] = useState("");
  let [email, setEmail] = useState("");
  let [url, setUrl] = useState("");
  let [gst, setGst] = useState("");
  let [turnover, setTurnover] = useState("");
  let [description, setDescription] = useState("");
  let [terms_condition, setTerms_condition] = useState("");
  let [status, setStatus] = useState("");

  // post api

  function addShop() {
    let userdata = {
      Reg_no: reg_no,
      shop_id: shop_id,
      shop_name: shop_name,
      address: address,
      country: country,
      state: state,
      city: city,
      pincode: pincode,
      contact: contact,
      owner: owner,
      type: type,
      email: email,
      url: url,
      gst: gst,
      turnover: turnover,
      description: description,
      terms_condition: terms_condition,
      status: status,
    };

    let reqData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userdata),
    };
    fetch(
      "http://localhost:5050/shop_registration/shop_registration",
      reqData
    ).then((response) => console.log(`Data Submitted${response.status}`));
  }

  return (
    <div className="shopadd">
      <h2>Shop Registraion from</h2>
      <Form>
        <Row>
          <Col>
            <Form.Label>Registration Number</Form.Label>
            <Form.Control
              type="text"
              value={reg_no}
              onChange={(e) => setReg_no(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Shop_id</Form.Label>
            <Form.Control
              type="text"
              value={shop_id}
              onChange={(e) => setShop_id(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Shop_name</Form.Label>
            <Form.Control
              type="text"
              value={shop_name}
              onChange={(e) => setShop_name(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Country</Form.Label>
            <select
              class="form-select"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </Col>
          <Col>
            <Form.Label>State</Form.Label>
            {country && (
            <select
              class="form-select"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">State</option>
              {State && 
              State.getStatesOfCountry(country).map((item) => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>
              ))}
            </select>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>City</Form.Label>
            {city && (
              <select
              class="form-select"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">City</option>
              {City &&
              City.getCitiesOfState(country,state).map((item) => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>

                ))}
              
            </select>
            )}
            
          </Col>
          <Col>
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Show_owner</Form.Label>
            <Form.Control
              type="text"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Shop_type</Form.Label>
            <select
              class="form-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option></option>
              <option>Electritions</option>
              <option>Grocery</option>
              <option>General store</option>
              <option>Footwere</option>
            </select>
          </Col>
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>URL</Form.Label>
            <Form.Control
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>GST</Form.Label>
            <Form.Control
              type="text"
              value={gst}
              onChange={(e) => setGst(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Turn Over</Form.Label>
            <Form.Control
              type="text"
              value={turnover}
              onChange={(e) => setTurnover(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Term-condition</Form.Label>
            <Form.Control
              type="text"
              value={terms_condition}
              onChange={(e) => setTerms_condition(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Status</Form.Label>
            <select
              class="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option></option>
              <option>Activated</option>
              <option>pendding</option>
            </select>
          </Col>
        </Row>
        <Button variant="primary" type="submit" onClick={addShop}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Shopadd;
