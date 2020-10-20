import React, { useState, useEffect } from "react";
import Main from "ui/containers/Main";
import Header from "ui/containers/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchVariant } from "store/actions/variant";
import { Slide } from "react-reveal";
import axios from "config";
import { Link } from "react-router-dom";

function Variants() {
  const dispatch = useDispatch();
  //state modal create
  const [createVariant, setcreateVariant] = useState(false);
  const [updateVariant, setupdateVariant] = useState(false);
  //state name & type
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState(0);
  const [counter, setcounter] = useState(1);
  //state variant option
  const [varOption, setvarOption] = useState([{ index: counter, name: "", type: 0, price: 2000 }]);
  console.log(name);
  console.log(type);
  console.log(counter);
  console.log(varOption);
  //state loading
  const loading = useSelector((state) => state.loading.loading);
  const variant = useSelector((state) => state.variant.variant);
  //state chose dropdown
  const [singleChose, setsingleChose] = useState(0);
  const [varian, setvarian] = useState();
  //get all variant
  const getVariant = () => {
    dispatch(fetchVariant());
  };
  // get variant by id
  const getVariantById = async (id) => {
    try {
      const variantById = await axios.get(`variant/${id}`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      // console.log("variantById", variantById);
      setId(variantById.data.variant.variantId);
      setName(variantById.data.variant.variantName);
      setType(variantById.data.variant.variantType);
      setvarOption(variantById.data.variant.variantOption);
    } catch (error) {
      console.log(error.response);
    }
  };

  //add variant opt push to array
  const addVariantOpt = () => {
    let values = [...varOption];
    values.push({
      index: counter + 1,
      name: "",
      type: 0,
      price: 0,
    });
    setcounter(counter + 1);
    setvarOption(values);
  };
  //add variant opt push to array
  const deleteVariantOpt = () => {
    let values = [...varOption];
    values.splice(values.length - 1);
    setvarOption(values);
  };
  //handle modal
  const handleCreateModal = () => {
    setcreateVariant(!createVariant);
  };
  const handleUpdateModal = (id) => {
    getVariantById(id);
    setupdateVariant(!updateVariant);
  };
  // dropdown show variant option & product asign
  const handleChose = (e, id) => {
    setsingleChose(id);
    setvarian("");
  };
  const handleVariant = (e, id) => {
    setvarian(id);
    setsingleChose("");
  };
  //API//
  //handle Post
  const handlePostVarian = async () => {
    try {
      const createVariant = await axios.post(
        "variant",
        {
          name: name,
          type: parseInt(type),
          option: varOption,
        },
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      );
      getVariant();
      setcreateVariant(false);
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message);
      }
      console.log(error.response.data.message);
    }
  };
  //handle Put
  const handlePutVarian = async (e, id) => {
    try {
      const putVariant = await axios.put(
        `variant/${id}`,
        { name: name, type: parseInt(type), option: varOption },
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      );
      console.log("putVariant", putVariant);
      getVariant();
      setupdateVariant(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  //handle Delete
  const handleDelete = async (id) => {
    try {
      const deleteVariant = await axios.delete(`variant/${id}`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      getVariant();
      console.log("deleteVariant", deleteVariant);
    } catch (error) {
      console.log(error.response);
    }
  };
  //handleChange input
  const handleChange = (e) => {
    const _temp = [...varOption];
    if (e.target.name === "price") {
      _temp[e.target.dataset.id][e.target.name] = parseInt(e.target.value);
    } else {
      _temp[e.target.dataset.id][e.target.name] = e.target.value;
    }

    setvarOption(_temp);
  };

  const contentHeader = (
    <>
      <div className="d-flex flex-column w-100 pt-4 pb-2 px-4 bg-white">
        <div className="w-100 d-flex justify-content-between">
          <div className="wrap-select mr-3" style={{ width: "16%" }}>
            <div className="dropdown mr-1">
              <button
                className="btn w-100 text-left btn-secondary dropdown-toggle font-24 fw-700 bg-white border-0 text-dark-blue"
                id="dropdownMenuOffset"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-offset="10,20"
              >
                Variants
              </button>
              <div className="dropdown-menu drp-down2 bg-transparent border-0" aria-labelledby="dropdownMenuOffset">
                <Link to="/product">
                  <p className="dropdown-item shadow mt-2 br-20 border font-24 fw-700 text-center">Product</p>
                </Link>
                <Link to="/product/categories">
                  <p className="dropdown-item shadow mt-3 br-20 border font-24 fw-700 text-center">Categories</p>
                </Link>
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
              <span className="font-17 fw-500">add new variant</span>
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
      <div className="product d-flex flex-column mt-2 w-100 px-0">
        {loading === false ? (
          variant.map((data) => {
            return (
              <div key={data.variantId}>
                <div className="br-20 bg-card01 px-3 w-100 d-flex align-items-center justify-content-between mb-2">
                  <div className="bullet03"></div>
                  <div className="hr-right mx-2"></div>
                  <p className="font-14 fw-200 d-flex justify-content-center mx-5 px-3">{data.variantName}</p>
                  <div className="hr-right my-2"></div>

                  <div onClick={(e) => handleVariant(e, data.variantId)} className="wrap-select mr-3">
                    <p className="ml-3">Single choose</p>
                    <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
                  </div>

                  <div className="hr-right my-2"></div>
                  <div className="wrap-select mr-3">
                    <select
                      className="form-control br-20 font-14 border-0 bg-transparent"
                      style={{ appearance: "none" }}
                    >
                      {data.variantOption === null
                        ? ""
                        : data.variantOption.map((data, i) => {
                            return <option key={i}>{data.name}</option>;
                          })}
                      }
                    </select>
                    <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
                  </div>
                  <div className="hr-right my-2"></div>
                  <div onClick={(e) => handleChose(e, data.variantId)} className="wrap-select mr-3">
                    <p className="ml-3">Single choose</p>

                    <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
                  </div>

                  <div className="hr-right my-2"></div>

                  <div className="d-flex align-items-center px-3">
                    <button
                      onClick={() => handleUpdateModal(data.variantId)}
                      className="btn bg-dark-blue text-white font-14 mr-2 ws-nwrap br-20"
                    >
                      Update variant
                    </button>
                    <button
                      onClick={() => handleDelete(data.variantId)}
                      className="btn bg-dark-blue text-white font-14 mr-2 ws-nwrap br-20"
                    >
                      Delete variant
                    </button>
                  </div>
                </div>

                {varian === data.variantId ? (
                  <Slide top>
                    <div className="flex-wrap mb-3" style={{ marginLeft: "20%", display: "flex" }}>
                      <button
                        onClick={() => setvarian("")}
                        className="btn bg-dark-blue d-flex align-items-center mt-2 text-white fw-200 br-20 px-3 mr-3"
                      >
                        <img className="mr-2" src={require("assets/images/outlet/icon-add.png")} alt="" />
                        <span className="font-14">Insert product</span>
                      </button>

                      <button
                        onClick={() => setvarian("")}
                        className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3"
                      >
                        <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
                        <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
                      </button>

                      <button
                        onClick={() => setvarian("")}
                        className="btn bg-white d-flex align-items-center mr-3 mt-2 br-dark-blue text-dark-blue fw-200 br-20 px-3"
                      >
                        <span className="font-14 mr-2 font-weight-bold">Martabak Manis</span>
                        <img className="mr-2" src={require("assets/images/outlet/Close.png")} alt="" />
                      </button>
                    </div>
                  </Slide>
                ) : (
                  ""
                )}

                {singleChose === data.variantId
                  ? data.variantOption.map((data, i) => {
                      return (
                        <Slide top key={i}>
                          <div
                            className="bg-card01 br-20 py-2 px-3 justify-content-between my-3"
                            style={{ marginLeft: "21%", display: "flex" }}
                          >
                            <div className="d-flex align-items-center">
                              <img className="mr-3" src={require("assets/images/product/Drag.png")} alt="" />
                              <p className="font-12">{data.name}</p>
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
                              <input
                                value={data.price}
                                type="text"
                                className="form-control bg-white br-20 br-dashed-dark-blue"
                                placeholder="Rp. 0"
                              />
                            </div>

                            <div className="d-flex">
                              <div onClick={() => setsingleChose("")} className="d-flex align-items-center mr-3">
                                <p className="font-12 text-gray mr-2">Duplicate option</p>
                                <img src={require("assets/images/product/copy (2).png")} alt="" />
                              </div>

                              <div onClick={() => setsingleChose("")} className="d-flex align-items-center">
                                <p className="font-12 text-gray mr-2">Delete option</p>
                                <img src={require("assets/images/product/trash (2).png")} alt="" />
                              </div>
                            </div>
                          </div>
                        </Slide>
                      );
                    })
                  : ""}
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
      {createVariant ? (
        <>
          <div onClick={handleCreateModal} className="overlay-modal" style={{ display: "block" }}></div>
          <Slide right>
            <div className="modal-right p-4">
              <div className="w-100 d-flex justify-content-between">
                <h1 className="font-weight-bold font-24">Variant information</h1>
                <div className="d-flex align-items-center">
                  <img onClick={handleCreateModal} src={require("assets/images/product/Close (1).png")} alt="" />
                </div>
              </div>
              <hr className="my-3 mx-0" />

              <div className="d-flex align-items-center my-1">
                <p className="font-14 mr-3">Varian name</p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="name"
                  type="text"
                  className="form-control w-25 br-20"
                  placeholder="Size"
                />
              </div>

              <hr className="my-3 mx-0" />

              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="d-flex align-items-center w-100">
                  <p className="font-14 mr-3 ws-nwrap">Varian type</p>

                  <div className="wrap-select w-25 mr-3">
                    <select
                      onChange={(e) => setType(e.target.value)}
                      value={type}
                      className="form-control br-20 font-14 bg-transparent"
                      style={{ appearance: "none" }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
                  </div>
                </div>

                <button onClick={addVariantOpt} className="btn bg-dark-blue text-white font-14 mr-2 ws-nwrap br-20">
                  Add new option
                </button>
              </div>
              {varOption.map((data, i) => {
                return (
                  <div key={i} className="bg-card01 br-20 py-2 px-3 d-flex justify-content-between mt-3">
                    <div className="d-flex align-items-center">
                      <img className="mr-3" src={require("assets/images/product/Drag.png")} alt="" />
                      <select
                        onChange={handleChange}
                        value={data.name}
                        name="name"
                        data-id={i}
                        className="form-control br-20 font-14 bg-transparent"
                        style={{ appearance: "none" }}
                      >
                        <option>Pilih name</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Small">Small</option>
                      </select>
                    </div>
                    <div className="d-flex align-items-center w-50">
                      <div className="wrap-select mr-3 mr-3 bg-white br-20">
                        <select
                          value={data.type}
                          data-id={i}
                          name="type"
                          onChange={handleChange}
                          className="form-control  br-dark-blue br-20 font-14 bg-transparent"
                          style={{ appearance: "none" }}
                        >
                          <option>Pilih type</option>
                          <option value="Add">Add</option>
                          <option value="Size">Size</option>
                        </select>
                        <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
                      </div>
                      <input
                        value={data.price}
                        data-id={i}
                        name="price"
                        type="number"
                        onChange={handleChange}
                        className="form-control bg-white br-20 br-dashed-dark-blue"
                        placeholder="Rp. 0"
                      />
                    </div>

                    <div className="d-flex">
                      <div className="d-flex align-items-center mr-3">
                        <p className="font-12 text-gray mr-2">Duplicate option</p>
                        <img src={require("assets/images/product/copy (2).png")} alt="" />
                      </div>

                      <div onClick={() => deleteVariantOpt()} className="d-flex align-items-center">
                        <p className="font-12 text-gray mr-2">Delete option</p>
                        <img src={require("assets/images/product/trash (2).png")} alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}

              <button
                onClick={handlePostVarian}
                className="btn bg-red text-white font-18 font-weight-bold br-20 position-absolute"
                style={{ bottom: "10px", right: "30px" }}
              >
                Save updates
              </button>
            </div>
          </Slide>
        </>
      ) : (
        ""
      )}
      {updateVariant ? (
        <>
          <div onClick={handleUpdateModal} className="overlay-modal" style={{ display: "block" }}></div>
          <Slide right>
            <div className="modal-right p-4">
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
                  <img onClick={handleUpdateModal} src={require("assets/images/product/Close (1).png")} alt="" />
                </div>
              </div>
              <hr className="my-3 mx-0" />

              <div className="d-flex align-items-center my-1">
                <p className="font-14 mr-3">Varian name</p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="name"
                  type="text"
                  className="form-control w-25 br-20"
                  placeholder="Size"
                />
              </div>

              <hr className="my-3 mx-0" />

              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="d-flex align-items-center w-100">
                  <p className="font-14 mr-3 ws-nwrap">Varian name</p>
                  <div className="wrap-select w-25 mr-3">
                    <select
                      onChange={(e) => setType(e.target.value)}
                      value={type}
                      className="form-control br-20 font-14 bg-transparent"
                      style={{ appearance: "none" }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
                  </div>
                </div>

                <button className="btn bg-dark-blue text-white font-14 mr-2 ws-nwrap br-20">Add new option</button>
              </div>

              {varOption.map((data, i) => {
                return (
                  <div key={i} className="bg-card01 br-20 py-2 px-3 d-flex justify-content-between mt-3">
                    <div className="d-flex align-items-center">
                      <img className="mr-3" src={require("assets/images/product/Drag.png")} alt="" />
                      <div className="wrap-select mr-3 mr-3 bg-white br-20">
                        <select
                          onChange={handleChange}
                          data-id={i}
                          value={data.name}
                          name="name"
                          className="form-control br-20 font-14 bg-transparent"
                          style={{ appearance: "none" }}
                        >
                          <option value="Medium">Medium</option>
                          <option value="Large">Large</option>
                          <option value="Small">Small</option>
                        </select>
                        <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
                      </div>
                    </div>
                    <div className="d-flex align-items-center w-50">
                      <div className="wrap-select mr-3 mr-3 bg-white br-20">
                        <select
                          value={data.type}
                          onChange={handleChange}
                          data-id={i}
                          name="type"
                          className="form-control  br-dark-blue br-20 font-14 bg-transparent"
                          style={{ appearance: "none" }}
                        >
                          <option>Pilih type</option>
                          <option value="Add">Add</option>
                          <option value="Size">Size</option>
                        </select>
                        <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
                      </div>
                      <input
                        onChange={handleChange}
                        type="text"
                        value={data.price}
                        data-id={i}
                        name="price"
                        className="form-control bg-white br-20 br-dashed-dark-blue"
                        placeholder="Rp. 0"
                      />
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
                );
              })}

              <button
                onClick={(e) => handlePutVarian(e, id)}
                className="btn bg-red text-white font-18 font-weight-bold br-20 position-absolute"
                style={{ bottom: "10px", right: "30px" }}
              >
                Save updates
              </button>
            </div>
          </Slide>
        </>
      ) : (
        ""
      )}
    </>
  );

  useEffect(() => {
    getVariant();
  }, []);
  return <Main content={content} />;
}

export default Variants;
