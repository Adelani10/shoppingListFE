import { mainItemTypes, useProjectContext } from "@/context";
import React from "react";

function HistoryItemCard({ items }: any) {
  const { darkmode } = useProjectContext();

  return (
    <>
      {items.map((item: mainItemTypes) => {
        return (
          <div
            key={item.id}
            className={`${
              !darkmode ? "bg-white" : "bg-darkmodeTertiary"
            } w-36 flex justify-between items-center px-2 py-1 rounded-lg h-10`}
          >
            <h3 className="text-sm capitalize">{item.name}</h3>
            <p className="text-orange-400 font-bold text-xs">{`${item.quantity} pcs`}</p>
          </div>
        );
      })}
    </>
  );
}

export default HistoryItemCard;
