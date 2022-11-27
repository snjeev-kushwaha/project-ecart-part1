import React, { useState } from 'react';
import { Button, Form, Input } from "antd";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [fullname, setFullname] = useState({
        email: '',
        phone_no: '',
        password: ''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFullname((preValue)=>{
            return {
                ...preValue,
                [name]: value
            }
        })
    }
const submitData = async(e) =>{
    e.preventDefault()
    const data ={
        email: fullname.email,
        phone_no: fullname.phone_no,
        password: fullname.password
    }
    const reqData ={
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    }
    await fetch('http://localhost:5050/register', reqData)
    .then((response)=>console.log(`Data Submitted${response.status}`))
      navigate('/login')
}

    return (
        <>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">
                        <Form>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username!",
                                    },
                                ]}
                            >
                                <Input type='text' name="email" value={fullname.email} onChange={handleChange} />
                            </Form.Item>

                            <Form.Item
                                label="Phone_No"
                                name="phone_no"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username!",
                                    },
                                ]}
                            >
                                <Input type='text' name="phone_no" value={fullname.phone_no} onChange={handleChange} />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                ]}
                            >
                                <Input.Password name="password" value={fullname.password} onChange={handleChange} />
                            </Form.Item>
                            <Button type="primary" block onClick={submitData}>
                            Sign Up
                            </Button>
                        </Form>
                    </h5>
                </div>
            </div></>
    );
}

export default Register;
