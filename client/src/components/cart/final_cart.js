import Product from "./product";
import Header from "./header";
import Checkout_sidebar from "./checkout_side_bar";
import { useState } from "react";
export default function Final_cart() {
  const [data, setdata] = useState(() => {
    return localStorage.getItem("product") || [];
  });
  const [t1, sett1] = useState(1);

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
              return (
                <Product
                  title={dat.title}
                  sold_by={dat.country_origin}
                  price={dat.price}
                  quantity={dat.quantity}
                  extension = {dat.result[0].extension}
                  buff_data={dat.result[0].buff_data}
                />
              );
            })}
          </div>
          <Checkout_sidebar total={sum.toLocaleString("en-US")} />
        </div>
      </div>
    </>
  );
}
