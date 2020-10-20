import React, { useEffect, useState } from "react";
import Main from "ui/containers/Main";
import Header from "ui/containers/Header";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "store/actions/category";
import { LOADING, LOADING_FINISH } from "store/types";
import { Slide } from "react-reveal";
import axios from "config";

function Categories() {
  const dispatch = useDispatch();
  //state category
  const category = useSelector((state) => state.category.category);
  //state loading
  const loading = useSelector((state) => state.loading.loading);
  //state modal category
  const [name, setName] = useState("");
  //state select multiple
  const [select, setselect] = useState([]);
  console.log(select);
  const handleSelect = (id) => {
    setselect(id);
  };

  const postData = () => {
    dispatch({ type: LOADING });
    axios
      .post(
        "category",
        { name: name },
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      )
      .then(function (response) {
        window.location.reload(false);
        console.log(response);
        dispatch({ type: LOADING_FINISH });
      })
      .catch(function (error) {
        console.log(error.response);
        dispatch({ type: LOADING_FINISH });
      });
  };

  const [createModal, setcreateModal] = useState(false);
  const handleCreateModal = () => {
    setcreateModal(!createModal);
  };
  console.log(category);
  const getCategory = () => {
    dispatch(fetchCategory());
  };

  useEffect(() => {
    getCategory();
  }, []);
  const contentHeader = (
    <>
      <div className="d-flex flex-column w-100 pt-4 pb-2 px-4 bg-white">
        <div className="w-100 d-flex justify-content-between">
          <div className="wrap-select mr-3" style={{ width: "16%" }}>
            <div className="dropdown mr-1">
              <button
                type="button"
                className="btn w-100 text-left btn-secondary dropdown-toggle font-24 fw-700 bg-white border-0 text-dark-blue"
                id="dropdownMenuOffset"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-offset="10,20"
              >
                Product
              </button>
              <div className="dropdown-menu drp-down2 bg-transparent border-0" aria-labelledby="dropdownMenuOffset">
                <a className="dropdown-item shadow mt-2 br-20 border font-24 fw-700 text-center" href="#">
                  Variants
                </a>
                <a className="dropdown-item shadow mt-3 br-20 border font-24 fw-700 text-center" href="#">
                  Categories
                </a>
              </div>
              <img src={require("assets/images/product/arrow-bottom.png")} alt="" />
            </div>
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
              onClick={handleCreateModal}
              className="btn bg-red d-flex align-items-center text-white fw-200 br-20 px-3 sh-btn"
            >
              <img className="mr-2" src={require("assets/images/outlet/icon-add.png")} alt="" />
              <span className="font-17 fw-500">add new categories</span>
            </button>
          </div>
        </div>
        <hr className="mx-0" />
        <div className="d-flex align-items-center">
          <div className="bullet03"></div>
          <div className="d-flex align-items-center" style={{ marginLeft: "2%" }}>
            <p className="font-14 fw-200 mr-3 text-gray">Category name</p>
            <div className="d-flex flex-column">
              <img src={require("assets/images/product/Arrow-top.png")} alt="" />
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
          </div>
          <div className="d-flex align-items-center" style={{ marginLeft: "13%" }}>
            <p className="font-14 fw-200 mr-3 text-gray">Assigned to 3 products</p>
            <div className="d-flex flex-column">
              <img src={require("assets/images/product/Arrow-top.png")} alt="" />
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const content = (
    <>
      <Header content={contentHeader} style="header" />
      <div className="product d-flex flex-column mb-2 w-100 px-0">
        {loading === false ? (
          category.map((data) => {
            return (
              <div key={data.id} className="br-20 bg-card01 px-3 w-100 d-flex align-items-center mb-2">
                <div className="bullet03">
                  <input value={select} type="checkbox" onClick={() => handleSelect(data.id)} />
                </div>
                <div className="hr-right02 mx-2"></div>
                <p className="font-14 fw-200 d-flex ml-2 mb-5 justify-content-start" style={{ width: "23%" }}>
                  {data.categoryName}
                </p>
                <div className="hr-right02 my-2"></div>

                <div className="d-flex justify-content-between align-items-center w-100 ml-3">
                  <div className="d-flex flex-column">
                    <p className="fw-500">Assigned to 3 products</p>
                    <div className="d-flex mt-3">
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
                  <button className="btn bg-dark-blue d-flex align-items-center mt-2 text-white fw-200 br-20 px-3 mr-3">
                    <img className="mr-2" src={require("assets/images/outlet/icon-add.png")} alt="" />
                    <span className="font-14 font-weight-bold">Insert categories</span>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="position-absolute h-100 wrap-spiner">
            <div className="spinner-border m-auto" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
      {createModal ? (
        <>
          <div onClick={handleCreateModal} style={{ zIndex: 9999 }} className="overlay-modal"></div>
          <Slide right>
            <div className="modal-right p-4">
              <div className="w-100 d-flex justify-content-between">
                <h1 className="font-weight-bold font-24">Product information</h1>
                <div className="d-flex align-items-center">
                  <img onClick={handleCreateModal} src={require("assets/images/product/Close (1).png")} alt="" />
                </div>
              </div>
              <hr className="my-3 mx-0" />
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <p className="font-14 text-gray w-75 ws-nwrap">Product name</p>
                    <input
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      className="form-control br-20"
                      placeholder="Martabak Manis"
                    />
                  </div>
                </div>
              </div>
              {loading === true ? (
                <button
                  className="btn bg-red text-white font-18 font-weight-bold br-20 position-absolute"
                  style={{ bottom: "30px", right: "30px" }}
                >
                  .....
                </button>
              ) : (
                <button
                  onClick={postData}
                  className="btn bg-red text-white font-18 font-weight-bold br-20 position-absolute"
                  style={{ bottom: "30px", right: "30px" }}
                >
                  Finish create
                </button>
              )}
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

export default Categories;
