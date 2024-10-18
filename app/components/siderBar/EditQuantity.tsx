"use client";
import { mainItemTypes, useProjectContext } from "@/context";
import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { FaMinus, FaPlus } from "react-icons/fa6";

function EditQuantity({ items }: any) {
  const [toBeEdited, setToBeEdited] = useState<boolean>(false);
  const { darkmode, currentList, setCurrentList } = useProjectContext();

  const increaseQuantity = (item: mainItemTypes) => {
    const newArr = currentList?.map((obj: mainItemTypes) => {
      if (item.id === obj.id) {
        return {
          ...obj,
          quantity: obj.quantity + 1,
        };
      }
      return obj;
    });
    setCurrentList(newArr);
  };

  const decreaseQuantity = (item: mainItemTypes) => {
    const newArr = currentList?.map((obj: mainItemTypes) => {
      if (item.id === obj.id) {
        return {
          ...obj,
          quantity: obj.quantity - 1,
        };
      }
      return obj;
    });
    setCurrentList(newArr);
  };

  const deleteItemFromList = (item: mainItemTypes) => {
    const newArr = currentList?.filter(
      (obj: mainItemTypes) => item.id !== obj.id
    );
    setCurrentList(newArr);
  };

  return (
    <>
      {items.map((item: mainItemTypes, index: number) => {
        return (
          <div key={index} className="flex w-full items-center justify-between">
            <h3 className="tracking-tighter capitalize">{item.name}</h3>

            <div
              className={`text-orange-400 flex items-center justify-between h-6  ${
                darkmode ? "bg-darkmodeTertiary" : "bg-white"
              } ${toBeEdited ? "rounded-lg" : "rounded-xl"} rounded-lg text-xs`}
            >
              {toBeEdited && (
                <button
                  onClick={() => deleteItemFromList(item)}
                  className="h-full bg-orange-400 rounded-lg flex p-2 justify-center mr-2 items-center"
                >
                  <FiTrash className="text-white" />
                </button>
              )}

              {toBeEdited && (
                <button
                  disabled={item.quantity === 1}
                  onClick={() => decreaseQuantity(item)}
                  className="mr-2"
                >
                  <FaMinus />
                </button>
              )}

              <button
                onClick={() => setToBeEdited(!toBeEdited)}
                className={`px-2 ${
                  darkmode ? "" : "border border-orange-400"
                }  h-full ${
                  toBeEdited ? "rounded-lg mr-2" : "rounded-xl"
                } font-bold  `}
              >
                {`${item.quantity} ${item.quantity < 2 ? "pc" : "pcs"}`}
              </button>

              {toBeEdited && (
                <button
                  onClick={() => increaseQuantity(item)}
                  className="h-full mr-2"
                >
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

export default EditQuantity;
