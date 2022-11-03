import Button from "./button";
export default function Product({
  title,
  sold_by,
  price,
  quantity
}) {
  return (
    <>
      <div className="flex justify-start items-center mb-4 gap-4">
        <div>
          <img
            src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
            className="h-32 w-32 rounded-lg mr-24"
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
