import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Form, Input } from "antd";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login1() {
  const navigate = useNavigate()

  const [fullname, setFullname] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setFullname({ ...fullname, [name]: value })
  }

  const submitData = async (e) => {
    e.preventDefault()
    const { email, password } = fullname
    const apiData = { email, password }

    const response = await axios.post(`http://localhost:5050/login`, apiData)
    console.log('response', response.data)
    if (response.data.status === 200) {
      localStorage.setItem('token', response.data.token)
      navigate('/')
    }
  }

  return (
    <>
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4 p-2" style={{ backgroundColor: "#2874f0" }}>
                <div>
                  <h3>Login</h3>
                  <p>
                    Get access to your Orders, Wishlist and Recommendations
                  </p>
                </div>
                <img src="https://ebizfiling.com/wp-content/uploads/2022/02/FLIPKART.png" class="img-fluid rounded-start pt-5" alt="..." />
              </div>
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
                        Login
                      </Button>
                      <center><h6>OR</h6></center>
                      <Button block>Sign Up</Button>

                    </Form>
                  </h5>
                  <p class="card-text pt-3">
                    <Link style={{ textDecoration: "none", color: "gray" }} to="/register">New to E-cart? create an account</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}

export default Login1;
