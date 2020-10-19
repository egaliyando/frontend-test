import React, { useState } from "react";
import Main from "ui/containers/Main";
import Header from "ui/containers/Header";
import { Slide } from "react-reveal";
import { Link } from "react-router-dom";

function Devices() {
  const dataParent = [
    {
      id: 1,
      name: "Gading Serpong",
    },
    {
      id: 2,
      name: "Bandar Sunwhay",
    },
    {
      id: 3,
      name: "Kota bahru",
    },
  ];
  const data = [
    {
      id: 1,
      ip: "95.190.40.124",
      name: "Waroeng Batavia",
      status: "Need attention / Offline",
    },
    {
      id: 2,
      ip: "95.190.40.124",
      name: "Waroeng Batavia",
      status: "Online",
    },
    {
      id: 3,
      ip: "95.190.40.124",
      name: "Waroeng Batavia",
      status: "Online",
    },
    {
      id: 4,
      ip: "95.190.40.124",
      name: "Waroeng Batavia",
      status: "Online",
    },
    {
      id: 5,
      ip: "95.190.40.124",
      name: "Waroeng Batavia",
      status: "Online",
    },
    {
      id: 6,
      ip: "95.190.40.124",
      name: "Waroeng Batavia",
      status: "Online",
    },
    {
      id: 7,
      ip: "95.190.40.124",
      name: "Waroeng Batavia",
      status: "Online",
    },
    {
      id: 8,
      ip: "95.190.40.124",
      name: "Waroeng Batavia",
      status: "Online",
    },
    {
      id: 9,
      ip: "95.190.40.124",
      name: "Waroeng Batavia",
      status: "Online",
    },
  ];
  const [modalAddDevice, setmodalAddDevice] = useState(false);
  const [deviceInfo, setdeviceInfo] = useState(false);
  const handlemodalAddDevice = () => {
    setmodalAddDevice(!modalAddDevice);
  };
  const handleModalInfo = () => {
    setdeviceInfo(!deviceInfo);
  };
  const contentHeader = (
    <>
      <div className="d-flex flex-column w-100 pt-4 pb-2 px-4 bg-white pb-3">
        <div className="w-100 d-flex justify-content-between">
          <div className="wrap-select mr-3" style={{ width: "13%" }}>
            <select className="form-control br-20 font-24 border-0 font-weight-bold fw-700">
              <option>Devices</option>
              <option>Filter</option>
            </select>
            {/* <img src={require("assets/images/product/arrow-bottom.png")} alt="" /> */}
          </div>

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

            <button
              onClick={handlemodalAddDevice}
              className="btn bg-red d-flex align-items-center text-white fw-200 br-20 px-3 sh-btn"
            >
              <img className="mr-2" src={require("assets/images/outlet/icon-add.png")} alt="" />
              <span className="font-17 fw-500">add new devices</span>
            </button>
          </div>
        </div>
        <div className="d-flex align-items-center mt-4">
          <div className="d-flex align-items-center mr-4">
            <div className="bullet2 bg-gray mr-2"></div>
            <p className="fw-500 font-14">All devices: 25 devices</p>
          </div>

          <div className="d-flex align-items-center mr-4">
            <div className="bullet2 bg-green mr-2"></div>
            <p className="fw-500 font-14">Online: 23 devices</p>
          </div>

          <div className="d-flex align-items-center mr-4">
            <div className="bullet2 bg-dark-blue mr-2"></div>
            <p className="fw-500 font-14">Turned off: 1 device</p>
          </div>

          <div className="d-flex align-items-center mr-4">
            <div className="bullet2 bg-red mr-2"></div>
            <p className="fw-500 font-14">Need attention: 1 device</p>
          </div>
        </div>

        <div className="d-flex align-items-center mt-3">
          <div className="bg-white br-purple font-12 text-purple py-1 px-3 br-20 mr-2 fw-500">Gading Serpong</div>
          <div className="bg-white br-red font-12 text-red py-1 px-3 br-20 mr-2 fw-500">Bandar Sunway</div>
          <div className="bg-white br-verdant font-12 text-verdant py-1 px-3 br-20 mr-2 fw-500">Kota Bahru</div>
          <div className="bg-white br-green font-12 text-green py-1 px-3 br-20 mr-2 fw-500">Waroeng Batavia</div>
          <div className="bg-white br-verdant font-12 text-verdant py-1 px-3 br-20 mr-2 fw-500">Shah Alam</div>
        </div>
      </div>
    </>
  );

  const content = (
    <>
      <Header content={contentHeader} style="header sh-header" />
      {/* CONTENT */}
      <div className="devices mx-5">
        {dataParent.map((parent) => {
          return (
            <div className="bg-light-gray p-3 br-20 mt-5 mb-5" key={parent.id}>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <p className="bg-purple py-1 px-2 mr-2 text-white fw-200 font-14 br-20 mt-1 fw-500">GS</p>
                  <h1 className="font-24 fw-700 mr-4">{parent.name}</h1>
                </div>

                <button className="btn bg-red d-flex align-items-center text-white fw-200 br-20 px-3 sh-btn">
                  <img className="mr-2" src={require("assets/images/outlet/icon-add.png")} alt="" />
                  <span className="font-14 fw-500">Add new device at this outlet</span>
                </button>
              </div>

              <div className="d-flex align-items-center mt-4">
                <div className="d-flex align-items-center mr-4">
                  <div className="bullet2 bg-gray mr-2"></div>
                  <p className="fw-500 font-14">All devices: 25 devices</p>
                </div>

                <div className="d-flex align-items-center mr-4">
                  <div className="bullet2 bg-green mr-2"></div>
                  <p className="fw-500 font-14">Online: 23 devices</p>
                </div>

                <div className="d-flex align-items-center mr-4">
                  <div className="bullet2 bg-dark-blue mr-2"></div>
                  <p className="fw-500 font-14">Turned off: 1 device</p>
                </div>

                <div className="d-flex align-items-center mr-4">
                  <div className="bullet2 bg-red mr-2"></div>
                  <p className="fw-500 font-14">Need attention: 1 device</p>
                </div>
              </div>
              <hr />
              <div className="scrol-card p-3">
                {data.map((data) => {
                  return (
                    <div key={data.id} className="wrap-card01" onClick={handleModalInfo}>
                      <div className={data.status === "Need attention / Offline" ? "card01 bg-red" : "card01 bg-green"}>
                        <div className="sub-card">
                          <h1 className="font-36 fw-700">#{data.id}</h1>
                        </div>
                        <p className="font-12 text-white fw-500">{data.ip}</p>
                      </div>
                      <p className="font-14">{data.name}</p>
                      <div className="d-flex align-items-start">
                        <div
                          className={
                            data.status === "Need attention / Offline" ? "bullet2 bg-red mr-1" : "bullet2 bg-green mr-1"
                          }
                        ></div>
                        <p className="text-gray text-left font-12">{data.status}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link to="/devices/preview">
                <div className="w-100 d-flex align-items-center justify-content-end">
                  <h1 className="text-red font-18 font-weight-bold mr-2">Device interface preview</h1>
                  <img src={require("assets/images/devices/play.png")} alt="" />
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {deviceInfo ? (
        <>
          <div onClick={handleModalInfo} className="overlay-modal" style={{ display: "block" }}></div>
          <Slide right>
            <div className="modal-right p-4" style={{ display: "block" }}>
              <div className="w-100 d-flex justify-content-between">
                <h1 className="font-weight-bold font-24">Device information</h1>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center mr-5">
                    <p className="fw-500 font-18 mr-2 text-gray">Report issue</p>
                    <img src={require("assets/images/product/alert-triangle.png")} alt="" />
                  </div>
                  <div className="d-flex align-items-center mr-5">
                    <p className="fw-500 font-18 mr-2 text-gray">Delete device</p>
                    <img src={require("assets/images/product/trash (3).png")} alt="" />
                  </div>
                  <img onClick={handleModalInfo} src={require("assets/images/product/Close (1).png")} alt="" />
                </div>
              </div>
              <hr className="my-3 mx-0" />
              <div className="d-flex justify-content-between align-items-start py-3 px-5">
                <div className="d-flex flex-column w-50">
                  <div className="d-flex align-items-center">
                    <p className="font-14 text-gray w-50 ws-nwrap">Device code</p>
                    <input className="form-control br-20 br-dark-blue" placeholder="Martabak Manis" />
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <p className="font-14 text-gray w-50 ws-nwrap">Serial number</p>
                    <input className="form-control br-20 br-dark-blue" placeholder="MTB-001" />
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <p className="font-14 text-gray w-50 ws-nwrap">IP address</p>

                    <input className="form-control br-20 br-dark-blue" placeholder="MTB-001" />
                  </div>
                </div>

                <div className="d-flex flex-column w-50 pl-5">
                  <div className="d-flex align-items-center">
                    <p className="font-14 text-red w-50 ws-nwrap">
                      <u>Device outlet</u>
                    </p>
                    <div className="wrap-select">
                      <select className="form-control br-20 br-dark-blue">
                        <option>Martabak</option>
                        <option>Martabak</option>
                      </select>
                      <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <p className="font-14 text-gray w-50 ws-nwrap">Device status</p>
                    <div className="wrap-select">
                      <select className="form-control br-20 br-dark-blue">
                        <option>Martabak</option>
                        <option>Martabak</option>
                      </select>
                      <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-3 mx-0" />

              <div className="d-flex justify-content-between">
                <p className="font-18 fw-500 text-gray">Device log history</p>
                <button className="bg-dark-blue br-20 text-white font-14 d-flex align-items-center py-1 px-3">
                  <img className="mr-2" src={require("assets/images/outlet/icon-add.png")} alt="" />
                  Add new log
                </button>
              </div>

              <div className="bg-card01 br-20 p-3 d-flex align-items-center mt-3">
                <p className="font-14 fw-500 text-gray">17/08/2020 - 04:35 PM</p>
                <div className="hr-right mx-4"></div>
                <p className="fw-500 font-14">Device “#26” successfully added to “Gading Serpong” Outlet</p>
              </div>

              <button
                className="btn text-white bg-red br-20 position-absolute"
                style={{ right: "20px", bottom: "20px" }}
              >
                <p className="fw-500 font-18">Save Updates</p>
              </button>
            </div>
          </Slide>
        </>
      ) : (
        ""
      )}
      {modalAddDevice ? (
        <>
          <div onClick={handlemodalAddDevice} className="overlay-modal" style={{ display: "block" }}></div>
          <Slide right>
            <div className="modal-right p-4" style={{ display: "block" }}>
              <div className="w-100 d-flex justify-content-between">
                <h1 className="font-weight-bold font-24">Add Devices</h1>
                <img onClick={handlemodalAddDevice} src={require("assets/images/product/Close (1).png")} alt="" />
              </div>
              <hr className="my-3 mx-0" />
              <div className="d-flex justify-content-between align-items-start bg-card01 br-20 py-3 px-5">
                <div className="d-flex flex-column w-50">
                  <div className="d-flex align-items-center">
                    <p className="font-14 text-gray w-50 ws-nwrap">Device code</p>
                    <input className="form-control br-20 br-dark-blue" placeholder="Martabak Manis" />
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <p className="font-14 text-gray w-50 ws-nwrap">Serial number</p>
                    <input className="form-control br-20 br-dark-blue" placeholder="MTB-001" />
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <p className="font-14 text-gray w-50 ws-nwrap">IP address</p>

                    <input className="form-control br-20 br-dark-blue" placeholder="MTB-001" />
                  </div>
                </div>

                <div className="d-flex flex-column w-50 pl-5">
                  <div className="d-flex align-items-center">
                    <p className="font-14 text-red w-50 ws-nwrap">
                      <u>Device outlet</u>
                    </p>
                    <div className="wrap-select">
                      <select className="form-control br-20 br-dark-blue">
                        <option>Martabak</option>
                        <option>Martabak</option>
                      </select>
                      <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <p className="font-14 text-gray w-50 ws-nwrap">Device status</p>
                    <div className="wrap-select">
                      <select className="form-control br-20 br-dark-blue">
                        <option>Martabak</option>
                        <option>Martabak</option>
                      </select>
                      <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn w-100 text-white d-flex bg-dark-blue align-items-center justify-content-center br-20 mt-3">
                <img className="mr-2" src={require("assets/images/outlet/icon-add.png")} alt="" />
                <p className="fw-500 font-14">Add another device</p>
              </button>

              <button
                className="btn text-white bg-red br-20 position-absolute"
                style={{ right: "20px", bottom: "20px" }}
              >
                <p className="fw-500 font-18">Finish add devices</p>
              </button>
            </div>
          </Slide>
        </>
      ) : (
        ""
      )}
    </>
  );
  return <Main content={content} />;
}

export default Devices;
