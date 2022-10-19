import Products from '../constant/productitem'
const Row01 = ()=>{
    return(
        <>
        
            <div className="pt-64">
                <div className="grid grid-cols-4 my-32 gap-4 pl-12">
                  <div><h1 className="font-serif ... mt-64  ml-2 pt-24 text-xl font-bold">NEW IN WOMAN</h1><h2 className="ml-2">view all products</h2></div>
                    <Products/>
                    <Products/>
                    <Products/>
                    <Products/>
                    <Products/>
                    <Products/>
                    <Products/>

                </div>
            </div>
        
        
        
        
        
        </>
    
    
    
    )}
    export default Row01;