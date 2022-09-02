import React,{ useState } from "react";
import {Navigate} from "react-router-dom";
import Form from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import loginService from "../Api/Services/Log";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [navigate, setNavigate] = useState(false);

const submit = async (e) => {
    e.preventDefault();
    const data = {
        email,
        password
    };
    try{
        const response = await loginService.login(data);
        console.log(response);
        setNavigate(true);
        if(response.status === 200) return setNavigate(true);
        if(navigate) return <Navigate to="/dashboard" /> ;
    } catch (e) {
        console.log(e.getMessage());
        
    }
}

    
    return (
    <div className="col-md-12">
        <div className="card card-container">
        <img
            src="https://images.unsplash.com/photo-1616596871445-bb8290a7a2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXNzb2NpYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="profile-img"
            className="profile-img-card"
        />
        <Form onSubmit={submit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>

        </div>
    </div>
    );
    }

export default Login;