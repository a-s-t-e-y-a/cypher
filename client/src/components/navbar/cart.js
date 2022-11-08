import { useEffect ,useState} from "react";
import { Link } from "react-router-dom";
export default function Cart({ text , handle}) {
    const [cart , setcart] = useState()
    useEffect((item)=>{
        let storage =localStorage.getItem('product')
        let local = JSON.parse(storage);
        if(local){
          setcart(local.length)
        }
        
    },[cart])
    return (
      <>
       <Link
      to={'/serve/'+text}
      className=" hover:bg-white hover:text-purple-500 hover:no-underline "
    >
          <button onClick={handle} type="submit" className="">
            {text}
            <span className="bg-purple-500 hover:opacity-90 text-white py-2 px-3 ml-2 rounded-full ">
                {
                        cart
                }
            </span>
          </button>
        </Link>
      </>
    );
  }
  