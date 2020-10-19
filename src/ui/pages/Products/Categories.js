import React, { useState, useEffect } from "react";
import Main from "ui/containers/Main";
import Header from "ui/containers/Header";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "store/actions/category";

function Categories() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.category);
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
            <select className="form-control mr-3 br-20 font-24 border-0 font-weight-bold">
              <option>Categories</option>
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

            <button className="btn bg-red d-flex align-items-center text-white fw-200 br-20 px-3 sh-btn">
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
        {category.map((data) => {
          return (
            <div key={data.id} className="br-20 bg-card01 px-3 w-100 d-flex align-items-center mb-2">
              <div className="bullet03"></div>
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
        })}
      </div>
    </>
  );
  return <Main content={content} />;
}

export default Categories;
