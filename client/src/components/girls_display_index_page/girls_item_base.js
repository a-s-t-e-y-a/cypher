import { Girls } from "./constant/girls_data_index";
import Girls_template from "./girls_template";
const info = Girls;
export default function Girls_item_base() {
    return (
        <>
          {info.map((data) => (
            <div>
              <Girls_template img={data.image} tit={data.title} pri={data.price} />
            </div>
          ))}
        </>
      );
}
