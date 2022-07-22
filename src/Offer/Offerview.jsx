import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Modal, Form, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function Offerview() {
  let [data, setData] = useState([]);
  let [offer_id, setOffer_id] = useState("");
  let [coupan_code, setCoupan_code] = useState("");
  let [From_date, setFrom_date] = useState("");
  let [to_date, setTo_date] = useState("");
  let [discountPersentage, setDiscountPersentage] = useState("");
  let [flat_discount, setFlat_discount] = useState("");
  let [valid_in, setValid_in] = useState("");
  let [additional_offers, setAdditional_offers] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
    
  function submitData(offer_id,
    coupan_code,
    From_date,
    to_date,
    discountPersentage,
    flat_discount,
    valid_in,
    additional_offers){
      setOffer_id(offer_id);
      setCoupan_code(coupan_code);
      setFrom_date(From_date);
      setTo_date(to_date);
      setDiscountPersentage(discountPersentage);
      setFlat_discount(flat_discount);
      setValid_in(valid_in);
      setAdditional_offers(additional_offers);
      setShow(true);
    
    }

  // get api

  useEffect(() => {
    async function displayOffer() {
      let response = await fetch("http://localhost:5050/offer/offer");
      let Udata = await response.json();
      setData(Udata.response);
    }
    displayOffer();
  }, []);

  // delete api

  function deleteOffer(offer_id) {
    fetch(`http://localhost:5050/offer/offer/${offer_id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        alert("userdeleted");
      }
    });
  }

  // put api
  
  function updateOffer() {
    let data1 ={offer_id,coupan_code,From_date,to_date,discountPersentage,flat_discount,valid_in,additional_offers}

   let reqData = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1)
    }
    fetch(`http://localhost:5050/offer/offer/${offer_id}`, reqData)
    .then((result)=>{
      result.json().then((res)=>{
        console.warn(res)
      })
    })
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Offer_id</th>
            <th>Coupan_code</th>
            <th>From_date</th>
            <th>To_date</th>
            <th>Discount_persentage</th>
            <th>Flat_discount</th>
            <th>Valid_in</th>
            <th>Bank Offers</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{item.offer_id}</td>
                  <td>{item.coupan_code}</td>
                  <td>{item.From_date}</td>
                  <td>{item.to_date}</td>
                  <td>{item.discountPersentage}</td>
                  <td>{item.flat_discount}</td>
                  <td>{item.valid_in}</td>
                  <td>{item.additional_offers}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() =>{
                       submitData(
                          item.offer_id,
                          item.coupan_code,
                          item.From_date,
                          item.to_date,
                          item.discountPersentage,
                          item.flat_discount,
                          item.valid_in,
                          item.additional_offers
                        )
                      }}
                    >
                      Update
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => deleteOffer(item.offer_id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>

                  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Offer_Id</Form.Label>
          <Form.Control
            type="text"
            value={offer_id}
            onChange={(e) => setOffer_id(e.target.value)}
          />
          <Form.Label>Coupan_Code</Form.Label>
          <Form.Control
            type="text"
            value={coupan_code}
            onChange={(e) => setCoupan_code(e.target.value)}
          />
          <Row>
            <Col>
              <Form.Label>From_date</Form.Label>
              <Form.Control
                type="text"
                value={From_date}
                onChange={(e) => setFrom_date(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>To_date</Form.Label>
              <Form.Control
                type="text"
                value={to_date}
                onChange={(e) => setTo_date(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Discount Persentage</Form.Label>
              <Form.Control
                type="text"
                value={discountPersentage}
                onChange={(e) => setDiscountPersentage(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>Flat Discount</Form.Label>
              <Form.Control
                type="text"
                value={flat_discount}
                onChange={(e) => setFlat_discount(e.target.value)}
              />
            </Col>
          </Row>
          <Form.Label>Valid_In</Form.Label>
          <select class="form-select">
            <option></option>
            <option>All India</option>
            <option>Indore</option>
            <option>Bhopal</option>
            <option>Jabalpur</option>
          </select>
          <Form.Label>Additional Offers</Form.Label>
          <Form.Control
            type="text"
            value={additional_offers}
            onChange={(e) => setAdditional_offers(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateOffer}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      
    </div>
  );
}

export default Offerview;
