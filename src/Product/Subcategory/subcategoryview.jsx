import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";
import { Button, Modal, Form } from "react-bootstrap";
function Subcategoryview() {
  let [data, setData] = useState([]);
  let [category_id, setCategory_id] = useState("");
  let [sub_category_id, setSub_category_id] = useState("");
  let [sub_category_name, setSub_category_name] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
    function submitData(category_id, sub_category_id, sub_category_name){
      setShow(true);
    setCategory_id(category_id);
    setSub_category_id(sub_category_id);
    setSub_category_name(sub_category_name);
    }
// console.log(data1)

// get api    

useEffect(() => {
    async function getData() {
      let response = await fetch(
        "http://localhost:5050/product_subcategory/product_subcategory",
        { method: "GET" }
      );
      let udata = await response.json();
      setData(udata.response);
    }
    getData();
  }, []);

  // delete api

  function deleteSubcategory(sub_category_id) {
    fetch(
      `http://localhost:5050/product_subcategory/product_subcategory/${sub_category_id}`,
      { method: "DELETE" }
    ).then((res) => {
      if ((res.status = 200)) {
        alert("user deleted");
      }
    });
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
    fetch(`http://localhost:5050/product_subcategory/product_subcategory/${category_id}`, reqData)
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
            <th>sub_category_id</th>
            <th>sub_category_name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => {
            console.log(item)
            return (
              <>
                <tr key={index}>
                  <td>{item.category_id}</td>
                  <td>{item.sub_category_id}</td>
                  <td>{item.sub_category_name}</td>
                  <td><Button className='btn-btn success' onClick={() => submitData(item.category_id, item.sub_category_id, item.sub_category_name)}>Update</Button></td>
                  <td>
                    <Button
                     variant="danger"
                      onClick={() => deleteSubcategory(item.category_id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      </div>
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
  </>
  );
}

export default Subcategoryview;
