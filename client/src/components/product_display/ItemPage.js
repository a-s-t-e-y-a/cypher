/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavbarBase from "../navbar/navbarbase";
import GoToTop from "../gotop";
function ITEMPAGE() {
  const [product, setproduct] = useState(() => {
    return JSON.parse(localStorage.getItem("product")) || [];
  });
  useEffect(() => {
    

    localStorage.setItem("product", JSON.stringify(product));
  }, [product]);
  const { data } = useLocation().state;
  console.log(data);
  function addItem(post) {
    let newcart = [...product];
    let item = newcart.find((item) => post.productid == item.productid);
    console.log(item);
    if (item) {
      item.quantity++;
    } else {
      item = {
        ...post,
        quantity: 1,
      };
      console.log(newcart);
      newcart.push(item);
    }

    setproduct(newcart);
    window.location.reload(false);
  }
  return (
    <>
    <NavbarBase/>
      <Link
        to="/serve"
        className="text-sm hover:no-underline hover:text-black m-4  "
      >
        Go back to home
      </Link>
      <div>
        <div className="flex justify-center px-32 py-32">
          <img
            className="shadow-lg mr-64"
            style={{ height: 700 }}
            src={`data:${data.result[0].extension};base64,${data.result[0].buff_data}`}
          />
          <div className="pl-12 pt-8">
            <h1 className="font-bold text-3xl ">{data.title}</h1>
            <div className="flex gap-4 py-16">
              <button className="text-white text-4xl bg-purple-500 hover:bg-purple-700 rounded-full px-4 py-2">
                Trainers
              </button>
              <button className="text-white text-4xl bg-purple-500 hover:bg-purple-700 rounded-full px-4 py-2">
                {" "}
                Woman
              </button>
            </div>
            <p className="font-bold text-2xl">Rs- {data.price}</p>
            <div className="flex pt-8 gap-4">
              <span className="font-bold text-2xl  border-2 ...">Size</span>
              <span className="itelic text-2xl mx-2 border-2 ...">
                {data.size}
              </span>
            </div>
            <div className="py-16">
              <button
                onClick={() => {
                  addItem(data);
                }}
                className="rounded-lg text-white text-4xl bg-purple-500 hover:bg-purple-700 px-4 py-2"
              >
                {" "}
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <h1 className="text-6xl font-bold">About this product</h1>
        </div>
        <div className="px-16 py-12">
          <p className="px-32">{data.property_value}</p>
        </div>
      </div>
      <GoToTop/>
    </>
  );
}

export default ITEMPAGE;
