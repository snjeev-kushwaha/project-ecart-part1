import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
// import Link from 'react-router-dom';

function Subcategoryview() {

  let [data, setData] = useState([]);

  let [search, setSearch] = useState('');
  let [filteredsubcategories, setFilterSubcategories] = useState([]);

  let [category_id, setCategory_id] = useState("");
  let [sub_category_id, setSub_category_id] = useState("");
  let [sub_category_name, setSub_category_name] = useState("");

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
    function submitData(category_id, sub_category_id, sub_category_name){
    setCategory_id(category_id);
    setSub_category_id(sub_category_id);
    setSub_category_name(sub_category_name);
    handleShow();
    }
// console.log(data1)

// get api    

  async function getData() {
    let response = await fetch(
      "http://localhost:5050/product_subcategory/product_subcategory",
      { method: "GET" }
    );
    let udata = await response.json();
    setData(udata.response);
    setFilterSubcategories(udata.response);
  }

  // delete api

  function deleteSubcategory(sub_category_id) {
    fetch(
      `http://localhost:5050/product_subcategory/product_subcategory/${sub_category_id}`,
      { method: "DELETE" }
    ).then((res) => {
      if ((res.status = 200)) {
        // alert("user deleted");
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          confirmButtonText: 'Yes, delete it!'
        })
      }
    });
    getData();
  }

  // put api
  
  function updateSubcategory() {
    let data1 ={category_id, sub_category_id,sub_category_name}

   let reqData = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1)
    }
    fetch(`http://localhost:5050/product_subcategory/product_subcategory/${sub_category_id}`, reqData)
    .then((result)=>{
      result.json().then((res)=>{
        console.warn(res);
        Swal.fire({
          title: 'Sweet!',
          text: 'Sub_Category list is updated',
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
      })
    })
    getData();
  }

  const columns =[
    {
      name: "Category_id",
      selector: row =>row.category_id,
    },
    {
      name: "Sub_category_id",
      selector:row => row.sub_category_id,
    },
    {
      name: "Sub_category_name",
      selector:row => row.sub_category_name,
      sortable: true,
    },
    {
      name:"Edit",
    cell : row=><Button className='btn-btn success' onClick={() => submitData(row.category_id, row.sub_category_id, row.sub_category_name)}><i class="bi bi-pencil"></i></Button>
    },
    {
      name:'Delete',
      cell : row=>{return (<Button variant="danger" onClick={() => deleteSubcategory(row.category_id)}><i class="bi bi-trash"></i>
     </Button>)}
    }
  ]


  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let result = data.filter(value => {
      return value.sub_category_name.toLowerCase().match(search.toLowerCase());
    })
    setFilterSubcategories(result);
  }, [search])
 
  return (
    <>
    <div className='container'>
    <Row style={{marginTop:"20px"}}>
        <Col xs={12} md={9}>
          Sub_Category List
        </Col>
        <Col xs={6} md={3}>
        <Button variant="success"><a href="/subcategoryadd" style={{color:"white",textDecoration:"none"}}><i class="bi bi-plus" style={{fontSize:"20px"}}></i>Addsubcategory</a></Button>
        </Col>
      </Row>
    <DataTable 
        columns ={columns}
        data= {filteredsubcategories}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={<input type="search"
        placeholder="search here"
        className="w-25 form-control"
        value ={search}
        onChange = {(e) => setSearch(e.target.value)}
       />
      } 
    />
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Udata subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Category_id</Form.Label>
          <Form.Control
            type="text"
            value={category_id}
            onChange={(e) => setCategory_id(e.target.value)}
          />
          <Form.Label>Sub_Category_id</Form.Label>
          <Form.Control
            type="text"
            value={sub_category_id}
            onChange={(e) => setSub_category_id(e.target.value)}
          />
          <Form.Label>Sub_Category_name</Form.Label>
          <Form.Control
            type="text"
            value={sub_category_name}
            onChange={(e) => setSub_category_name(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateSubcategory}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  </>
  );
}

export default Subcategoryview;
