import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import './user.css';
import {Button, Modal, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function UserView() {

 let [ data, setData] = useState([]);
 let [ search, setSearch] = useState('');
 let [ filtereduser, setFilteredUser] = useState([]);

//  let [user_Id, setUser_Id] = useState();
//  let [fullname,setFullname] = useState();
//  let [dateofjoin, setDateofjoin] = useState();
//  let [password, setPassword] = useState();
//  let [dept, setDept] = useState();
//  let [role, setRole] = useState();
 let [status, setStatus] = useState('');
 
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

function selectData(status){
   handleShow();
   setStatus(status)
}

 // GET api

 async function fetchData(){
    let response = await fetch('http://localhost:5050/user/user', {method :"GET"});
    let Udata = await response.json();
    setData(Udata.response);
    setFilteredUser(Udata.response);
 }

 // Delete api
 
//  function deleteUser(user_id){
//     fetch(`http://localhost:5050/user/user/${user_id}`, {
//     method: "DELETE"
// })
// .then((res) =>{
//     if(res.status === 200)
//     alert("user deleted")
// })
// fetchData();
// }

 // put api

 function updateUser(user_id){
    let data = (status)
    let reqData ={
        method:"PUT",
       headers: {"Content-Type":"application/json"},
       body:JSON.stringify(data)
    }
    fetch(`http://localhost:5050/user/user/${user_id}`, reqData)
    .then((result)=>{
       result.json().then((res)=>{
        console.warn("user updated")
       })
    })
    fetchData();
    handleClose();
 }

 const columns =[
    {
        name: "User_Id",
        selector: row=> row.user_Id,
        sortable: true
    },
    {
        name: "Fullname",
        selector: row=> row.fullname,
        sortable: true
    },
    {
        name: "Dateofjoin",
        selector: row=> row.dateofjoin
    },
    {
        name: "password",
        selector: row=>row.password
    },
    {
        name:"Dept",
        selector: row=> row.dept
    },
    {
        name: "Role",
        selector: row=>row.role
    },
    {
        name: "Status",
        selector: row=> row.status
    },
    {
        name: "Action",
        cell: row=>{return (<Button varient="primary" onClick={() => selectData(row.user_Id)}><i class="bi bi-pencil"></i></Button>)}
    }
 ]

 useEffect(() =>{
  fetchData();
},[])

useEffect(() => {
  let result = data.filter(value => {
    return value.fullname.toLowerCase().match(search.toLowerCase());
  })
  setFilteredUser(result);
},[search]);
  return (
    <>
    <div>
    <Row>
        <Col xs={12} md={10}>Users</Col>
        <Col xs={6} md={2}><Button variant="success"><Link to="/useradd" style={{color:"white",textDecoration:"none"}}><i class="bi bi-plus"></i>Add User</Link></Button></Col>
      </Row>
    {/* <Row style={{marginTop:"20px"}}>
        <Col xs={6} md={9}>
          Users
        </Col>
        <Col xs={6} md={3}>
        <Button variant="success"><Link to="/userview" style={{color:"white",textDecoration:"none"}}><i class="bi bi-plus"></i>Add User</Link></Button>
        </Col>
      </Row> */}
   <DataTable 
   columns={columns}
   data = {filtereduser}
   pagination
   fixedHeader
   fixedHeaderScrollHeight="350px"
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
   <Modal.Title>User status</Modal.Title>
 </Modal.Header>
 <Modal.Body>

    <label>Change status</label>
    <select class="form-select" value={status} onChange ={(e) =>setStatus(e.target.value)}>
          <option></option>
          <option>Active</option>
          <option>Deactive</option>
        </select>
 </Modal.Body>
 <Modal.Footer>
   <Button variant="secondary" onClick={handleClose}>
     Close
   </Button>
   <Button variant="primary" onClick={updateUser}>
    Update Status
   </Button>
 </Modal.Footer>
</Modal>
</div>
</>
  )
}

export default UserView