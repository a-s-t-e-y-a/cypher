/* eslint-disable react/jsx-pascal-case */
import Girls_item_base from "./girls_item_base";
export default function Girls_final() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-4 my-32 gap-4 pl-12">
          <div>
            <h1 className="font-serif ... mt-64  ml-2 pt-24 text-xl font-bold">
              NEW IN WOMEN
            </h1>
            <h2 className="ml-2">view all products</h2>
          </div>
          <Girls_item_base />
        </div>
      </div>
    </>
  );
}
