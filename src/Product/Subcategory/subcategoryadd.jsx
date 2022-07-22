import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './subcategory.css';
function Subcategoryadd() {
  
let [category_id, setCategory] = useState('');
let[sub_category_id, setSub_category_id] = useState('');
let[sub_category_name, setSub_category_name] = useState('');

// post api

function addSubcategory(){
  let userdata={

    category_id: category_id,
    sub_category_id: sub_category_id,
    sub_category_name: sub_category_name
  }
  let reqData={
    method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(userdata)
  }
  fetch("http://localhost:5050/product_subcategory/product_subcategory", reqData)
  .then(response => console.log(`data submitted${response.status}`))
}
  return (
    <div className='subcategory'>
      <h1>Subcategory Form</h1>
      <Form>
      <Form.Label>Category_id</Form.Label>
      <Form.Control type="text" value={category_id} onChange={(e) => setCategory(e.target.value)} />
      
      <Form.Label>SubCategory_id</Form.Label>
      <Form.Control type="text" value={sub_category_id} onChange={(e) => setSub_category_id(e.target.value)} />

      <Form.Label>SubCategory_Name</Form.Label>
      <Form.Control type="text" value={sub_category_name} onChange={(e) =>setSub_category_name(e.target.value)} /><br/>
    <Button variant="primary" type="submit" onClick={addSubcategory}>
      Submit
    </Button>
  </Form>
    </div>
  )
}

export default Subcategoryadd