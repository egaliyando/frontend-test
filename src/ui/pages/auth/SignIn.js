import React, { useState } from "react";
import { signIn } from "store/actions/auth";

function SignIn(props) {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSignIn = async () => {
    signIn(data);
    props.history.push("/");
  };
  return (
    <div>
      <input onChange={handleChange} name="username" type="text" placeholder="username" />
      <input onChange={handleChange} name="password" type="text" placeholder="password" />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;
