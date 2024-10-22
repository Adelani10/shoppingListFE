import React from "react";

function StatusBar({ color, item, percentage }: any) {
  console.log(percentage)
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <div className="flex justify-between font-semibold text-sm">
        <h3>{item}</h3>
        <h3>{`${percentage}%`}</h3>
      </div>
      <div className="h-1 rounded-full bg-gray-300 w-full">
        <div
          className={`h-full rounded-full ${
            color === "blue" ? "bg-sky-400" : "bg-orange-400 "
          } w-[${percentage}%]`}
        ></div>
      </div>
    </div>
  );
}

export default StatusBar;
