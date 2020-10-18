import React from "react";
import Main from "ui/containers/Main";
import Header from "ui/containers/Header";
import { Link } from "react-router-dom";

function DevicesPreview() {
  const contentHeader = (
    <>
      <div className="d-flex bg-light-gray flex-column w-100 pt-4 pb-2 px-4 bg-white pb-3">
        <Link to="/devices">Back</Link>
      </div>
    </>
  );

  const content = (
    <>
      <Header content={contentHeader} style="header sh-header" />
      {/* CONTENT */}
    </>
  );
  return <Main content={content} />;
}

export default DevicesPreview;
