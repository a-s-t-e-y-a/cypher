import React, { useState, useEffect } from "react";
import addOneToCart from "./Cartcontext";

const Posts = ({ posts, loading, cart }) => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(product));
  }, [product]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  function addItem(post) {
    let newcart = [...product];
    let item = newcart.find((item)=>post.productid == item.productid)
    console.log(item  )
    if(item){
      item.quantity++;
    }
    else{
      item = {
        ...post,
        quantity: 1,
      }
      console.log(newcart)
      newcart.push(item);
    }
    
    setproduct(newcart);
  }
  return (
    <div className="grid grid-cols-4 my-32 gap-16 pl-12">
      {posts.map((post) => (
        <>
          <div className="pt-12">
            <img
              style={{ height: 400 }}
              className=" shadow-lg"
              src={`data:${post.result[0].extension};base64,${post.result[0].buff_data}`}
            />
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-2xl">{post.title}</h2>
              <button
                sm="6"
                onClick={() => {
                  addItem(post);
                }}
              >
                <span className="text-black bg-blue-400 rounded-lg px-2 py-2">
                  {post.price}
                </span>
              </button>
            </div>
          </div>
        </>
      ))}
      {/* {console.log(array)} */}
    </div>
  );
};

export default Posts;
