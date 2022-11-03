 

// import { createContext, useState } from "react";


//  export const CartContext = createContext({
//     items: [],
//     addOneToCart: () => {}
// });
 
// export function CartProvider({children}) {
//     const [cartProducts, setCartProducts] = useState([]);
    


//  function addOneToCart(id) {
//     const quantity = getProductQuantity(id);

//     if (quantity === 0) { // product is not in cart
//         setCartProducts(
//             [
//                 ...cartProducts,
//                 {
//                     id: id,
//                     quantity: 1
//                 }
//             ]
//         )
//     } else { // product is in cart
//         // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
//         setCartProducts(
//             cartProducts.map(
//                 product =>
//                 product.id === id                                // if condition
//                 ? { ...product, quantity: product.quantity + 1 } // if statement is true
//                 : product                                        // if statement is false
//             )
//         )
//     }
// }}


// export default CartProvider;