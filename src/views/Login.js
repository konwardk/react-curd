import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    return (
        <div className="container mt-5">
            <div className='d-flex justify-content-center w-100'>
                <Form className='border p-5 rounded'>
                    <h3 className='text-center'>Login</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter the email" name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter the password" name="password" />
                    </Form.Group>
                    <div className='submit-btn mt-2'>
                        <Button className='' variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;
