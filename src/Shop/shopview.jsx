import React, { useState,useEffect } from 'react';
import './shop.css';
import { Country, State, City } from "country-state-city";
import {Modal, Form, Button} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

function Shopview() {

  let [data, setData] = useState([]);
  let [search, setSearch] = useState('');
  let [filteredshop, setFilteredShop] = useState([]);

  let [Reg_no, setReg_no] = useState('');
  let[shop_id, setShop_id] = useState('');
  let[shop_name, setShop_name] = useState('');
  let [address, setAddress] = useState('');
  let [country, setCountry] = useState('');
  let [state, setState] = useState('');
  let [city, setCity] = useState('');
  let [pincode, setPincode] =useState('');
  let [contact, setContact] = useState('');
  let [owner, setOwner] = useState('');
  let [type, setType] = useState('');
  let [email, setEmail] = useState('');
  let [url, setUrl] = useState('');
  let [gst, setGst] = useState('');
  let [turnover, setTurnover] = useState('');
  let [description, setDescription] = useState('');
  let[terms_condition, setTerms_condition]= useState('');
  let[status, setStatus] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

function submitData(Reg_no,shop_id,shop_name,address,country,state,city,pincode,contact,owner,type,email,url,gst,turnover,description,terms_condition,status){
      handleShow();
      setReg_no(Reg_no);
      setShop_id(shop_id);
      setShop_name(shop_name);
      setAddress(address);
      setCountry(country);
      setState(state);
      setCity(city);
      setPincode(pincode);
      setContact(contact);
      setOwner(owner);
      setType(type);
      setEmail(email);
      setUrl(url);
      setGst(gst);
      setTurnover(turnover);
      setDescription(description);
      setTerms_condition(terms_condition);
      setStatus(status);
    }

  // get api
  
  async function displayShop(){
    let response = await fetch(`http://localhost:5050/shop_registration/shop_registration`, {method: "GET"})
    let Udata = await response.json()
    setData(Udata.response);
    setFilteredShop(Udata.response)
}

 // delete api

  function deleteShop(Reg_no){
      fetch(`http://localhost:5050/shop_registration/shop_registration/${Reg_no}`,{
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
      displayShop();
    }

  // put api
  
  function updateShop() {
    let data1 ={Reg_no,shop_id,shop_name,address,country,state,city,pincode,contact,owner,type,email,url,gst,turnover,description,terms_condition,status}

   let reqData = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1)
    }
    fetch(`http://localhost:5050/shop_registration/shop_registration/${Reg_no}`, reqData)
    .then((result)=>{
      result.json().then((res)=>{
        // console.warn(res);
        Swal.fire({
          title: 'Sweet!',
          text: 'Shop is updated',
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
      })
    })
    displayShop();
  }

  const columns = [
    {
      name: "Reg.no",
      selector: row=> row.Reg_no,
      sortable: true,
    },
    {
      name: "Shop_id",
      selector: row=> row.shop_id,
      sortable: true,
    },
    {
      name: "Shop_name",
      selector: row=> row.shop_name,
      sortable: true,
    },
    {
      name: "Address",
      selector: row=> row.address
    },
    {
      name: "Country",
      selector: row=> row.country
    },
    {
      name: "State",
      selector: row=> row.state
    },
    {
      name: "City",
      selector: row => row.city
    },
   {
    name: "Pincode",
    selector: row => row.pincode
   },
   {
    name: "Contact",
    selector: row=> row.contact
   },
   {
    name: "Shop_owner",
    selector: row => row.owner
   },
   {
    name: "Shop_type",
    selector: row =>row.type
   },
   {
    name: "Email",
    selector: row=> row.email
   },
   {
    name: "Url",
    selector: row=> row.url
   },
   {
    name: "Gst",
    selector: row=> row.gst
   },
   {
    name: "Ternover",
    selector: row => row.turnover
   },
   {
    name: "Description",
    selector: row=> row.description
   },
   {
    name: "Term_condition",
    selector: row=> row.terms_condition
   },
   {
    name: "Status",
    selector: row => row.status
   },
   {
    name: "Edit",
    cell: row=><Button variant="success" onClick={() => submitData(row.Reg_no,row.shop_id,row.shop_name,row.address,row.country,row.state,row.city,row.pincode,row.contact,row.owner,row.type,row.email,row.url,row.gst,row.turnover,row.description,row.terms_condition,row.status)}><i class="bi bi-pencil"></i></Button>
   },
   {
    name: "Delete",
    cell: row=>{ 
    return (<Button onClick={() => deleteShop(row.Reg_no)} variant="danger"><i class="bi bi-trash"></i></Button>)
   }
   }
  ]

  useEffect(() =>{
    displayShop();
  }, [])

  useEffect(() => {
    let result = data.filter(value => {
      return value.shop_name.toLowerCase().match(search.toLowerCase());
    })
    setFilteredShop(result);
  }, [search]);
  
    return (
      <>
      <div style={{marginLeft: "187px"}}>
      <Row style={{marginTop:"20px"}}>
        <Col xs={12} md={10}>
        Shop_Registration
        </Col>
        <Col xs={6} md={2}>
          <Button variant="success"><Link to="/shopadd" style={{color:"white",textDecoration:"none"}}><i class="bi bi-plus" style={{fontSize:"20px"}}></i>Add Shop</Link></Button>
        </Col>
      </Row>
        <DataTable
        columns={columns}
        data = {filteredshop}
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
        value = {search}
        onChange = {(e) => setSearch(e.target.value)}
        />
      }
        />
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shop Regisration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
        <Col><Form.Label>Registration Number</Form.Label>
        <Form.Control type="text" value={Reg_no} onChange={(e) =>setReg_no(e.target.value)} /></Col>
        <Col><Form.Label>Shop_id</Form.Label>
        <Form.Control type="text" value={shop_id} onChange={(e) =>setShop_id(e.target.value)} /></Col>
      </Row>
      <Row>
        <Col><Form.Label>Shop_name</Form.Label>
        <Form.Control type="text" value={shop_name} onChange={(e)=>setShop_name(e.target.value)} /></Col>
        <Col><Form.Label>Address</Form.Label>
        <Form.Control type="text" value={address} onChange={(e) =>setAddress(e.target.value)} /></Col>
      </Row>
      <Row>
        <Col>
        <Form.Label>Country</Form.Label>
            <select
              class="form-select"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
        </Col>
        <Col>
        <Form.Label>State</Form.Label>
            {country && (
            <select
              class="form-select"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">State</option>
              {State && 
              State.getStatesOfCountry(country).map((item) => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>
              ))}
            </select>
            )}
            </Col>
      </Row>
      <Row>
        <Col>
        <Form.Label>City</Form.Label>
            {city && (
              <select
              class="form-select"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">City</option>
              {City &&
              City.getCitiesOfState(country,state).map((item) => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>

                ))}
              
            </select>
            )}
        </Col>
        <Col><Form.Label>Pincode</Form.Label>
        <Form.Control type="text" value={pincode} onChange={(e) =>setPincode(e.target.value)} />
        </Col>
      </Row>
      <Row> 
        <Col><Form.Label>Contact</Form.Label>
        <Form.Control type="text" value={contact} onChange={(e) =>setContact(e.target.value)} /></Col>
        <Col><Form.Label>Show_owner</Form.Label>
        <Form.Control type="text" value={owner} onChange={(e) => setOwner(e.target.value)} /></Col>
      </Row>
      <Row>
        <Col><Form.Label>Shop_type</Form.Label>
        <select class="form-select" value={type} onChange={(e) => setType(e.target.value)}>
          <option></option>
          <option>Electritions</option>
          <option>Grocery</option>
          <option>General store</option>
          <option>Footwere</option>
        </select>
        </Col>
        <Col><Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) =>setEmail(e.target.value)} /></Col>
      </Row>
      <Row>
        <Col><Form.Label>URL</Form.Label>
        <Form.Control type="text" value={url} onChange={(e) =>setUrl(e.target.value)} /></Col>
        <Col><Form.Label>GST</Form.Label>
        <Form.Control type="text" value={gst} onChange={(e) =>setGst(e.target.value)} /></Col>
      </Row>
      <Row>
        <Col><Form.Label>Ternover</Form.Label>
        <Form.Control type="text" value={turnover} onChange={(e) => setTurnover(e.target.value)} /></Col>
        <Col><Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} onChange={(e) =>setDescription(e.target.value)} /></Col>
      </Row>
      <Row> 
        <Col><Form.Label>Term-condition</Form.Label>
        <Form.Control type="text" value={terms_condition} onChange={(e) =>setTerms_condition(e.target.value)} /></Col>
        <Col>
        <Form.Label>Status</Form.Label>
        <select class="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option></option>
          <option>Activated</option>
          <option>Pendding</option>
        </select>
        </Col>
      </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateShop}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  )
}

