/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */

import Header from "./header";
import Checkout_sidebar from "./checkout_side_bar";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
export default function Final_cart() {
  const [data] = useState(() => {
    return localStorage.getItem("product") || [];
  });


  let sum = 0;
  JSON.parse(data).map(async (dat) => {
    await (sum = sum + dat.price * dat.quantity);
  });

  // console.log(JSON.parse(data))
  const new_data = JSON.parse(data);

  return (
    <>
      <div className="container shadow-lg mt-12 p-12">
        <div className="flex justify-between">
          <div className="w-3/4">
            <Header title="MY SHOP" tag_line="Go back to home" />
            {new_data.map((dat) => {
              console.log(dat)
              return (
                <div className="flex justify-start items-center mb-4 gap-4">
                <div>
                <Link to="/serve/display/param"
                        state={{ data: dat }} // your data array of objects
                        className="hover:no-underline hover:text-black">
                  <img
                    src={`data:${dat.result[0].extension};base64,${dat.result[0].buff_data}`}
                    className="h-32 w-32 rounded-lg mr-24 shadow-lg"
                  ></img>
                  </Link>
                </div>
                <div>
                  <h1 className="text-xl  mb-1 ">{dat.title}</h1>
                  <h1 className="text-xs text-gray-500 mb-1 ">Sold by : - {dat.sold_by}</h1>
                  <h1 className="text-lg font-bold  mb-1 ">
                  Price :- Rs {dat.price}
                  </h1>
                  <h1 className="text-gray-500 text-sm ">
                    Quantity : {dat.quantity}
                  </h1>
                  <Button 
                  title = "Remove item"/>
                </div>
              </div>
              );
            })}
          </div>
          <Checkout_sidebar total={sum.toLocaleString("en-US")} />
        </div>
      </div>
    </>
  );
}
