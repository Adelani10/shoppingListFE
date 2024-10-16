import { useProjectContext } from "@/context";
import React from "react";

function HistoryItemCard() {
  const { darkmode } = useProjectContext();

  return (
    <div
      className={`${
        !darkmode ? "bg-white" : "bg-darkmodeTertiary"
      } w-36 flex justify-between items-center px-2 py-1 rounded-lg h-10`}
    >
      <h3 className="text-sm ">Diet Coke</h3>
      <p className="text-orange-400 font-bold text-xs">10 pcs</p>
    </div>
  );
}

export default HistoryItemCard;
