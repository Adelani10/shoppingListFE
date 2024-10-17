// import { dataTypes } from "@/context";
import { dataTypes } from "@/context";
import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { FaMinus, FaPlus } from "react-icons/fa6";

function ItemQuantity({ items }: any) {
  const [toBeEdited, setToBeEdited] = useState<boolean>(false);
  console.log(items);

  return (
    <>
      {items.map((item: dataTypes, index: number) => {
        return (
          <div key={index} className="flex w-full items-center justify-between">
            <h3 className="tracking-tighter capitalize">{item.name}</h3>

            <div className="text-orange-400 flex items-center justify-between h-6 bg-white rounded-lg text-xs">

              {toBeEdited && (
                <button className="h-full bg-orange-400 rounded-lg flex p-2 justify-center mr-2 items-center">
                  <FiTrash className="text-white" />
                </button>
              )}

              {toBeEdited && (
                <button className="mr-2">
                  <FaMinus />
                </button>
              )}

              <button
                onClick={() => setToBeEdited(!toBeEdited)}
                className={`px-2 border h-full ${
                  toBeEdited ? "rounded-lg mr-2" : "rounded-xl"
                } font-bold border-orange-400 `}
              >
                2 pcs
              </button>

              {toBeEdited && (
                <button className="h-full mr-2">
                  <FaPlus />
                </button>
              )}

              <button></button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ItemQuantity;
