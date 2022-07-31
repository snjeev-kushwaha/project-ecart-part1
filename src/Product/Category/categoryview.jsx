import React, { useEffect, useState } from "react";
import './category.css';
import { Modal, Form, Button, Row, Col} from "react-bootstrap";
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
function Categoryview() {

  let[data, setData] = useState([]);
  let [search, setSearch] = useState('');
  let [filteredcategories, setFilterCategories] = useState([]);

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


async function displayCategory(){
  let res = await fetch("http://localhost:5050/product_category/product_category");
  let Udata = await res.json();
  setData(Udata.response);
  // console.log(Udata.response)
  setFilterCategories(Udata.response);
}


// delete api
function deleteOffer(category_id){
    fetch(`http://localhost:5050/product_category/product_category/${category_id}`,{
      method:"DELETE"
    })
    .then((res)=>{
      if(res.status === 200){
        // alert("userdeleted")
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          confirmButtonText: 'Yes, delete it!'
        })
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
        console.warn(res);
        Swal.fire({
          title: 'Sweet!',
          text: 'Category list is updated',
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
      })
    })
    displayCategory();
  }
  
  const columns =[
    {
      name: 'Category_id',
      selector:(row) => row.category_id,
    },
    {
      name:'Category_name',
      selector: (row)=> row.category_name,
      sortable: true,
    },
    {
      name: "Edit",
      cell: (row) =><Button variant="success" onClick={() => submitData(row.category_id,row.category_name)} style={{onmouseOver:"blue"}}><i class="bi bi-pencil"></i></Button>
    },
    {
      name:"Delete",
      cell:(row) =>{
        return (<Button onClick={() => deleteOffer(row.category_id)} variant="danger"><i class="bi bi-trash"></i></Button>)
      }
    }
  ]

  useEffect(() =>{
    displayCategory();
  }, [])

  useEffect(() => {
const result = data.filter(value => {
  return value.category_name.toLowerCase().match(search.toLowerCase());
})
setFilterCategories(result);
  },[search])

  return (
    <>
    <div style={{marginLeft:"185px"}}>
    <Row>
        <Col xs={12} md={10}>
          Category List
        </Col>
        <Col xs={6} md={2}>
        <Button variant="success" style={{width:"180px",height:"40px"}}><Link to="/categoryadd" style={{color:"white",textDecoration:"none"}}><i class="bi bi-plus" style={{fontSize:"20px"}}></i>Addcategory</Link></Button>
        </Col>
      </Row>
      <DataTable
      columns= {columns}
      data = {filteredcategories}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="350px"
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      subHeader
      subHeaderComponent={
      <input type="search" 
      placeholder="search here" 
      className="w-25 form-control" 
      value={search}
      onChange={(e) =>setSearch(e.target.value)}
      />
      }
    />
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
    </div>
    </>
  )
}

export default Categoryview

