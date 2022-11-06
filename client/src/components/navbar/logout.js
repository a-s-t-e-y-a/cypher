export default function Logout({text,handle}){
    return(
        <>
           <button onClick={handle} className="text-sm hover:text-purple-500">
                {text}
            </button> 
        </>
    )
}