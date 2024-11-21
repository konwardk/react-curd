import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import Login from '../Login';
import Register from '../Register';

export default function guest() {
  const [isLogin, setIsLogin] = useState(true);
  const ToggleForm =()=>{
    setIsLogin((prev)=>!prev);
  }
  return (
    <>
    <h3>Welcome to Guest Page</h3>
    <Button onClick={ToggleForm}>Sign Up</Button>
    {isLogin ? (
      <Login/>
    ): (
      <Register/>
    )}
    </>
  )
}
