"use client";
import { images } from "@/constants";
import { useProjectContext } from "@/context";
import Image from "next/image";
import React from "react";
import ItemQuantity from "./itemQuantity";

function CheckOut() {
  const { darkmode, setAddItem, currentList, getCategoriesObj } =
    useProjectContext();

  const categories = getCategoriesObj(currentList!);
  return (
    <section
      className={`w-80 fixed ${
        darkmode
          ? "bg-darkmodeSec text-white"
          : "bg-butterColor text-darkmodePrimary"
      } pt-8 right-0 top-0 bottom-0 flex flex-col justify-between `}
    >
      <div
        className={`px-6 flex flex-col ${
          currentList!.length > 0 ? "items-start gap-y-4" : "items-center gap-y-16"
        } `}
      >
        <div className="bg-[#722f37] rounded-xl gap-x-4 flex justify-between h-28">
          <Image
            src={images.source}
            alt="bottle"
            className="max-w-[30%] min-h-28 object-contain -translate-y-4"
          />
          <article className="py-4 text-sm flex flex-col items-start gap-y-2 pr-6">
            <h3 className="font-semibold text-white">
              Didn't find what you need?
            </h3>
            <button
              onClick={() => setAddItem(true)}
              className="text-darkmodePrimary bg-white font-semibold py-1 px-4 rounded-lg"
            >
              Add Item
            </button>
          </article>
        </div>

        {currentList!.length === 0 ? (
          <div className="">
            <p className="text-center font-bold">No items</p>
          </div>
        ) : (
          <div className="text-lg self-start space-y-3 w-full">
            <h2 className="font-semibold ">Current List</h2>
            {Object.entries(categories).map(([category, items]): any => {
              return (
                <div
                  key={category}
                  className="flex flex-col items-start  w-full"
                >
                  <h3 className=" text-gray-400 text-sm capitalize">
                    {category}
                  </h3>

                  <div
                    className={`flex flex-col ${
                      currentList!.length > 6
                        ? "text-xs gap-y-0"
                        : "text-sm gap-y-2"
                    } w-full `}
                  >
                    <ItemQuantity key={category} items={items} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center">
        {currentList?.length === 0 && (
          <Image
            alt="cart-image"
            src={images.shoppingCart}
            className="self-center"
          />
        )}

        <div
          className={`h-24 w-full rounded-t-2xl p-6 ${
            darkmode ? "bg-darkmodeTertiary" : "bg-white"
          } flex items-center `}
        >
          <input
            type="text"
            placeholder="Enter a name"
            className={`border-2 px-4  h-full w-[70%] ${
              darkmode ? "border-0 bg-darkmodePrimary" : "border-r-0"
            } rounded-l-xl`}
            name="collection name"
            value={""}
            onChange={() => console.log("yes")}
          />
          <button
            // disabled
            className="h-full bg-orange-400 -ml-2 text-white font-bold w-[30%] rounded-xl disabled:bg-gray-400"
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
}

export default CheckOut;
