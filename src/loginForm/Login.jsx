import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { Button, Checkbox, Form, Input } from "antd";
function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4 p-2" style={{backgroundColor:"#2874f0"}}>
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
                        label="Username"
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input />
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
                        <Input.Password />
                      </Form.Item>

                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                          offset: 8,
                          span: 16,
                        }}
                      >
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item>

                      
                        <Button type="primary" block>
                          Login
                        </Button>
                        <center><h6>OR</h6></center>
                        <Button block>Request OTP</Button>
                      
                    </Form>
                  </h5>
                  <p class="card-text pt-3">
                   <Link style={{textDecoration:"none",color:"gray"}} to="/">New to E-cart? create an account</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
