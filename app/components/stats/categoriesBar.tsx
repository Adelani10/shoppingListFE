import React from "react";

function CategoriesBar({ label, percentage }: any) {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <div className="flex justify-between font-semibold text-sm">
        <h3>{label}</h3>
        <h3>{`${percentage}%`}</h3>
      </div>
      <div className="h-1 rounded-full bg-gray-300 w-full">
        <div
          style={{ width: `${percentage}%` }}
          className="h-full rounded-full bg-orange-400 "
        ></div>
      </div>
    </div>
  );
}

export default CategoriesBar;
