// import { Girls } from "./constant/girls_data_index";
// import Girls_template from "./girls_template";
// const info = Girls;
// // console.log(info)
// export default function Girls_item_base() {
//     return (
//         <>
//           {info.map((data) => (
//             <div>
//               <Girls_template img={data.image} tit={data.title} pri="dfds" />
//             </div>
//           ))}
//         </>
//       );
// }

import axios from "axios";
import { useState, useEffect } from "react";
import Girls_template from "./girls_template";
export default function Girls_item_base() {
  const [post, setPost] = useState([]);
  const [image, setimage] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((response) => {
      console.log(response);
      setPost(response.data.result);
    });
    axios.get("http://localhost:8000/image").then((response) => {
      console.log(response);
      setimage(response.data.data);
    });
  }, []);
  console.log(post);
  return (
    <>
      {post.map((data) =>
        image.map((info) =>
          data._id == info.related_product_id && info.image_type=="cover"? (
            <div>
              <Girls_template
                extension={info.extension}
                content={info.buff_data}
                tit={data.title}
                pri={data.price}
              />
            </div>
          ) : (
            console.log(false)
          )
        )
      )}
    </>
  );
}
