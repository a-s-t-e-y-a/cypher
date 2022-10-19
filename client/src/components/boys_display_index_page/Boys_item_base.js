import { Boys } from "./constant/boys_data_index";
import Template from "./template";
const info = Boys;
export default function Boys_item_base() {
  return (
    <>
      {info.map((data) => (
        <div>
          <Template img={data.image} tit={data.title} pri={data.price} />
        </div>
      ))}
    </>
  );
}