export default Shopview


// import React, { useState,useEffect } from 'react';
// import './shop.css';
// import Table from 'react-bootstrap/Table';
// import {Modal, Form, Button} from 'react-bootstrap';
// import {Row, Col} from 'react-bootstrap';
// function Shopview() {
//   let [data1, setData1] = useState([]);
//   let [Reg_no, setReg_no] = useState('');
//   let[shop_id, setShop_id] = useState('');
//   let[shop_name, setShop_name] = useState('');
//   let [address, setAddress] = useState('');
//   let [state, setState] = useState('');
//   let [city, setCity] = useState('');
//   let [pincode, setPincode] =useState('');
//   let [contact, setContact] = useState('');
//   let [owner, setOwner] = useState('');
//   let [type, setType] = useState('');
//   let [email, setEmail] = useState('');
//   let [url, setUrl] = useState('');
//   let [gst, setGst] = useState('');
//   let [ternover, setTernover] = useState('');
//   let [description, setDescription] = useState('');
//   let[term_condition, setTerm_condition]= useState('');
//   let[status, setStatus] = useState('');
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);

// function submitData(Reg_no,shop_id,shop_name,address,state,city,pincode,contact,owner,type,email,url,gst,ternover,description,term_condition,status){
//       setShow(true);
//       setReg_no(Reg_no);
//       setShop_id(shop_id);
//       setShop_name(shop_name);
//       setAddress(address);
//       setState(state);
//       setCity(city);
//       setPincode(pincode);
//       setContact(contact);
//       setOwner(owner);
//       setType(type);
//       setEmail(email);
//       setUrl(url);
//       setGst(gst);
//       setTernover(ternover);
//       setDescription(description);
//       setTerm_condition(term_condition);
//       setStatus(status);
//     }

