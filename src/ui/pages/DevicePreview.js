import React from "react";
import Main from "ui/containers/Main";
import Header from "ui/containers/Header";
import { Link } from "react-router-dom";

function DevicesPreview() {
  const contentHeader = (
    <>
      <div className="d-flex align-items-center bg-light-gray w-100 py-3 pb-2">
        <img className="mr-1" src={require("assets/images/Arrow.png")} alt="" />
        <Link to="/devices" className="mr-3 text-gray">
          Back
        </Link>
        <h1 className="font-18 fw-700">Gading Serpong Outlet Device Preview</h1>
      </div>
    </>
  );

  const content = (
    <>
      <Header content={contentHeader} style="header sh-header px-0" />
      <div className="devicespriview p-4">
        <div className="row">
          <div className="col-8">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between">
                <div className="bg-dark-blue br-20 text-white p-4 d-flex align-items-start justify-content-between mr-3">
                  <p className="font-14 mr-2">
                    This preview is to provide you a better perspective and experience from your customers point of view
                    when they purchase your products and items at a specific outlet.
                  </p>

                  <img className="mr-1" src={require("assets/images/Close2.png")} alt="" />
                </div>
                <div className="bg-dark-blue br-20 text-white p-2 d-flex align-items-start p-4">
                  <p className="font-14 mr-2">
                    Use the tools and functions below to personalize and modify the interface and appearances of your
                    devices according to your preferences. Any changes made will be reflected on the preview on the
                    right side of the screen. Don’t forget to save your updates once you have made your changes.
                  </p>

                  <img className="mr-1" src={require("assets/images/Close2.png")} alt="" />
                </div>
              </div>
              <div className="d-flex justify-content-between bg-light-gray br-20 align-items-center py-2 px-3 mt-3">
                <div className="d-flex align-items-center">
                  <p className="font-18 mr-2 text-dark-blue">Color palette & theme</p>
                  <img src={require("assets/images/outlet/info.png")} alt="" />
                </div>
                <img src={require("assets/images/outlet/arrow-down.png")} alt="" />
              </div>
              <div className="d-flex justify-content-between bg-light-gray br-20 align-items-center py-2 px-3 mt-3">
                <div className="d-flex align-items-center">
                  <p className="font-18 mr-2 text-dark-blue">Category headlines</p>
                  <img src={require("assets/images/outlet/info.png")} alt="" />
                </div>
                <img src={require("assets/images/outlet/arrow-down.png")} alt="" />
              </div>
              <div className="d-flex justify-content-between bg-light-gray br-20 align-items-center py-2 px-3 mt-3">
                <div className="d-flex align-items-center">
                  <p className="font-18 mr-2 text-dark-blue">Layout & interface</p>
                  <img src={require("assets/images/outlet/info.png")} alt="" />
                </div>
                <img src={require("assets/images/outlet/arrow-down.png")} alt="" />
              </div>
              <div className="d-flex justify-content-between bg-light-gray br-20 align-items-center py-2 px-3 mt-3">
                <div className="d-flex align-items-center">
                  <p className="font-18 mr-2 text-dark-blue">Payment options</p>
                  <img src={require("assets/images/outlet/info.png")} alt="" />
                </div>
                <img src={require("assets/images/outlet/arrow-down.png")} alt="" />
              </div>
              <div className="d-flex justify-content-between bg-light-gray br-20 align-items-center py-2 px-3 mt-3">
                <div className="d-flex align-items-center">
                  <p className="font-18 mr-2 text-dark-blue">Widgets & accessories</p>
                  <img src={require("assets/images/outlet/info.png")} alt="" />
                </div>
                <img src={require("assets/images/outlet/arrow-down.png")} alt="" />
              </div>
              <div className="d-flex justify-content-between bg-light-gray br-20 align-items-center py-2 px-3 mt-3">
                <div className="d-flex align-items-center">
                  <p className="font-18 mr-2 text-dark-blue">Screensavers (Standby state)</p>
                  <img src={require("assets/images/outlet/info.png")} alt="" />
                </div>
                <img src={require("assets/images/outlet/arrow-down.png")} alt="" />
              </div>
              <div className="d-flex justify-content-between bg-light-gray br-20 align-items-center py-2 px-3 mt-3">
                <div className="d-flex align-items-center">
                  <p className="font-18 mr-2 text-dark-blue">Fonts</p>
                  <img src={require("assets/images/outlet/info.png")} alt="" />
                </div>
                <img src={require("assets/images/outlet/arrow-down.png")} alt="" />
              </div>
              <div className="d-flex justify-content-between bg-light-gray br-20 align-items-center py-2 px-3 mt-3">
                <div className="d-flex align-items-center">
                  <p className="font-18 mr-2 text-dark-blue">Language</p>
                  <img src={require("assets/images/outlet/info.png")} alt="" />
                </div>
                <img src={require("assets/images/outlet/arrow-down.png")} alt="" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <img className="w-100" src={require("assets/images/ganteng.png")} alt="" />
          </div>
        </div>
      </div>

      {/* CONTENT */}
    </>
  );
  return <Main content={content} />;
}

export default DevicesPreview;
