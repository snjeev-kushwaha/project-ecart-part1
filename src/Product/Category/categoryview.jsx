import React, { useEffect, useState } from "react";
import './category.css';
import { Modal, Form, Button, Row, Col} from "react-bootstrap";
import DataTable from 'react-data-table-component';
// import Link from 'react-router-dom';
function Categoryview() {

  let[data1, setData1] = useState([]);
  let [category_id, setCatgory_id] =useState('');
  let[category_name, setCategory_name] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submitData (category_id, category_name) {
    setCatgory_id(category_id);
    setCategory_name(category_name);
    handleShow();
  }

  //  get api
useEffect(() =>{
  displayCategory();
}, [])
async function displayCategory(){
  let response = await fetch("http://localhost:5050/product_category/product_category")
  let Udata = await response.json()
  setData1(Udata.response);
}
  
// delete api
function deleteOffer(category_id){
    fetch(`http://localhost:5050/product_category/product_category/${category_id}`,{
      method:"DELETE"
    })
    .then((res)=>{
      if(res.status === 200){
        alert("userdeleted")
        
      }
    })
    displayCategory();
  }

  //put api

  function updateCategory() {
    let data1 ={category_id, category_name}

   let reqData = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1)
    }
    fetch(`http://localhost:5050/product_category/product_category/${category_id}`, reqData)
    .then((result)=>{
      result.json().then((res)=>{
        console.warn(res)
      })
    })
    displayCategory();
  }
  
  const columns =[
    {
      name: 'Category_id',
      selector:row => row.category_id,
    },
    {
      name:'Category_name',
      selector: row=> row.category_name,
    },
    {
      name: "Edit",
      cell: row =><Button variant="success" onClick={() => submitData(row.category_id,row.category_name)}>Update</Button>
    },
    {
      name:"Delete",
      cell:(row) =>{
        return (<Button onClick={() => deleteOffer(row.category_id)} variant="danger">Delete</Button>)
      }
    }
  ]
  
  return (
    <>
   {/* <div>
   <Row>
        <Col xs={12} md={9} style={{fontSize:"bold"}}>
         Categories
        </Col>
        <Col xs={6} md={3}>
        <a href="/dashboard">Dashboard</a> / categories
        </Col>
      </Row>
   </div> */}
    <div className="container">
    <Row style={{marginTop:"20px"}}>
        <Col xs={12} md={10}>
          Category List
        </Col>
        <Col xs={6} md={2}>
        <Button variant="success"><a href="/categoryadd">Add category</a></Button>
        </Col>
      </Row>
      <DataTable
      columns= {columns}
      data = {data1}
      pagination
      fixedHeader
      highlightOnHover
      />
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Category_id</Form.Label>
        <Form.Control type="text" value={category_id} onChange={(e) => setCatgory_id(e.target.value)} />
        
        <Form.Label>Category_name</Form.Label>
        <Form.Control type="text" value={category_name} onChange={(e) => setCategory_name(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateCategory}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Categoryview

