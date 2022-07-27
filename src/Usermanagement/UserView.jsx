import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import {Button, Modal} from 'react-bootstrap';
function UserView() {
 let [ data1, setData1] = useState([]);
 let [user_Id, setUser_Id] = useState();
 let [fullname,setFullname] = useState();
 let [dateofjoin, setDateofjoin] = useState();
 let [password, setPassword] = useState();
 let [dept, setDept] = useState();
 let [role, setRole] = useState();
 let [status, setStatus] = useState('');
 
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

function setData(status){
   handleShow();
   setStatus(status)
}

 useEffect(() =>{
    fetchData();
 },[])

 // GET api

 async function fetchData(){
    let response = await fetch('http://localhost:5050/user/user', {method :"GET"});
    let Udata = await response.json();
    setData1(Udata.response);
 }

 // Delete api
 function deleteUser(user_id){
    fetch(`http://localhost:5050/user/user/${user_id}`, {
    method: "DELETE"
})
.then((res) =>{
    if(res.status === 200)
    alert("user deleted")
})
}

 // put api

 function updateUser(user_id){
    let data = (user_Id,fullname,dateofjoin,password,dept,role,status)
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
 }

 const columns =[
    {
        name: "User_Id",
        selector: row=> row.user_Id
    },
    {
        name: "Fullname",
        selector: row=> row.fullname
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
        cell: row=>{return (<Button varient="primary" onClick={() => setData(row.user_Id)}>Edit</Button>)}
    }
 ]

  return (
    <>
    <div className='container'>
   <DataTable 
   title = "User"
   columns={columns}
   data = {data1}
   pagination
   fixedHeader
   highlightOnHover
   />
    </div>
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
</>
  )
}

export default UserView