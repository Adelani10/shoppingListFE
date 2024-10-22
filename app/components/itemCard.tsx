import { mainItemTypes, useProjectContext } from "@/context";
import React from "react";
import { FaPlus } from "react-icons/fa6";

export default function ItemCard({ items }: any) {
  const { darkmode, setItemClickedOn, setIsItemClicked, currentList } =
    useProjectContext();

  return (
    <>
      {items.map((item: mainItemTypes) => {
        return (
          <div
            key={item.id}
            className={`${
              !darkmode ? "bg-white" : "bg-darkmodeTertiary"
            } md:w-36 w-full flex justify-between items-center px-2 py-1 rounded-lg h-10`}
          >
            <h3 className="text-sm capitalize">{item.name}</h3>
            <button
              onClick={() => {
                setItemClickedOn(item);
                setIsItemClicked(true);
              }}
              className="text-gray-400 h-3"
            >
              <FaPlus className=" h-full" />
            </button>
          </div>
        );
      })}
    </>
  );
}
