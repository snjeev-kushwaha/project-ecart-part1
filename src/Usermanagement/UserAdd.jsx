import {Form, Button, Row, Col} from 'react-bootstrap';
import './user.css';
function UserManagement(){
    return(
        <>
        <div className='user'>
          <h4>User Management From</h4>
        <Form>
        <Form.Label>User_Id</Form.Label>
        <Form.Control type="text" />
        <Form.Label>Full_name</Form.Label>
        <Form.Control type="text" />
      <Row>
        <Col><Form.Label>Date of join</Form.Label>
        <Form.Control type="date" /></Col>
        <Col><Form.Label>Password</Form.Label>
        <Form.Control type="password" /></Col>
      </Row>
      <Row>
        <Col><Form.Label>Department</Form.Label>
        <Form.Control type="text" /></Col>
        <Col><Form.Label>Role</Form.Label>
        <Form.Control type="text" /></Col>
      </Row>
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" />
        
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
        </>
    )
}
export default UserManagement