//   // get api

//   useEffect(() =>{
//     async function displayShop(){
//       let response = await fetch(`http://localhost:5050/shop_registration/shop_registration`, {method: "GET"})
//       let Udata = await response.json()
//       setData1(Udata.response);
//   }displayShop();
//   }, [])

  
//  // delete api

//   function deleteShop(Reg_no){
//       fetch(`http://localhost:5050/shop_registration/shop_registration/${Reg_no}`,{
//         method:"DELETE"
//       })
//       .then((res)=>{
//         if(res.status === 200){
//           alert("userdeleted")
//         }
//       })
//     }

//   // put api
  
//   function updateShop() {
//     let data1 ={Reg_no,shop_id,shop_name,address,state,city,pincode,contact,owner,type,email,url,gst,ternover,description,term_condition,status}

//    let reqData = {
//       method: "PUT",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data1)
//     }
//     fetch(`http://localhost:5050/shop_registration/shop_registration/${Reg_no}`, reqData)
//     .then((result)=>{
//       result.json().then((res)=>{
//         console.warn(res)
//       })
//     })
//   }

//     return (
//     <div className='container'>
//        <Table striped bordered hover className='shoptable'>
//       <thead>
//         <tr>
//           <th>Reg.no</th>
//           <th>Shop_id</th>
//           <th>Shop_name</th>
//           <th>Address</th>
//           <th>State</th>
//           <th>City</th>
//           <th>Pincode</th>
//           <th>Contact</th>
//           <th>Shop_owner</th>
//           <th>Shop_type</th>
//           <th>Email</th>
//           <th>URL</th>
//           <th>GST</th>
//           <th>Ternover</th>
//           <th>Description</th>
//           <th>Term & condition</th>
//           <th>Status</th>
//           <th>Edit</th>
//           <th>Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data1.map((item, index) =>{
//           return(
//         <tr key={index}>
//         <td>{item.Reg_no}</td>
//           <td>{item.shop_id}</td>
//           <td>{item.shop_name}</td>
//           <td>{item.address}</td>
//           <td>{item.state}</td>
//           <td>{item.city}</td>
//           <td>{item.pincode}</td>
//           <td>{item.contact}</td>
//           <td>{item.owner}</td>
//           <td>{item.type}</td>
//           <td>{item.email}</td>
//           <td>{item.url}</td>
//           <td>{item.gst}</td>
//           <td>{item.ternover}</td>
//           <td>{item.description}</td>
//           <td>{item.term_condition}</td>
//           <td>{item.status}</td>
//           <td><Button variant="success" onClick={() => submitData(item.Reg_no,item.shop_id,item.shop_name,item.address,item.state,item.city,item.pincode,item.contact,item.owner,item.type,item.email,item.url,item.gst,item.ternover,item.description,item.term_condition,item.status)}>Update</Button></td>
//              <td><Button onClick={() => deleteShop(item.Reg_no)} variant="danger">Delete</Button></td>
//         </tr>
//           )
//         })}
//       </tbody>
//     </Table>
//     <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Row>
//         <Col><Form.Label>Registration Number</Form.Label>
//         <Form.Control type="text" value={Reg_no} onChange={(e) =>setReg_no(e.target.value)} /></Col>
//         <Col><Form.Label>Shop_id</Form.Label>
//         <Form.Control type="text" value={shop_id} onChange={(e) =>setShop_id(e.target.value)} /></Col>
//       </Row>
//       <Row>
//         <Col><Form.Label>Shop_name</Form.Label>
//         <Form.Control type="text" value={shop_name} onChange={(e)=>setShop_name(e.target.value)} /></Col>
//         <Col><Form.Label>Address</Form.Label>
//         <Form.Control type="text" value={address} onChange={(e) =>setAddress(e.target.value)} /></Col>
//       </Row>
//       <Row>
//         <Col><Form.Label>State</Form.Label>
//         <select class="form-select" value={state} onChange ={(e) =>setState(e.target.value)}>
//           <option></option>
//           <option>Madhya pradesh</option>
//           <option>Uttar pradesh</option>
//           <option>Gujrat</option>
//           <option>Maharastra</option>
//         </select>
//         </Col>
//         <Col><Form.Label>City</Form.Label>
//         <select class="form-select" value={city} onChange ={(e) =>setCity(e.target.value)}>
//           <option></option>
//           <option>Bhopal</option>
//           <option>Indore</option>
//           <option>Mumbai</option>
//           <option>jabalpur</option>
//         </select>
      
