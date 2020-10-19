import React, { useState } from "react";
import { signIn } from "store/actions/signIn";

function Login(props) {
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
    <div className="content-login">
      <img className="bg-1" src={require("assets/images/14.png")} alt="img" />
      <img className="bg-2" src={require("assets/images/12.png")} alt="img" />
      <div className="form-login">
        <div className="d-flex align-items-center justify-content-between">
          {/* <img src={require("assets/images/14.png")} alt="img" /> */}
          <div className="d-flex align-items-center">
            {/* <img className="mr-1" src={require("assets/images/12.png")} alt="img" /> */}
            <h1 className="mb-0" style={{ color: "#42D0CA" }}>
              Welcome admin!
            </h1>
          </div>
        </div>
        <hr className="mt-4 mb-5" />
        <input onChange={handleChange} name="username" className="form-control" type="text" placeholder="Username" />
        <input
          onChange={handleChange}
          name="password"
          className="form-control mt-4"
          type="text"
          placeholder="Password"
        />

        <button className="btn text-white mt-5 w-100 py-3" onClick={handleSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
