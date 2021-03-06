import React from "react";
import Main from "ui/containers/Main";
import Header from "ui/containers/Header";
import { IcProduct, IcDevice, IcArrow, IcStatistic, IcInfo } from "assets/icons";
import { Link } from "react-router-dom";
import { Slide } from "react-reveal";

function Outlets(props) {
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
  const getNavigationActive = (path) => {
    return props.location.pathname === path
      ? "d-flex align-items-center py-2 px-3 active text-decoration-none"
      : "d-flex align-items-center py-2 px-3 text-decoration-none";
  };
  const content = (
    <>
      <Header content={contentHeader} style="header sh-header h81" />

      <Slide left>
        <div className="content02">
          <div className="card01 p-4 bg-card01 br-20 mt-3 mx-4 active">
            <div className="w-100 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="wrap-img01 mr-4"></div>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <p className="bg-purple py-1 px-2 mr-2 text-white fw-200 font-14 br-20">GS</p>
                    <h1 className="font-24">Gading Serpong</h1>
                  </div>
                  <p className="font-14 text-gray mt-2">
                    BSD Raya Utama, Ruko Mendrisio, Jl. Boulevard Raya Gading
                    <br />
                    Serpong No.33, Tangerang, Banten, 15332, Indonesia
                  </p>
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
                      style={{ color: "#110f48" }}
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
                      style={{ color: "#110f48" }}
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
                      style={{ color: "#110f48" }}
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
                      style={{ color: "#110f48" }}
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
      </Slide>
    </>
  );
  return <Main content={content} />;
}

export default Outlets;
