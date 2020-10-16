import React from "react";
import Sidebar from "./Sidebar";

function Main(props) {
  return (
    <>
      <div className="content">
        <Sidebar />
        <div className="side-right">{props.content}</div>
      </div>
      ;
    </>
  );
}

export default Main;
