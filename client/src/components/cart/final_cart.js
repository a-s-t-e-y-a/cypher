import Product from "./product";
import Header from "./header";
import Checkout_sidebar from "./checkout_side_bar";
export default function Final_cart() {
  return (
    <>
      <div className="container shadow-lg mt-12 p-12">
        <div className="flex justify-between">
          <div className="w-3/4">
            <Header title="MY SHOP" tag_line="Go back to home" />
            <Product 
                title ="Product title goes here"
                sold_by="Country name goes here"
                price ="Price goes here"
            />
            <Product 
                title ="Product title goes here"
                sold_by="Country name goes here"
                price ="Price goes here"
            />
            <Product 
                title ="Product title goes here"
                sold_by="Country name goes here"
                price ="Price goes here"
            />
            <Product 
                title ="Product title goes here"
                sold_by="Country name goes here"
                price ="Price goes here"
            />
            <Product 
                title ="Product title goes here"
                sold_by="Country name goes here"
                price ="Price goes here"
            />
          </div>
          <Checkout_sidebar />
        </div>
      </div>
    </>
  );
}
