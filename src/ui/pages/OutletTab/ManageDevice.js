import React from "react";
import Main from "ui/containers/Main";
import Header from "ui/containers/Header";
import { IcProduct, IcDevice, IcArrow, IcStatistic, IcInfo } from "assets/icons";
import { Link } from "react-router-dom";
import Slide from "react-reveal";

function ManageDevice(props) {
  const getNavigationActive = (path) => {
    return props.location.pathname === path
      ? "d-flex align-items-center py-2 px-3 active text-decoration-none"
      : "d-flex align-items-center py-2 px-3 text-decoration-none";
  };
  const contentHeader = (
    <>
      <h1 className="font-24">Outlets</h1>
      <div className="d-flex align-items-center">
        <div className="wrap-select mr-3">
          <select className="form-control mr-3 br-20 br-dark-blue">
            <option>Filter</option>
            <option>Filter</option>
          </select>
          <img src={require("assets/images/outlet/arrow-down.png")} alt="" />
        </div>

        <div className="wrap-search mr-3">
          <input type="text" className="form-control br-20 br-dark-blue" placeholder="Search" />
          <img src={require("assets/images/outlet/icon-search.png")} alt="" />
        </div>

        <button className="sh-btn btn bg-red d-flex align-items-center text-white fw-200 br-20 px-3 sh-btn">
          <img className="mr-2" src={require("assets/images/outlet/icon-add.png")} alt="" />
          <span className="font-17 fw-500">add new outlet</span>
        </button>
      </div>
    </>
  );
  const content = (
    <>
      <Header content={contentHeader} style="header sh-header h81" />
      <div className="d-flex">
        <div className="content02-50">
          <div className="card01 p-4 bg-card01 br-20 mt-3 mx-4 active">
            <div className="w-100 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <p className="bg-purple py-1 px-2 mr-2 text-white fw-200 font-14 br-20">GS</p>
                    <h1 className="font-24">Gading Serpong</h1>
                  </div>
                  <div className="my-4"></div>
                  <div className="d-flex flex-column mt-3">
                    <div className="d-flex align-items-center">
                      <img className="mr-3" src={require("assets/images/outlet/product.png")} alt="" />
                      <p className="font-14 text-dark-blue fw-500">10 products</p>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <img className="mr-3" src={require("assets/images/outlet/Devices.png")} alt="" />
                      <p className="font-14 text-dark-blue fw-500">5 devices</p>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <img className="mr-3" src={require("assets/images/outlet/user.png")} alt="" />
                      <p className="font-14 text-dark-blue fw-500">10 employees</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column mt-3">
                <Link to="/outlets/manage-product" className={`${getNavigationActive("/outlets/manage-product")}`}>
                  <div className="d-flex w-100 align-items-center mr-5">
                    <IcProduct color={props.location.pathname === "/outlets/manage-product" ? "white" : "#110F48"} />

                    <p
                      style={{ color: "black" }}
                      className={
                        props.location.pathname === "/outlets/manage-product"
                          ? "text-white font-14 fw-500"
                          : "font-14 fw-500"
                      }
                    >
                      Manage products
                    </p>
                  </div>
                  <IcArrow color={props.location.pathname === "/outlets/manage-product" ? "white" : "#110F48"} />
                </Link>

                <Link to="/outlets/manage-device" className={`${getNavigationActive("/outlets/manage-device")}`}>
                  <div className="d-flex w-100 align-items-center mr-5">
                    <IcDevice color={props.location.pathname === "/outlets/manage-device" ? "white" : "#110F48"} />

                    <p
                      style={{ color: "black" }}
                      className={
                        props.location.pathname === "/outlets/manage-device"
                          ? "text-white font-14 fw-500"
                          : "font-14 fw-500"
                      }
                    >
                      Manage Devices
                    </p>
                  </div>
                  <IcArrow color={props.location.pathname === "/outlets/manage-device" ? "white" : "#110F48"} />
                </Link>

                <Link to="/outlets/statistik" className={`${getNavigationActive("/outlets/statistik")}`}>
                  <div className="d-flex w-100 align-items-center mr-5">
                    <IcStatistic color={props.location.pathname === "/outlets/statistik" ? "white" : "#110F48"} />

                    <p
                      style={{ color: "black" }}
                      className={
                        props.location.pathname === "/outlets/statistik"
                          ? "text-white font-14 fw-500"
                          : "font-14 fw-500"
                      }
                    >
                      See statistics & reports
                    </p>
                  </div>
                  <IcArrow color={props.location.pathname === "/outlets/statistik" ? "white" : "#110F48"} />
                </Link>

                <Link to="/outlets/detail-info" className={`${getNavigationActive("/outlets/detail-info")}`}>
                  <div className="d-flex w-100 align-items-center mr-5">
                    <IcInfo color={props.location.pathname === "/outlets/detail-info" ? "white" : "#110F48"} />

                    <p
                      style={{ color: "black" }}
                      className={
                        props.location.pathname === "/outlets/detail-info"
                          ? "text-white font-14 fw-500"
                          : "font-14 fw-500"
                      }
                    >
                      Outlet details & info
                    </p>
                  </div>
                  <IcArrow color={props.location.pathname === "/outlets/detail-info" ? "white" : "#110F48"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="content02-40 pb-3 mx-5">
          <div className="card01 mx-4 active">
            <Slide right>
              <div className="bg-card01 mt-3 br-20 p-3 position-fixed vh-100" style={{ width: "40%", right: "24px" }}>
                <div className="d-flex justify-content-between">
                  <h1 className="font-24">Manage devices</h1>
                  <img src={require("assets/images/Close.png")} alt="" />
                </div>
                <hr />
                <div className="d-flex align-items-center p-2 bg-dark-blue br-20 pr-3" style={{ width: "fit-content" }}>
                  <img className="mr-2" src={require("assets/images/outlet/icon-add.png")} alt="" />
                  <p className="font-14 text-white fw-100">Add new devices</p>
                </div>

                <div className="d-flex justify-content-between flex-wrap">
                  <div className="wrap-card01 mt-3 mr-3" style={{ minWidth: "123px" }}>
                    <div className="card01 bg-green">
                      <div className="sub-card">
                        <h1 className="font-36">#19</h1>
                      </div>
                      <p className="font-12 text-white">95.190.40.124</p>
                    </div>
                    <p className="font-14 mt-1">Waroeng Batavia</p>
                    <div className="d-flex align-items-start mt-1">
                      <div className="bullet2 bg-green mr-1"></div>
                      <p className="text-gray text-left font-12">Online</p>
                    </div>
                  </div>
                  <div className="wrap-card01 mt-3 mr-3" style={{ minWidth: "123px" }}>
                    <div className="card01 bg-green">
                      <div className="sub-card">
                        <h1 className="font-36">#19</h1>
                      </div>
                      <p className="font-12 text-white">95.190.40.124</p>
                    </div>
                    <p className="font-14 mt-1">Waroeng Batavia</p>
                    <div className="d-flex align-items-start mt-1">
                      <div className="bullet2 bg-green mr-1"></div>
                      <p className="text-gray text-left font-12">Online</p>
                    </div>
                  </div>
                  <div className="wrap-card01 mt-3 mr-3" style={{ minWidth: "123px" }}>
                    <div className="card01 bg-green">
                      <div className="sub-card">
                        <h1 className="font-36">#19</h1>
                      </div>
                      <p className="font-12 text-white">95.190.40.124</p>
                    </div>
                    <p className="font-14 mt-1">Waroeng Batavia</p>
                    <div className="d-flex align-items-start mt-1">
                      <div className="bullet2 bg-green mr-1"></div>
                      <p className="text-gray text-left font-12">Online</p>
                    </div>
                  </div>
                  <div className="wrap-card01 mt-3 mr-3" style={{ minWidth: "123px" }}>
                    <div className="card01 bg-green">
                      <div className="sub-card">
                        <h1 className="font-36">#19</h1>
                      </div>
                      <p className="font-12 text-white">95.190.40.124</p>
                    </div>
                    <p className="font-14 mt-1">Waroeng Batavia</p>
                    <div className="d-flex align-items-start mt-1">
                      <div className="bullet2 bg-green mr-1"></div>
                      <p className="text-gray text-left font-12">Online</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
  return <Main content={content} />;
}

export default ManageDevice;
