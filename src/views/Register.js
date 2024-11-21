import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Register() {
    return (
        <div className="container mt-5">
            <div className='d-flex justify-content-center w-100'>
                <Form className='border p-5 rounded'>
                    <h3 className='text-center'>Register</h3>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter the name" name="uname" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter the email" name="email" />
                        <Form.Text className='text-danger message'>Email is invalid</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter the password" name="password" />
                        <Form.Text className='text-danger message'>Password must contain 8 Characters</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter the password" name="password" />
                        <Form.Text className='text-danger message'>Password is not matching</Form.Text>
                    </Form.Group>
                    <div className='submit-btn mt-2 text-center'>
                        <Button className='' variant="primary" type="submit">
                            Register
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Register;
