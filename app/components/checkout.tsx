"use client";
import { images } from "@/constants";
import { useProjectContext } from "@/context";
import Image from "next/image";
import React from "react";

function CheckOut() {
  const { darkmode } = useProjectContext();
  return (
    <section
      className={`w-80 fixed ${
        darkmode ? "bg-darkmodeSec text-white" : "bg-butterColor text-darkmodePrimary"
      } p-8 right-0 top-0 bottom-0 flex flex-col justify-between `}
    >
      <div className="bg-[#722f37] rounded-xl gap-x-4 flex justify-between h-28">
        <Image src={images.source} alt="bottle" className="max-w-[30%] min-h-28 object-contain -translate-y-4" />
        <article className="py-4 text-sm flex flex-col items-start gap-y-2 pr-6">
          <h3 className="font-semibold text-white">Didn't find what you need?</h3>
          <button className="text-darkmodePrimary bg-white font-semibold py-1 px-4 rounded-lg">
            Add Item
          </button>
        </article>
      </div>

      <div>
        <p className="text-center">No items</p>
      </div>
    </section>
  );
}

export default CheckOut;
