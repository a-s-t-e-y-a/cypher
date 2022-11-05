import axios from "axios";
import { useState, useEffect } from "react";
import Girls_template from "./girls_template";

export default function Girls_item_base() {
  const [post, setPost] = useState([]);
  const [image, setimage] = useState([]);

  useEffect(() => {
    console.log("123");
    axios.get("http://localhost:8000/api/aggregate/Female").then((response) => {
      console.log(response.data.msg)
      // if(response.data.msg.result[0].category==="Female"){
      setPost(response.data.msg);
      // }
    });
  }, []);
  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(post[i]);
  }
  console.log(post);
  return (
    <>
      {rows.map((data) => {
        //  {console.log(data.result[0].title) }

        return (
          <Girls_template
            extension={data.result[0].extension}
            content={data.result[0].buff_data}
            pri={data.price}
            tit={data.title}
          />
        );
      })}
    </>
  );
}
