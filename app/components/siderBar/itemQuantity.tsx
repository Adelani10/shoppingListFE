// import { dataTypes } from "@/context";
import React from "react";

function ItemQuantity({items}: any) {

    console.log(items)

  return (
    <>
      {items.map((item: any, index: number): any => {
        <div key={index} className="flex justify-between border">
          <h3>{item.name}</h3>

          <div>
            <button className="px-3 py-1 border border-orange-400">2 pcs</button>
          </div>
        </div>;
      })}
    </>
  );
}

export default ItemQuantity;
