import Button from "./button";

export default function Checkout_sidebar({ total, delivery }) {
  return (
    <>
      <div className="text-lg  h-24">
        <div className="mt-24 bg-purple-500 pr-24 pl-4 py-2 rounded text-white font-semibold mb-12">
          <h1 className="mb-2">Sub total : - {total}</h1>
          <h1 className="">Delivery : - {delivery}</h1>
        </div>
        <Button title="Checkout" />
      </div>
    </>
  );
}
