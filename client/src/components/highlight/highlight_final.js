import { Highlight_data } from "./constant/highlight_constant";
import Highlight_template from "./highlight_template";
const info = Highlight_data;
export default function Highlight(){
    return(
        <>
            <Highlight_template
             Heading ={info.heading1}
             para1={info.para1}
             para2={info.para2}
             para3={info.para3}
             />
        </>
    )
}