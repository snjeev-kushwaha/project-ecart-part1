import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";

function Categoryview() {

  let[data1, setData1] = useState([]);
  let [category_id, setCatgory_id] =useState('');
  let[category_name, setCategory_name] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = (category_id, category_name) => 

  function submitData (category_id, category_name) {
    setShow(true);
    setCatgory_id(category_id);
    setCategory_name(category_name);
  }

  //  get api
useEffect(() =>{
  async function displayCategory(){
    let response = await fetch("http://localhost:5050/product_category/product_category")
    let Udata = await response.json()
    setData1(Udata.response);
}displayCategory();
}, [])
  
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
  }
  
  return (
    <>
    <div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Category_id</th>
          <th>Category_name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data1.map((item, index) =>{
          return(
            <>
            <tr key={index}>
            <td>{item.category_id}</td>
            <td>{item.category_name}</td>
            <td><Button variant="success" onClick={() => submitData(item.category_id,item.category_name)}>Update</Button></td>
             <td><Button onClick={() => deleteOffer(item.category_id)} variant="danger">Delete</Button></td>
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
          </tr>
          </>
          )
        })}
      </tbody>
    </Table>
    </div>
    
    </>
  )
}

export default Categoryview