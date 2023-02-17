/* eslint-disable jsx-a11y/alt-text */
// import addOneToCart from "./Cartcontext";
import {  Link } from "react-router-dom";
import Loader from "react-js-loader";
const Posts = ({ posts, loading, cart }) => {
  
  if (loading) {
    return (
      <div className={"item"}>
      <Loader
        type="box-rotate-x"
        bgColor={"#BF40BF"}
        color={"#FFFFFF"}
        size={100}
      />
    </div>
    );
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
            state={{ data: post }} // your data array of objects
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

