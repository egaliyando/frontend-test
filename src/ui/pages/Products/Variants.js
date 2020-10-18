import React from "react";
import Main from "ui/containers/Main";
import Header from "ui/containers/Header";

function Variants() {
  const contentHeader = (
    <>
      <div className="d-flex flex-column w-100 pt-4 pb-2 px-4 bg-white">
        <div className="w-100 d-flex justify-content-between">
          <div className="wrap-select mr-3" style={{ width: "13%" }}>
            <select className="form-control mr-3 br-20 font-24 border-0">
              <option>Variants</option>
              <option>Filter</option>
            </select>
            <img src={require("assets/images/product/arrow-bottom.png")} alt="" />
          </div>

          <div className="d-flex align-items-center">
            <div className="sh-btn bg-dark-blue font-14 text-white py-2 px-4 br-20 mr-3 d-flex align-items-center">
              <img className="mr-2" src={require("assets/images/product/copy.png")} alt="" />
              Duplicate
            </div>
            <div className="sh-btn bg-dark-blue font-14 text-white py-2 px-4 br-20 mr-3 d-flex align-items-center">
              <img className="mr-2" src={require("assets/images/product/trash.png")} alt="" />
              Delete
            </div>
            <div className="wrap-select mr-3">
              <select className="form-control mr-3 br-20">
                <option>Filter</option>
                <option>Filter</option>
              </select>
              <img src={require("assets/images/outlet/arrow-down.png")} alt="" />
            </div>

            <div className="wrap-search mr-3">
              <input type="text" className="form-control br-20" placeholder="Search" />
              <img src={require("assets/images/outlet/icon-search.png")} alt="" />
            </div>

            <button className="btn bg-red d-flex align-items-center text-white fw-200 br-20 px-3 sh-btn">
              <img className="mr-2" src={require("assets/images/outlet/icon-add.png")} alt="" />
              <span className="font-17">add new variant</span>
            </button>
          </div>
        </div>
        <hr className="mx-0" />
        <div className="d-flex align-items-center">
          <div className="bullet03"></div>
          <div className="d-flex align-items-center" style={{ marginLeft: "2%" }}>
            <p className="font-14 fw-200 mr-3 text-gray">Variant name</p>
            <div className="d-flex flex-column">
              <img src={require("assets/images/product/Arrow-top.png")} alt="" />
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
          </div>
          <div className="d-flex align-items-center" style={{ marginLeft: "6%" }}>
            <p className="font-14 fw-200 mr-3 text-gray">Products assigned</p>
            <div className="d-flex flex-column">
              <img src={require("assets/images/product/Arrow-top.png")} alt="" />
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
          </div>

          <div className="d-flex align-items-center" style={{ marginLeft: "7%" }}>
            <p className="font-14 fw-200 mr-3 text-gray">Variant options</p>
            <div className="d-flex flex-column">
              <img src={require("assets/images/product/Arrow-top.png")} alt="" />
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
          </div>

          <div className="d-flex align-items-center" style={{ marginLeft: "10%" }}>
            <p className="font-14 fw-200 mr-3 text-gray">Mode</p>
          </div>

          <div className="d-flex align-items-center" style={{ marginLeft: "16%" }}>
            <p className="font-14 fw-200 mr-3 text-gray">Quick actions</p>
          </div>
        </div>
      </div>
    </>
  );

  const content = (
    <>
      <Header content={contentHeader} style="header" />
      <div className="product d-flex flex-column  mt-2 w-100 px-0">
        <div className="br-20 bg-card01 px-3 w-100 d-flex align-items-center justify-content-between">
          <div className="bullet03"></div>
          <div className="hr-right mx-2"></div>
          <p className="font-14 fw-200 d-flex justify-content-center mx-5 px-3">Size</p>
          <div className="hr-right my-2"></div>

          <div className="wrap-select mr-3">
            <select className="form-control br-20 font-14 border-0 bg-transparent" style={{ appearance: "none" }}>
              <option>Assigned to 8 products</option>
              <option>Filter</option>
            </select>
            <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
          </div>

          <div className="hr-right my-2"></div>
          <div className="wrap-select mr-3">
            <select className="form-control br-20 font-14 border-0 bg-transparent" style={{ appearance: "none" }}>
              <option>3 variant options</option>
              <option>Filter</option>
            </select>
            <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
          </div>
          <div className="hr-right my-2"></div>
          <div className="wrap-select mr-3">
            <select className="form-control br-20 font-14 border-0 bg-transparent" style={{ appearance: "none" }}>
              <option>Single choose</option>
              <option>Filter</option>
            </select>
            <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
          </div>

          <div className="hr-right my-2"></div>

          <div className="d-flex align-items-center px-3">
            <button className="btn bg-dark-blue text-white font-14 mr-2 ws-nwrap br-20">Add new option</button>
            <button className="btn bg-dark-blue text-white font-14 mr-2 ws-nwrap br-20">Insert product</button>
          </div>
        </div>
        {/* button hidden 01*/}
        <div className="flex-wrap" style={{ marginLeft: "20%", display: "none" }}>
          <button className="btn bg-dark-blue d-flex align-items-center mt-2 text-white fw-200 br-20 px-3 mr-3">
            <img className="mr-2" src={require("assets/images/outlet/icon-add.png")} alt="" />
            <span className="font-14">Insert product</span>
          </button>

          <button className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3">
            <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
            <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
          </button>

          <button className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3">
            <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
            <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
          </button>

          <button className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3">
            <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
            <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
          </button>

          <button className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3">
            <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
            <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
          </button>

          <button className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3">
            <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
            <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
          </button>

          <button className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3">
            <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
            <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
          </button>

          <button className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3">
            <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
            <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
          </button>
        </div>
        {/* end btn hidden 01 */}
        {/* btn hidden */}

        <div
          className="bg-card01 br-20 py-2 px-3 justify-content-between mt-3"
          style={{ marginLeft: "21%", display: "none" }}
        >
          <div className="d-flex align-items-center">
            <img className="mr-3" src={require("assets/images/product/Drag.png")} alt="" />
            <p className="font-12">Small</p>
          </div>
          <div className="d-flex align-items-center w-50">
            <div className="wrap-select mr-3 mr-3 bg-white br-20">
              <select
                className="form-control  br-dark-blue br-20 font-14 bg-transparent"
                style={{ appearance: "none" }}
              >
                <option>Add</option>
                <option>Add</option>
              </select>
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
            <input type="text" className="form-control bg-white br-20 br-dashed-dark-blue" placeholder="Rp. 0" />
          </div>

          <div className="d-flex">
            <div className="d-flex align-items-center mr-3">
              <p className="font-12 text-gray mr-2">Duplicate option</p>
              <img src={require("assets/images/product/copy (2).png")} alt="" />
            </div>

            <div className="d-flex align-items-center">
              <p className="font-12 text-gray mr-2">Delete option</p>
              <img src={require("assets/images/product/trash (2).png")} alt="" />
            </div>
          </div>
        </div>
        {/* end btn hidden */}
        <div className="br-20 bg-card01 px-3 w-100 d-flex align-items-center justify-content-between mt-2">
          <div className="bullet03"></div>
          <div className="hr-right mx-2"></div>
          <p className="font-14 fw-200 d-flex justify-content-center mx-5 px-3">Size</p>
          <div className="hr-right my-2"></div>

          <div className="wrap-select mr-3">
            <select className="form-control br-20 font-14 border-0 bg-transparent" style={{ appearance: "none" }}>
              <option>Assigned to 8 products</option>
              <option>Filter</option>
            </select>
            <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
          </div>

          <div className="hr-right my-2"></div>
          <div className="wrap-select mr-3">
            <select className="form-control br-20 font-14 border-0 bg-transparent" style={{ appearance: "none" }}>
              <option>3 variant options</option>
              <option>Filter</option>
            </select>
            <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
          </div>
          <div className="hr-right my-2"></div>
          <div className="wrap-select mr-3">
            <select className="form-control br-20 font-14 border-0 bg-transparent" style={{ appearance: "none" }}>
              <option>Single choose</option>
              <option>Filter</option>
            </select>
            <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
          </div>

          <div className="hr-right my-2"></div>

          <div className="d-flex align-items-center px-3">
            <button className="btn bg-dark-blue text-white font-14 mr-2 ws-nwrap br-20">Add new option</button>
            <button className="btn bg-dark-blue text-white font-14 mr-2 ws-nwrap br-20">Insert product</button>
          </div>
        </div>
      </div>
      {/* button hidden  */}

      <div className="overlay-modal" style={{ display: "none" }}></div>
      <div className="modal-right p-4" style={{ display: "none" }}>
        <div className="w-100 d-flex justify-content-between">
          <h1 className="font-weight-bold font-24">Variant information</h1>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center mr-5">
              <p className="text-gray font-18 mr-3">Duplicate product</p>
              <img src={require("assets/images/product/copy (1).png")} alt="" />
            </div>
            <div className="d-flex align-items-center mr-5">
              <p className="text-gray font-18 mr-3">Delete product</p>
              <img src={require("assets/images/product/trash (1).png")} alt="" />
            </div>
            <img src={require("assets/images/product/Close (1).png")} alt="" />
          </div>
        </div>
        <hr className="my-3 mx-0" />

        <div className="d-flex align-items-center my-1">
          <p className="font-14 mr-3">Varian name</p>
          <input type="text" className="form-control w-25 br-20" placeholder="Size" />
        </div>

        <hr className="my-3 mx-0" />

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex align-items-center w-100">
            <p className="font-14 mr-3 ws-nwrap">Varian name</p>

            <div className="wrap-select w-25 mr-3">
              <select className="form-control br-20 font-14 bg-transparent" style={{ appearance: "none" }}>
                <option>Assigned to 8 products</option>
                <option>Filter</option>
              </select>
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
          </div>

          <button className="btn bg-dark-blue text-white font-14 mr-2 ws-nwrap br-20">Add new option</button>
        </div>

        <div className="bg-card01 br-20 py-2 px-3 d-flex justify-content-between mt-3">
          <div className="d-flex align-items-center">
            <img className="mr-3" src={require("assets/images/product/Drag.png")} alt="" />
            <p className="font-12">Small</p>
          </div>
          <div className="d-flex align-items-center w-50">
            <div className="wrap-select mr-3 mr-3 bg-white br-20">
              <select
                className="form-control  br-dark-blue br-20 font-14 bg-transparent"
                style={{ appearance: "none" }}
              >
                <option>Add</option>
                <option>Add</option>
              </select>
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
            <input type="text" className="form-control bg-white br-20 br-dashed-dark-blue" placeholder="Rp. 0" />
          </div>

          <div className="d-flex">
            <div className="d-flex align-items-center mr-3">
              <p className="font-12 text-gray mr-2">Duplicate option</p>
              <img src={require("assets/images/product/copy (2).png")} alt="" />
            </div>

            <div className="d-flex align-items-center">
              <p className="font-12 text-gray mr-2">Delete option</p>
              <img src={require("assets/images/product/trash (2).png")} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-card01 br-20 py-2 px-3 d-flex justify-content-between mt-3">
          <div className="d-flex align-items-center">
            <img className="mr-3" src={require("assets/images/product/Drag.png")} alt="" />
            <p className="font-12">Small</p>
          </div>
          <div className="d-flex align-items-center w-50">
            <div className="wrap-select mr-3 mr-3 bg-white br-20">
              <select
                className="form-control  br-dark-blue br-20 font-14 bg-transparent"
                style={{ appearance: "none" }}
              >
                <option>Add</option>
                <option>Add</option>
              </select>
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
            <input type="text" className="form-control bg-white br-20 br-dashed-dark-blue" placeholder="Rp. 0" />
          </div>

          <div className="d-flex">
            <div className="d-flex align-items-center mr-3">
              <p className="font-12 text-gray mr-2">Duplicate option</p>
              <img src={require("assets/images/product/copy (2).png")} alt="" />
            </div>

            <div className="d-flex align-items-center">
              <p className="font-12 text-gray mr-2">Delete option</p>
              <img src={require("assets/images/product/trash (2).png")} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-card01 br-20 py-2 px-3 d-flex justify-content-between mt-3">
          <div className="d-flex align-items-center">
            <img className="mr-3" src={require("assets/images/product/Drag.png")} alt="" />
            <p className="font-12">Small</p>
          </div>
          <div className="d-flex align-items-center w-50">
            <div className="wrap-select mr-3 mr-3 bg-white br-20">
              <select
                className="form-control  br-dark-blue br-20 font-14 bg-transparent"
                style={{ appearance: "none" }}
              >
                <option>Add</option>
                <option>Add</option>
              </select>
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
            <input type="text" className="form-control bg-white br-20 br-dashed-dark-blue" placeholder="Rp. 0" />
          </div>

          <div className="d-flex">
            <div className="d-flex align-items-center mr-3">
              <p className="font-12 text-gray mr-2">Duplicate option</p>
              <img src={require("assets/images/product/copy (2).png")} alt="" />
            </div>

            <div className="d-flex align-items-center">
              <p className="font-12 text-gray mr-2">Delete option</p>
              <img src={require("assets/images/product/trash (2).png")} alt="" />
            </div>
          </div>
        </div>

        <hr className="mx-0 my-2" />

        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex flex-column w-50">
            <p className="font-14 text-gray">Assigned products</p>
            <p className="font-14 text-gray mt-2">8 products</p>
          </div>

          <div className="d-flex flex-wrap">
            <button className="btn bg-dark-blue d-flex align-items-center mt-2 text-white fw-200 br-20 px-3 mr-3">
              <img className="mr-2" src={require("assets/images/outlet/icon-add.png")} alt="" />
              <span className="font-14">Insert product</span>
            </button>

            <button className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3">
              <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
              <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
            </button>

            <button className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3">
              <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
              <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
            </button>

            <button className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3">
              <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
              <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
            </button>

            <button className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3">
              <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
              <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
            </button>

            <button className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3">
              <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
              <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
            </button>

            <button className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3">
              <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
              <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
            </button>

            <button className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3">
              <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
              <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
            </button>
          </div>
        </div>

        <button
          className="btn bg-red text-white font-18 font-weight-bold br-20 position-absolute"
          style={{ bottom: "10px", right: "30px" }}
        >
          Save updates
        </button>
      </div>
    </>
  );
  return <Main content={content} />;
}

export default Variants;
