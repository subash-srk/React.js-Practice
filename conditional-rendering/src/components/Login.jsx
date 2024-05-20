import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <Input type="text" ph="Username" />
      <Input type="text" ph="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
