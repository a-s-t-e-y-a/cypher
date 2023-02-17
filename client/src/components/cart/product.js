/* eslint-disable jsx-a11y/alt-text */
import Button from "./button";

export default function Product({
  title,
  sold_by,
  price,
  quantity,
  buff_data,
  extension
}) {
  return (
    <>
      <div className="flex justify-start items-center mb-4 gap-4">
        <div>
      
          <img
            src={`data:${extension};base64,${buff_data}`}
            className="h-32 w-32 rounded-lg mr-24 shadow-lg"
          ></img>
          
        </div>
        <div>
          <h1 className="text-xl  mb-1 ">{title}</h1>
          <h1 className="text-xs text-gray-500 mb-1 ">Sold by : - {sold_by}</h1>
          <h1 className="text-lg font-bold  mb-1 ">
          Price :- Rs {price}
          </h1>
          <h1 className="text-gray-500 text-sm ">
            Quantity : {quantity}
          </h1>
          <Button 
          title = "Remove item"/>
        </div>
      </div>
    </>
  );
}
