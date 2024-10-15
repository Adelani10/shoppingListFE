"use client";

import { images } from "@/constants";
import { useProjectContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

function ItemFeature() {
  const { darkmode } = useProjectContext();
  return (
    <section
      className={`w-80 fixed ${
        darkmode
          ? "bg-darkmodeSec text-white"
          : "bg-white text-darkmodePrimary"
      } p-7 right-0 top-0 bottom-0 flex flex-col justify-between `}
    >
      <button
        className="text-orange-400 flex items-center gap-x-2"
        onClick={() => console.log("yes")}
      >
        <IoArrowBackOutline />
        <p>Back</p>
      </button>

      <div className="flex flex-col gap-y-6">
        <Image
          alt="item image"
          src={images.shoppingCart}
          className="object-cover border max-w-[85%] max-h-40 rounded-xl self-center"
        />
        <div className="flex flex-col gap-y-2">
          <p className="text-gray-400 text-xs">name</p>
          <p className=" text-xl">Tomatoes</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-gray-400 text-xs">category</p>
          <p className="">Fruit and vegetables</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-gray-400 text-xs">note</p>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            necessitatibus tempora sit quas, pariatur eligendi eaque quo vitae
            et commodi.
          </p>
        </div>
      </div>

      <div className="flex items-center self-center text-lg">
        <button className="p-3 text-sm font-semibold ">delete</button>
        <button className="text-white rounded-xl font-semibold p-3 text-sm tracking-wider bg-orange-400">
          Add to list
        </button>
      </div>
    </section>
  );
}

export default ItemFeature;
