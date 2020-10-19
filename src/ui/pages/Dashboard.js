import React from "react";
import Main from "ui/containers/Main";
import Card from "ui/components/Card";
import ProgressBar from "ui/components/ProgressBar";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.token;

  const cardTransaction = (
    <div className="w-100 bg-light-gray p-4 br-20">
      <div className="d-flex justify-content-between">
        <p className="font-18 fw-500">Today‘s total sales</p>
        <img src={require("assets/images/Close.png")} alt="" />
      </div>
      <h1 className="font-24">Rp. 9,870,000</h1>
      <hr />
      <div className="d-flex justify-content-between mt-2">
        <p className="font-14 font-dark-blue fw-500">#INV-0183</p>
        <p className="font-14 font-dark-blue fw-500">Rp. 150,000</p>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="font-14 font-dark-blue fw-500">#INV-7201</p>
        <p className="font-14 font-dark-blue fw-500">Rp. 98,000</p>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="font-14 font-dark-blue fw-500">#INV-8011</p>
        <p className="font-14 font-dark-blue fw-500">Rp. 81,000</p>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="font-14 font-dark-blue fw-500">#INV-7745</p>
        <p className="font-14 font-dark-blue fw-500">Rp. 56,000</p>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="font-14 font-dark-blue fw-500">##INV-7745</p>
        <p className="font-14 font-dark-blue fw-500">Rp. 40,000</p>
      </div>
      <div className="d-flex align-center mt-4 w-100 justify-content-end">
        <p className="font-18 text-red position-relative" style={{ top: "1px" }}>
          See all transactions
        </p>
        <img src={require("assets/images/arrow-right.png")} alt="" />
      </div>
    </div>
  );

  const cardWaroeng = (
    <>
      <div className="sub-card">
        <h1 className="font-36">#19</h1>
      </div>
      <p className="font-12 text-white">95.190.40.124</p>
    </>
  );
  const content = (
    <>
      <div className="content-sr">
        <div className="d-flex align-items-center">
          <img className="mr-4" src={require("assets/images/brand.png")} alt="" />

          <div className="d-flex flex-column">
            <h1 className="font-36">Hi Martabak Bang!</h1>
            <p className="font-18 fw-500">
              Here’s your summary for{" "}
              <span className="text-red">
                Today <img className="ml-2" src="assets/img/side-right/content/arrow-bottom.png" alt="" />{" "}
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <Card content={cardTransaction} className="col-4" />
          <Card content={cardTransaction} className="col-4" />
          <Card content={cardTransaction} className="col-4" />
        </div>
        <div className="d-flex flex-column br-20 mt-5 p-3 bg-light-gray">
          <div className="row">
            <div className="col-6">
              <img className="w-100" src={require("assets/images/1.png")} alt="" />
              <div className="position-relative">
                <hr className="position-relative mb-0 mt-3 mx-0" />
                <div className="w-100 d-flex justify-content-around">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="bullet"></div>
                    <p className="font-12">12:00 PM</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="bullet"></div>
                    <p className="font-12">01:00 PM</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="bullet"></div>
                    <p className="font-12">02:00 PM</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="bullet"></div>
                    <p className="font-12">03:00 PM</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="bullet bg-red"></div>
                    <p className="font-12 text-red">04:00 PM</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="bullet"></div>
                    <p className="font-12">12:00 PM</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="bullet"></div>
                    <p className="font-12">12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 position-relative">
              <div className="d-flex align-items-center justify-content-between bg-light-gray">
                <div className="d-flex align-items-center">
                  <h1 className="font-24 mr-3">Your current statistics</h1>
                  <div className="d-flex align-items-center">
                    <p className="font-18 text-red mr-2">Daily</p>
                    <img src={require("assets/images/arrow-bottom.png")} alt="" />
                  </div>
                </div>
                <img src="assets/img/side-right/content/Close.png" alt="" />
              </div>
              <hr />
              <div className="d-flex align-center justify-content-between">
                <p className="font-18 position-relative" style={{ top: 3 }}>
                  Your average ratings:
                </p>
                <p className="font-weight-bold font-24 text-dark-blue">4.1 / 5.0</p>
                <div className="d-flex align-items-center">
                  <img className="mr-2" src="assets/img/side-right/content/bintang.png" alt="" />
                  <img className="mr-2" src="assets/img/side-right/content/bintang.png" alt="" />
                  <img className="mr-2" src="assets/img/side-right/content/bintang.png" alt="" />
                  <img className="mr-2" src="assets/img/side-right/content/bintang.png" alt="" />
                  <img src="assets/img/side-right/content/bintang2.png" alt="" />
                </div>
              </div>
              <div className="d-flex align-center justify-content-between mt-2">
                <p className="font-18 position-relative" style={{ top: 3 }}>
                  Your daily target sales
                </p>
                <p className="font-weight-bold font-24 text-dark-blue">25.90%</p>
              </div>
              <ProgressBar unitFirst="99" unitLast="200" />
              <div className="d-flex align-center justify-content-between mt-4">
                <p className="font-18 position-relative" style={{ top: 3 }}>
                  Your daily units sold
                </p>
                <p className="font-weight-bold font-24 text-dark-blue">48.98%</p>
              </div>
              <ProgressBar unitFirst="99" unitLast="200" />
            </div>
          </div>
          <div className="w-100 d-flex justify-content-between mt-4">
            <div className="d-flex">
              <div className="d-flex align-items-center mr-4">
                <div className="bullet2 bg-green mr-3"></div>
                <p className="font-14">Total Sales</p>
              </div>
              <div className="d-flex align-items-center">
                <div className="bullet2 bg-purple mr-3"></div>
                <p className="font-14">Total Orders</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img className="mr-3" src={require("assets/images/arrow-left.png")} alt="" />
              <img className="mr-3" src={require("assets/images/arrow-right.png")} alt="" />
            </div>
            <div className="d-flex align-center">
              <p className="font-18 text-red position-relative" style={{ top: "3px" }}>
                See complete statistics
              </p>
              <img src={require("assets/images/arrow-right.png")} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-light-gray p-3 br-20 mt-5 mb-5">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <h1 className="font-24 mr-4">Your devices</h1>
              <div className="d-flex align-items-center mr-4">
                <div className="bullet2 bg-gray mr-3"></div>
                <p className="font-14">All devices: 25 devices</p>
              </div>
              <div className="d-flex align-items-center mr-4">
                <div className="bullet2 bg-green mr-3"></div>
                <p className="font-14">Online: 23 devices</p>
              </div>
              <div className="d-flex align-items-center mr-4">
                <div className="bullet2 bg-dark-blue mr-3"></div>
                <p className="font-14">Turned off: 1 device</p>
              </div>
              <div className="d-flex align-items-center mr-4">
                <div className="bullet2 bg-red mr-3"></div>
                <p className="font-14">Need attention: 1 device</p>
              </div>
            </div>
            <img src="assets/img/side-right/content/Close.png" alt="" />
          </div>
          <hr />

          <div className="scrol-card p-3">
            <div className="wrap-card01">
              <Card className="card01 bg-red" content={cardWaroeng} />
              <p className="font-14">Waroeng Batavia</p>
              <div className="d-flex align-items-start">
                <div className="bullet2 bg-red mr-1"></div>
                <p className="text-gray text-left font-12">Need attention / Offline </p>
              </div>
            </div>
            <div className="wrap-card01">
              <Card className="card01 bg-green" content={cardWaroeng} />
              <p className="font-14">Waroeng Batavia</p>
              <div className="d-flex align-items-start">
                <div className="bullet2 bg-green mr-1"></div>
                <p className="text-gray text-left font-12">Online</p>
              </div>
            </div>
            <div className="wrap-card01">
              <Card className="card01 bg-green" content={cardWaroeng} />

              <p className="font-14">Waroeng Batavia</p>
              <div className="d-flex align-items-start">
                <div className="bullet2 bg-green mr-1"></div>
                <p className="text-gray text-left font-12">Online</p>
              </div>
            </div>
            <div className="wrap-card01">
              <Card className="card01 bg-green" content={cardWaroeng} />

              <p className="font-14">Waroeng Batavia</p>
              <div className="d-flex align-items-start">
                <div className="bullet2 bg-green mr-1"></div>
                <p className="text-gray text-left font-12">Online</p>
              </div>
            </div>
            <div className="wrap-card01">
              <Card className="card01 bg-green" content={cardWaroeng} />

              <p className="font-14">Waroeng Batavia</p>
              <div className="d-flex align-items-start">
                <div className="bullet2 bg-green mr-1"></div>
                <p className="text-gray text-left font-12">Online</p>
              </div>
            </div>
            <div className="wrap-card01">
              <Card className="card01 bg-green" content={cardWaroeng} />

              <p className="font-14">Waroeng Batavia</p>
              <div className="d-flex align-items-start">
                <div className="bullet2 bg-green mr-1"></div>
                <p className="text-gray text-left font-12">Online</p>
              </div>
            </div>
            <div className="wrap-card01">
              <Card className="card01 bg-green" content={cardWaroeng} />

              <p className="font-14">Waroeng Batavia</p>
              <div className="d-flex align-items-start">
                <div className="bullet2 bg-green mr-1"></div>
                <p className="text-gray text-left font-12">Online</p>
              </div>
            </div>
            <div className="wrap-card01">
              <Card className="card01 bg-green" content={cardWaroeng} />

              <p className="font-14">Waroeng Batavia</p>
              <div className="d-flex align-items-start">
                <div className="bullet2 bg-green mr-1"></div>
                <p className="text-gray text-left font-12">Online</p>
              </div>
            </div>
            <div className="wrap-card01">
              <Card className="card01 bg-green" content={cardWaroeng} />

              <p className="font-14">Waroeng Batavia</p>
              <div className="d-flex align-items-start">
                <div className="bullet2 bg-green mr-1"></div>
                <p className="text-gray text-left font-12">Online</p>
              </div>
            </div>
            <div className="wrap-card01">
              <Card className="card01 bg-green" content={cardWaroeng} />

              <p className="font-14">Waroeng Batavia</p>
              <div className="d-flex align-items-start">
                <div className="bullet2 bg-green mr-1"></div>
                <p className="text-gray text-left font-12">Online</p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between w-100">
            <div className="d-flex">
              <div className="br-purple bg-white br-20 py-2 px-4 mr-3">
                <p className="font-12 text-purple ws-nwrap">Gading Serpong</p>
              </div>
              <div className="br-red bg-white br-20 py-2 px-4 mr-3">
                <p className="font-12 text-red ws-nwrap">Bandar Sunway</p>
              </div>
              <div className="br-green bg-white br-20 py-2 px-4 mr-3">
                <p className="font-12 text-green ws-nwrap">Waroeng Bataviay</p>
              </div>
              <div className="br-blue bg-white br-20 py-2 px-4 mr-3">
                <p className="font-12 text-blue ws-nwrap">Waroeng Bataviay</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <p className="font-18 text-red ws-nwrap">See all transactions</p>
              <img src={require("assets/images/arrow-right.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
  if (token === null) {
    return <Redirect to="/sign-in" />;
  }
  return <Main content={content} />;
};

export default Dashboard;
