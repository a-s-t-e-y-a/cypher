import axios from "axios";
import { useState, useEffect } from "react";
import Template from "./template";
export default function Boys_item_base() {
  const [post, setPost] = useState([]);
  const [image, setimage] = useState([]);
  let b = 0;
  useEffect(() => {
    axios.get("http://localhost:8000/api/aggregate/boys").then((response) => {
      // console.log(response);
      setPost(response.data.msg);
    });
  }, []);
  // console.log(post);
  return (
    <>
      {post.map((data) => (
        <div>
          <Template
                  extension={data.result[0].extension}
                  content={data.result[0].buff_data}
                  pri={data.price}
                  tit={data.title}
          />
        </div>
      ))}
    </>
  );
}

