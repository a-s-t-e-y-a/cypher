import axios from "axios";
import { useState, useEffect } from "react";
import Template from "./template";
export default function Boys_item_base() {
  const [post, setPost] = useState([]);
  const [image, setimage] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/aggregate/Male").then((response) => {
      // console.log(response);
      setPost(response.data.msg);
    });
  }, []);
  // console.log(post);
  let b = 0;
  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(post[i]);
  }
  return (
    <>
      {rows.map((data) => (
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

