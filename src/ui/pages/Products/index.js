import React, { useEffect, useState } from "react";
import Main from "ui/containers/Main";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "store/actions/product";
import Header from "ui/containers/Header";
import { Slide } from "react-reveal";
import axios from "config";

function Products() {
  //dispath initial
  const dispatch = useDispatch();
  //state all product
  const product = useSelector((state) => state.product.product);
  //state single product
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  // state modal
  const [updateProduct, setUpdateProduct] = useState(false);
  const [createProduct, setCreateProduct] = useState(false);
  // console.log("PRODUCT", product);

  // get all action
  const getAllProduct = () => {
    dispatch(fetchProduct());
  };
  //get single action
  const getSingle = async (id) => {
    try {
      const productSingle = await axios.get(`/product/${id}`, {
        headers: { "x-access-token": localStorage.getItem("token") },
      });
      setName(productSingle.data.products.productName);
      setCode(productSingle.data.products.productCode);
      setCost(productSingle.data.products.productCost);
      setPrice(productSingle.data.products.productPrice);
      setId(productSingle.data.products.productId);
    } catch (error) {
      console.log("error.response");
      console.log(error.response);
    }
  };
  //put action
  const putData = async (e, id) => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("code", code);
    formData.append("cost", cost);
    formData.append("price", price);
    try {
      const putProduct = await axios.put(`/product/${id}`, formData, {
        headers: { "x-access-token": localStorage.getItem("token") },
      });
      console.log(putProduct);
      dispatch(fetchProduct());
      setUpdateProduct(!updateProduct);
    } catch (error) {
      console.log("error.response");
      console.log(error.response);
    }
  };
  //delete action
  const deleteData = async (e, id) => {
    try {
      const deleteProduct = await axios.delete(`/product/${id}`, {
        headers: { "x-access-token": localStorage.getItem("token") },
      });
      console.log(deleteProduct);
      dispatch(fetchProduct());
      setUpdateProduct(!updateProduct);
    } catch (error) {
      console.log("error.response");
      console.log(error.response);
    }
  };
  //modal create
  const handleCreateModal = () => {
    setCreateProduct(!createProduct);
    setUpdateProduct(false);
  };
  //modal update
  const handleUpdateModal = (e, id) => {
    getSingle(id);
    setUpdateProduct(true);
    // setCreateProduct(false);
  };
  const handleCloseUpdate = () => {
    setUpdateProduct(false);
  };
  const contentHeader = (
    <>
      <div className="d-flex flex-column w-100 pt-4 pb-2 px-4 bg-white">
        <div className="w-100 d-flex justify-content-between">
          <div className="wrap-select mr-3" style={{ width: "13%" }}>
            <select className="form-control mr-3 br-20 font-24 border-0">
              <option>Products</option>
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

            <div
              onClick={handleUpdateModal}
              className="btn bg-red d-flex align-items-center text-white fw-200 br-20 px-3 sh-btn"
            >
              <img className="mr-2" src={require("assets/images/outlet/icon-add.png")} alt="" />
              <span onClick={handleCreateModal} className="font-17">
                add new product
              </span>
            </div>
          </div>
        </div>
        <hr className="mx-0" />
        <div className="d-flex align-items-center justify-content-between">
          <div className="bullet03"></div>
          <div className="d-flex align-items-center">
            <p className="font-14 fw-200 mr-3 text-gray">Code</p>
            <div className="d-flex flex-column">
              <img src={require("assets/images/product/Arrow-top.png")} alt="" />
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <p className="font-14 fw-200 mr-3 text-gray">Product name</p>
            <div className="d-flex flex-column">
              <img src={require("assets/images/product/Arrow-top.png")} alt="" />
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
          </div>

          <div className="d-flex align-items-center">
            <p className="font-14 fw-200 mr-3 text-gray">Variants</p>
            <div className="d-flex flex-column">
              <img src={require("assets/images/product/Arrow-top.png")} alt="" />
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
          </div>

          <div className="d-flex align-items-center">
            <p className="font-14 fw-200 mr-3 text-gray">Outlets</p>
            <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
          </div>

          <div className="d-flex align-items-center">
            <p className="font-14 fw-200 mr-3 text-gray">Category</p>
            <div className="d-flex flex-column">
              <img src={require("assets/images/product/Arrow-top.png")} alt="" />
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
          </div>

          <div className="d-flex align-items-center">
            <p className="font-14 fw-200 mr-3 text-gray">Price</p>
            <div className="d-flex flex-column">
              <img src={require("assets/images/product/Arrow-top.png")} alt="" />
              <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
            </div>
          </div>

          <div className="d-flex align-items-center">
            <p className="font-14 fw-200 mr-3 text-gray">Cost</p>
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
      {product.map((data) => {
        return (
          <div
            onClick={(e) => handleUpdateModal(e, data.productId)}
            key={data.productId}
            className="product bg-card01 mt-2 py-2 px-4 br-20 w-100 d-flex align-items-center justify-content-between"
          >
            <div className="bullet03"></div>
            <div className="wrap-img"></div>
            <p className="font-14 fw-200">{data.productCode}</p>
            <div className="hr-right"></div>
            <p className="font-14 fw-200">{data.productName}</p>
            <div className="hr-right"></div>
            <div className="d-flex flex-column py-2">
              {data.variants.map((variant) => {
                return (
                  <div key={variant.productVariant.variantId}>
                    <div className="bg-white font-14 text-dark-blue py-1 px-2 br-20 br-dark-blue">
                      {variant.productVariant.variantName}
                      <img className="ml-2" src={require("assets/images/product/Close.png")} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="hr-right"></div>
            <div className="d-flex flex-wrap" style={{ width: "10%" }}>
              <p className="bg-purple py-1 px-2 mr-2 text-white fw-200 font-14 br-20 mt-1">Outlets 01</p>
            </div>

            <div className="hr-right"></div>

            <div className="d-flex align-items-center">
              <p className="font-14 fw-200 mr-4">{data.Category.categoryName}</p>
              <img src={require("assets/images/product/arrow-bottom.png")} alt="" />
            </div>

            <div className="hr-right"></div>

            <p className="font-14 fw-200 mr-4">{data.productPrice}</p>

            <div className="hr-right"></div>

            <p className="font-14 fw-200">{data.productCost}</p>
          </div>
        );
      })}
      {updateProduct ? (
        <>
          <div onClick={handleCloseUpdate} className="overlay-modal"></div>
          <Slide right>
            <div className="modal-right p-4">
              <div className="w-100 d-flex justify-content-between">
                <h1 className="font-weight-bold font-24">Product information</h1>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center mr-5">
                    <p className="text-gray font-18 mr-3">Duplicate product</p>
                    <img src={require("assets/images/product/copy (1).png")} alt="" />
                  </div>
                  <div className="d-flex align-items-center mr-5">
                    <p onClick={(e) => deleteData(e, id)} className="text-gray font-18 mr-3">
                      Delete product
                    </p>
                    <img src={require("assets/images/product/trash (1).png")} alt="" />
                  </div>
                  <img onClick={handleCloseUpdate} src={require("assets/images/product/Close (1).png")} alt="" />
                </div>
              </div>
              <hr className="my-3 mx-0" />
              <div className="d-flex justify-content-between align-items-start">
                <div className="wrap-img"></div>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <p className="font-14 text-gray w-75 ws-nwrap">Product name</p>
                    <input
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="form-control br-20"
                      placeholder="Martabak Manis"
                    />
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <p className="font-14 text-gray w-75 ws-nwrap">Product code</p>
                    <input
                      onChange={(e) => setCode(e.target.value)}
                      name="code"
                      value={code}
                      className="form-control br-20"
                      placeholder="MTB-001"
                    />
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <p className="font-14 text-gray w-75 ws-nwrap text-red">
                      <u>Category</u>
                    </p>

                    <div className="wrap-select">
                      {/* <input value={singleProduct.Category} className="form-control br-20" /> */}
                      {/* {singleProduct.Category.map((item) => {
                          return (
                            <option key={item.id} value={item.categoryName}>
                              Food
                            </option>
                          );
                        })} */}
                      {/* </select> */}
                      <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <p className="font-14 text-gray w-75 ws-nwrap">Cost</p>
                    <input
                      onChange={(e) => setCost(e.target.value)}
                      name="cost"
                      value={cost}
                      className="form-control br-20"
                      placeholder="Rp. 10,000"
                    />
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <p className="font-14 text-gray w-75 ws-nwrap">Selling price</p>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      name="price"
                      value={price}
                      className="form-control br-20"
                      placeholder="Rp. 50,000"
                    />
                  </div>
                </div>
              </div>
              <hr className="my-3 mx-0" />

              <div className="d-flex align-items-center py-2">
                <p className="font-14 text-gray ws-nwrap text-red mr-3">
                  <u>Outline</u>
                </p>
                <div className="bg-purple font-14 text-white py-2 px-4 br-20 mr-3">Gading Serpong</div>

                <div className="bg-pink font-14 text-white py-2 px-4 br-20 mr-3">Bandar Sunway</div>
                <div className="bg-verdant font-14 text-white py-2 px-4 br-20 mr-3">Kota Bahru</div>
                <div className="bg-green font-14 text-white py-2 px-4 br-20 mr-3">Waroeng Batavia</div>

                <div className="bg-blue font-14 text-white py-2 px-4 br-20 mr-3">Shah Alam</div>
              </div>

              <hr className="my-3 mx-0" />

              <div className="d-flex align-items-start justify-content-between">
                <p className="font-14 text-gray ws-nwrap text-red mr-3">
                  <u>Variants</u>
                </p>
                <div className="d-flex flex-column w-25">
                  <div className="bg-white br-dark-blue font-14 text-dark-blue py-2 px-4 br-20 mr-3 w-100 d-flex  align-items-center  justify-content-center">
                    Size
                    <img className="ml-2" src={require("assets/images/product/Close.png")} alt="" />
                  </div>
                  <div className="w-100 d-flex justify-content-between mt-2 px-2">
                    <p className="font-12 text-gray">Small</p>
                    <p className="font-12 text-gray">+ Rp. 0</p>
                  </div>
                  <div className="w-100 d-flex justify-content-between mt-2 px-2">
                    <p className="font-12 text-gray">Medium</p>
                    <p className="font-12 text-gray">+ Rp. 5,000</p>
                  </div>
                  <div className="w-100 d-flex justify-content-between mt-2 px-2">
                    <p className="font-12 text-gray">Large</p>
                    <p className="font-12 text-gray">+ Rp. 10,000</p>
                  </div>
                </div>
                <div className="d-flex flex-column w-25">
                  <div className="bg-white br-dark-blue font-14 text-dark-blue py-2 px-4 br-20 mr-3 w-100 d-flex  align-items-center  justify-content-center">
                    Sweetness
                    <img className="ml-2" src={require("assets/images/product/Close.png")} alt="" />
                  </div>
                  <div className="w-100 d-flex justify-content-between mt-2 px-2">
                    <p className="font-12 text-gray">Normal</p>
                    <p className="font-12 text-gray">+ Rp. 0</p>
                  </div>
                  <div className="w-100 d-flex justify-content-between mt-2 px-2">
                    <p className="font-12 text-gray">Extra sweet</p>
                    <p className="font-12 text-gray">+ Rp. 0</p>
                  </div>
                </div>
                <div className="bg-white br-dashed-dark-blue font-14 text-dark-blue py-2 px-4 br-20 mr-3 w-25 d-flex align-items-center   justify-content-center">
                  <img className="mr-2" src={require("assets/images/product/Add.png")} alt="" />
                  Add another variant
                </div>
              </div>

              <button
                onClick={(e) => putData(e, id)}
                className="btn bg-red text-white font-18 font-weight-bold br-20 position-absolute"
                style={{ bottom: "30px", right: "30px" }}
              >
                Save updates
              </button>
            </div>
          </Slide>
        </>
      ) : (
        ""
      )}
      {createProduct ? (
        <>
          <div onClick={handleCreateModal} className="overlay-modal"></div>
          <Slide right>
            <div className="modal-right p-4">
              <div className="w-100 d-flex justify-content-between">
                <h1 className="font-weight-bold font-24">Product information</h1>
                <div className="d-flex align-items-center">
                  {/* <div className="d-flex align-items-center mr-5">
                    <p className="text-gray font-18 mr-3">Duplicate product</p>
                    <img src={require("assets/images/product/copy (1).png")} alt="" />
                  </div>
                  <div className="d-flex align-items-center mr-5">
                    <p onClick={(e) => deleteData(e, id)} className="text-gray font-18 mr-3">
                      Delete product
                    </p>
                    <img src={require("assets/images/product/trash (1).png")} alt="" />
                  </div> */}
                  <img onClick={handleCreateModal} src={require("assets/images/product/Close (1).png")} alt="" />
                </div>
              </div>
              <hr className="my-3 mx-0" />
              <div className="d-flex justify-content-between align-items-start">
                <div className="wrap-img"></div>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <p className="font-14 text-gray w-75 ws-nwrap">Product name</p>
                    <input
                      name="name"
                      onChange={(e) => setName(e.target.name)}
                      className="form-control br-20"
                      placeholder="Martabak Manis"
                    />
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <p className="font-14 text-gray w-75 ws-nwrap">Product code</p>
                    <input
                      onChange={(e) => setCode(e.target.name)}
                      name="code"
                      className="form-control br-20"
                      placeholder="MTB-001"
                    />
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <p className="font-14 text-gray w-75 ws-nwrap text-red">
                      <u>Category</u>
                    </p>

                    <div className="wrap-select">
                      {/* <input value={singleProduct.Category} className="form-control br-20" /> */}
                      {/* {singleProduct.Category.map((item) => {
                          return (
                            <option key={item.id} value={item.categoryName}>
                              Food
                            </option>
                          );
                        })} */}
                      {/* </select> */}
                      <img src={require("assets/images/product/Arrow-bottom2.png")} alt="" />
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <p className="font-14 text-gray w-75 ws-nwrap">Cost</p>
                    <input
                      onChange={(e) => setCost(e.target.name)}
                      name="cost"
                      className="form-control br-20"
                      placeholder="Rp. 10,000"
                    />
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <p className="font-14 text-gray w-75 ws-nwrap">Selling price</p>
                    <input
                      onChange={(e) => setPrice(e.target.name)}
                      name="price"
                      className="form-control br-20"
                      placeholder="Rp. 50,000"
                    />
                  </div>
                </div>
              </div>
              <hr className="my-3 mx-0" />

              <div className="d-flex align-items-center py-2">
                <p className="font-14 text-gray ws-nwrap text-red mr-3">
                  <u>Outline</u>
                </p>
                <div className="bg-purple font-14 text-white py-2 px-4 br-20 mr-3">Gading Serpong</div>

                <div className="bg-pink font-14 text-white py-2 px-4 br-20 mr-3">Bandar Sunway</div>
                <div className="bg-verdant font-14 text-white py-2 px-4 br-20 mr-3">Kota Bahru</div>
                <div className="bg-green font-14 text-white py-2 px-4 br-20 mr-3">Waroeng Batavia</div>

                <div className="bg-blue font-14 text-white py-2 px-4 br-20 mr-3">Shah Alam</div>
              </div>

              <hr className="my-3 mx-0" />

              <div className="d-flex align-items-start justify-content-between">
                <p className="font-14 text-gray ws-nwrap text-red mr-3">
                  <u>Variants</u>
                </p>
                <div className="d-flex flex-column w-25">
                  <div className="bg-white br-dark-blue font-14 text-dark-blue py-2 px-4 br-20 mr-3 w-100 d-flex  align-items-center  justify-content-center">
                    Size
                    <img className="ml-2" src={require("assets/images/product/Close.png")} alt="" />
                  </div>
                  <div className="w-100 d-flex justify-content-between mt-2 px-2">
                    <p className="font-12 text-gray">Small</p>
                    <p className="font-12 text-gray">+ Rp. 0</p>
                  </div>
                  <div className="w-100 d-flex justify-content-between mt-2 px-2">
                    <p className="font-12 text-gray">Medium</p>
                    <p className="font-12 text-gray">+ Rp. 5,000</p>
                  </div>
                  <div className="w-100 d-flex justify-content-between mt-2 px-2">
                    <p className="font-12 text-gray">Large</p>
                    <p className="font-12 text-gray">+ Rp. 10,000</p>
                  </div>
                </div>
                <div className="d-flex flex-column w-25">
                  <div className="bg-white br-dark-blue font-14 text-dark-blue py-2 px-4 br-20 mr-3 w-100 d-flex  align-items-center  justify-content-center">
                    Sweetness
                    <img className="ml-2" src={require("assets/images/product/Close.png")} alt="" />
                  </div>
                  <div className="w-100 d-flex justify-content-between mt-2 px-2">
                    <p className="font-12 text-gray">Normal</p>
                    <p className="font-12 text-gray">+ Rp. 0</p>
                  </div>
                  <div className="w-100 d-flex justify-content-between mt-2 px-2">
                    <p className="font-12 text-gray">Extra sweet</p>
                    <p className="font-12 text-gray">+ Rp. 0</p>
                  </div>
                </div>
                <div className="bg-white br-dashed-dark-blue font-14 text-dark-blue py-2 px-4 br-20 mr-3 w-25 d-flex align-items-center   justify-content-center">
                  <img className="mr-2" src={require("assets/images/product/Add.png")} alt="" />
                  Add another variant
                </div>
              </div>

              <button
                onClick={(e) => putData(e, id)}
                className="btn bg-red text-white font-18 font-weight-bold br-20 position-absolute"
                style={{ bottom: "30px", right: "30px" }}
              >
                Finish create
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
    getAllProduct();
  }, []);

  return <Main content={content} />;
}

export default Products;
