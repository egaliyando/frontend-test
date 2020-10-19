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
    <div className="form-wrapper">
      <h1>Sign In</h1>
      <form>
        <div className="form-item">
          <label for="email"></label>
          <input onChange={handleChange} name="username" type="text" placeholder="Username" />
          {/* <input type="email" name="email" required="required" placeholder="Email Address"></input> */}
        </div>
        <div className="form-item">
          <label for="password"></label>
          <input onChange={handleChange} name="password" type="text" placeholder="Password" />
          {/* <input type="password" name="password" required="required" placeholder="Password"></input> */}
        </div>
        <div className="button-panel">
          <button className="button" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
