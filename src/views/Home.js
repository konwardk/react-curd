import React, {useState} from "react";
import Login from '../views/Login';
import Register from '../views/Register';
export default function Home() {
  // const name = "Dipankor";
  // state to track login and registration form
  const [isLogin, setIsLogin] = useState(true);

  //Toggle form
  const ToggleForm =() =>{
    setIsLogin((prev)=>!prev);
  };
  return (
    <>
    {isLogin ? (
      <Login/>
    ): (
      <Register/>
    )}
    <button onClick={ToggleForm}>
        {isLogin ? "Switch to Register" : "Switch to Login"}
      </button>
    </>
  );
}
