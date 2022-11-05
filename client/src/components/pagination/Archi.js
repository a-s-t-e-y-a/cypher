import React, { useState, useEffect } from "react";
// import addOneToCart from "./Cartcontext";
import { useNavigate,Link } from "react-router-dom";
const Posts = ({ posts, loading, cart }) => {
  const [product, setproduct] = useState(() => {
    return JSON.parse(localStorage.getItem("product")) || [];
  });
  useEffect(() => {
    const res = localStorage.getItem("product");

    localStorage.setItem("product", JSON.stringify(product));
  }, [product]);
  const navigate = useNavigate();
  if (loading) {
    return <h2>Loading...</h2>;
  }
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
  }

  // function nav() {
  //   navigate("/her", { state: post });
  // }
  return (
    <div className="grid grid-cols-4 my-32 gap-16 pl-12">
      {posts.map((post) => (
        <>
          <Link
            to="/serve/display/param"
            state={{ data:post }} // your data array of objects
            className="hover:no-underline hover:text-black"
          >
            <div className="pt-12 flex justify-center">
              <div>
                <img
                  style={{ height: 400 }}
                  className=" shadow-lg mb-2"
                  src={`data:${post.result[0].extension};base64,${post.result[0].buff_data}`}
                />

                <h2 className="text-lg text-center break-words mb-4 font-serif ...">
                  {post.title}
                </h2>

                <h1 className="text-xl text-center font-bold font-serif ...">
                  Rs -:{post.price}
                </h1>
              </div>
            </div>
          </Link>
        </>
      ))}
      {/* {console.log(array)} */}
    </div>
  );
};
export default Posts;
      {/* {console.log(array)} *login/}
    </div>
  );
};


{
  /* <button
                sm="6"
                onClick={() => {
                  addItem(post);
                }}
              ></button> */
}
