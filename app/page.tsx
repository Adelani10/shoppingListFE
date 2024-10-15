"use client";
import { useProjectContext } from "@/context";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import ItemCard from "./components/itemCard";
export default function Home() {
  const { darkmode } = useProjectContext();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <main
      className={`min-h-screen ${
        darkmode
          ? "bg-darkmodePrimary text-white"
          : "bg-[#F0F8FF] text-darkmodePrimary"
      } py-8 pl-24 space-y-8 pr-80 font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl max-w-[40%] font-semibold">
          <span className="text-orange-400 ">Shoppingify</span> allows you to
          take your shopping list wherever you go
        </h1>

        <div className="relative max-w-[50%] mr-8 w-[40%] h-12">
          <input
            type="text"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            name="search"
            value=""
            placeholder="Search item"
            className={`${
              darkmode ? "bg-darkmodeSec" : "bg-white"
            } w-full rounded-md ${isFocused ? "px-3" : "px-12"}  h-full`}
          />

          {!isFocused && (
            <GoSearch className="absolute left-4 translate-y-[-50%] top-1/2" />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-y-12 mr-8">
        <div className="flex flex-col items-start gap-y-3">
          <h3 className="text-xl">Fruits & Vegetables</h3>
          <div className="flex flex-wrap gap-5">
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <h3 className="text-xl">Proteins</h3>
          <div className="flex flex-wrap gap-5">
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <h3 className="text-xl">Beverages</h3>
          <div className="flex flex-wrap gap-5">
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
            <ItemCard item="Mango" />
          </div>
        </div>
      </div>
    </main>
  );
}
