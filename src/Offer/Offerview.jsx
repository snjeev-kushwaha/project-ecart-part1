import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
function Offerview() {

  let [data, setData] = useState([]);
  let [search, setSearch] = useState('');
  let [filteredoffer, setFilteredOffer] = useState([]);

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
  const handleShow = () => setShow(true);
    
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
      handleShow();
    
    }

  // get api

  async function displayOffer() {
    let response = await fetch("http://localhost:5050/offer/offer");
    let Udata = await response.json();
    setData(Udata.response);
    setFilteredOffer(Udata.response)
  }

  // delete api

  function deleteOffer(offer_id) {
    fetch(`http://localhost:5050/offer/offer/${offer_id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        // alert("userdeleted");
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          confirmButtonText: 'Yes, delete it!'
        })
      }
    });
    displayOffer();
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
        // console.warn(res);
        Swal.fire({
          title: 'Sweet!',
          text: 'Offers is updated',
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
      })
    })
    displayOffer();
  }

  const columns =[
    {
      name : "Offer_id",
      selector: (row)=> row.offer_id,
      sortable: true,
    },
    {
      name : "Coupan_code",
      selector: (row)=> row.coupan_code,
      sortable: true,
    },
    {
      name : "From_date",
      selector: (row) => row.From_date,
    },
    {
      name : "To_date",
      selector: (row)=> row.to_date,
    },{
      name : "DiscountPersentage",
      selector: (row)=> row.discountPersentage,
    },
    {
      name : "Flat_discount",
      selector: (row) => row.flat_discount,
    },
    {
      name : "Valid_in",
      selector: (row) => row.valid_in,
    },
    {
      name : "Additional_offers",
      selector: (row) => row.additional_offers,
    },
    {
      name: "Edit",
      cell: (row)=><Button variant="success" onClick={() =>{submitData(row.offer_id,row.coupan_code,row.From_date,row.to_date,row.discountPersentage,row.flat_discount,row.valid_in,row.additional_offers)}}><i class="bi bi-pencil"></i></Button>,
    },
    {
      name: "Delete",
      cell: (row) =>{return (<Button onClick={() => deleteOffer(row.offer_id)} variant="danger"><i class="bi bi-trash"></i></Button>)}
    }

  ]

  useEffect(() => {
    displayOffer();
  }, []);

  useEffect(() => {
    let result = data.filter(value => {
      return value.additional_offers.toLowerCase().match(search.toLowerCase());
    })
    setFilteredOffer(result);
  }, [search]);

  return (
    <>
    <div style={{marginLeft:"185px"}}>
    <Row>
        <Col xs={12} md={10}>
          Offer List
        </Col>
        <Col xs={6} md={2}>
        <Button variant="success"><Link to="/offeradd" style={{color:"white",textDecoration:"none"}}><i class="bi bi-plus" style={{fontSize:"20px"}}></i>Add Offer</Link></Button>
        </Col>
      </Row>
    <DataTable
    columns={columns}
    data={filteredoffer}
    pagination
    fixedHeader
    fixedHeaderScrollHeight="380px"
    selectableRows
    selectableRowsHighlight
    highlightOnHover
    subHeader
    subHeaderComponent={<input type="search" 
    placeholder="search here" 
    className="w-25 form-control" 
    value={search}
    onChange = {(e) => setSearch(e.target.value)}
    />
  }
    />
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Offer_zone</Modal.Title>
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
          <select class="form-select" value={valid_in} onChange={(e) =>setValid_in(e.target.value)}>
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
      </div>
    </>
  );
}

export default Offerview;
