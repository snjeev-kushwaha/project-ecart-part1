import React from 'react';
import './category.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
function Categoryadd() {

  let [category_id, setCatgory_id] = useState("");
  let [category_name, setCategory_name] = useState("");

  // post api
  
  function addCategory(){
    let userdata ={
      category_id: category_id,
      category_name: category_name
    }
    let reqData={
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(userdata)
    }
    fetch("http://localhost:5050/product_category/product_category", reqData)
    .then(response => console.log(`Data Submitted ${response.status}`))
  }
  
  return (
    <div className='addcategory'>
      <h1>Category from</h1>
      <Form>
        <Form.Label>Category_id</Form.Label>
        <Form.Control type="text" value={category_id} onChange={(e) => setCatgory_id(e.target.value)} />
        
        <Form.Label>Category_name</Form.Label>
        <Form.Control type="text" value={category_name} onChange={(e) => setCategory_name(e.target.value)} />
  
      <Button variant="primary" type="submit" onClick={addCategory}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Categoryadd