//         </Col>
//       </Row>
//       <Row>
//         <Col><Form.Label>Pincode</Form.Label>
//         <Form.Control type="text" value={pincode} onChange={(e) =>setPincode(e.target.value)} /></Col>
//         <Col><Form.Label>Contact</Form.Label>
//         <Form.Control type="text" value={contact} onChange={(e) =>setContact(e.target.value)} /></Col>
//       </Row>
//       <Row>
//         <Col><Form.Label>Show_owner</Form.Label>
//         <Form.Control type="text" value={owner} onChange={(e) => setOwner(e.target.value)} /></Col>
//         <Col><Form.Label>Shop_type</Form.Label>
//         <select class="form-select" value={type} onChange={(e) => setType(e.target.value)}>
//           <option></option>
//           <option>Electritions</option>
//           <option>Grocery</option>
//           <option>General store</option>
//           <option>Footwere</option>
//         </select>
//         </Col>
//       </Row>
//       <Row>
//         <Col><Form.Label>Email</Form.Label>
//         <Form.Control type="email" value={email} onChange={(e) =>setEmail(e.target.value)} /></Col>
//         <Col><Form.Label>URL</Form.Label>
//         <Form.Control type="text" value={url} onChange={(e) =>setUrl(e.target.value)} /></Col>
//       </Row>
//       <Row>
//         <Col><Form.Label>GST</Form.Label>
//         <Form.Control type="text" value={gst} onChange={(e) =>setGst(e.target.value)} /></Col>
//         <Col><Form.Label>Ternover</Form.Label>
//         <Form.Control type="text" value={ternover} onChange={(e) => setTernover(e.target.value)} /></Col>
//       </Row>
//       <Row>
//         <Col><Form.Label>Description</Form.Label>
//         <Form.Control type="text" value={description} onChange={(e) =>setDescription(e.target.value)} /></Col>
//         <Col><Form.Label>Term-condition</Form.Label>
//         <Form.Control type="text" value={term_condition} onChange={(e) =>setTerm_condition(e.target.value)} /></Col>
//       </Row>
//       <Form.Label>Status</Form.Label>
//       <select class="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
//         <option></option>
//           <option>Activated</option>
//           <option>Pendding</option>
//         </select>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={updateShop}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>

//   )
// }

// export default Shopview