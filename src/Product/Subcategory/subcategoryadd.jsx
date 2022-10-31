import React from 'react';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './subcategory.css';
function Subcategoryadd() {
  
let [ data, setData] = useState([]);
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

 // get api category id
  
 async function displayCategory(){
  let res = await fetch("http://localhost:5050/product_category/product_category");
  let Udata = await res.json();
  setData(Udata.response);
}
useEffect(() =>{
  displayCategory();
}, [])

  return (
    <div className='subcategory'>
      <h1>Subcategory Form</h1>
      <Form>
      <Form.Label>CategoryName</Form.Label>
      <select className="form-select" type="text" placeholder='categoryname' value={category_id} onChange={(e) => setCategory(e.target.value)}>
      <option value="">--select category--</option>
      {
        data.map((item,index) =>{
          return (
            <option key={index} vlaue={item.category_id}>{item.category_id}</option>
          )
        })
      }
      </select>
      
      <Form.Label>SubCategory_id</Form.Label>
      <Form.Control type="text" value={sub_category_id} onChange={(e) => setSub_category_id(e.target.value)} />

      <Form.Label>SubCategory_Name</Form.Label>
      <Form.Control type="text" value={sub_category_name} onChange={(e) =>setSub_category_name(e.target.value)} /><br/>
    <Button variant="primary" onClick={addSubcategory}>
      Submit
    </Button>
  </Form>
    </div>
  )
}

export default Subcategoryadd