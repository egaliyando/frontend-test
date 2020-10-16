import React from "react";

function SignOut(props) {
  const token = localStorage.token;
  const handleSignOut = async () => {
    localStorage.removeItem("token");
    props.history.push("/sign-in");
  };
  return (
    <div>
      <p>Token :{token}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default SignOut;
