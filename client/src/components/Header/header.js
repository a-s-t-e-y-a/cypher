import { Data, Data2, Data3, Data4, Data5} from "./constant/header_text";


export default function Headerit(){

return(
    <>
    <div className="mt-36">
       <div className="flex justify-center">
            <div className="justify-item text-8xl ml-8 font-serif ..."> {Data}</div>
        </div>
        <div className="flex justify-center">
             <div className=" pr-36 mr-40 text-8xl font-serif ..."> {Data2}</div>
        </div>
        <div className="flex justify-center">
             <div className=" pl-52 ml-64 text-8xl font-serif ..."> {Data3}</div>
        </div>
        <div className="flex justify-center">
            <div className="flex justify-center ">
              <div className="text-8xl font-serif ..."> {Data4}</div>
            </div>
            <span className="w-1/4 mt-4 ml-4 text-sm"><p className="text-left">Making a fashion collection for the new society these days can be really hard. 
            In fact, designing a collection is way harder than you think.yoy are the most powerful person always and be always </p></span>
        </div>  
        <div className="flex justify-end pt-32 pr-64">
              <div className="font-serif ... underline underline-offset-8  ..."> {Data5}</div>
        </div>
    </div>

    
    </>
)
}