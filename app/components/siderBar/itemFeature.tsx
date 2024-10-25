"use client";

import { useProjectContext } from "@/context";
import Image from "next/image";
import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

function ItemFeature() {
  const [isAddingToList, setIsAddingToList] = useState<boolean>(false);
  const {
    darkmode,
    itemClickedOn,
    currentList,
    setIsItemClicked,
    setCurrentList,
    setShowCheckout,
  } = useProjectContext();

  return (
    <section
      className={`sm:w-80 fixed ${
        darkmode ? "bg-darkmodeSec text-white" : "bg-white text-darkmodePrimary"
      } p-7 right-0 top-0 bottom-0 w-screen-minus-16 z-50 flex flex-col justify-between `}
    >
      <button
        className="text-orange-400 flex items-center gap-x-2"
        onClick={() => setIsItemClicked(false)}
      >
        <IoArrowBackOutline />
        <p>Back</p>
      </button>

      <div className="flex flex-col gap-y-6">
        <div className="w-[85%] h-40 self-center">
          <Image
            alt={`${itemClickedOn?.name} image`}
            src={itemClickedOn?.image || ""}
            className="object-cover h-full w-full rounded-xl"
            width={80}
            height={40}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-gray-400 text-xs">name</p>
          <p className=" text-xl capitalize">{itemClickedOn?.name}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-gray-400 text-xs">category</p>
          <p className="capitalize">{itemClickedOn?.category}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-gray-400 text-xs">note</p>
          <p className="text-xs">{itemClickedOn?.note}</p>
        </div>
      </div>

      <div className="flex items-center self-center text-lg">
        <button
          // onClick={() => setIsItemClicked(false)}
          className="p-3 text-sm font-semibold disabled:text-gray-400 "
          disabled
        >
          delete
        </button>

        <button
          disabled={isAddingToList === true}
          onClick={async () => {
            try {
              const containsItemAlready = currentList.some((item) => {
                return item.id === itemClickedOn?.id;
              });

              if (!containsItemAlready) {
                setCurrentList((prev: any) => {
                  return [...prev, itemClickedOn];
                });
              } else {
                console.log("something went wrong");
              }
              setIsAddingToList(true);
              setTimeout(() => {
                setIsItemClicked(false);
                setIsAddingToList(false);
                setShowCheckout(true);
              }, 1000);
            } catch (error) {
              console.log(error);
            }
          }}
          className={`text-white rounded-xl disabled:bg-orange-200 disabled:text-gray-300 bg-orange-400 font-semibold p-3 text-sm tracking-wider`}
        >
          Add to list
        </button>
      </div>
    </section>
  );
}

export default ItemFeature;
