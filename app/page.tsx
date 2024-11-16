"use client";
import { mainItemTypes, useProjectContext } from "@/context";
import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoSendSharp } from "react-icons/io5";
import ItemCard from "./components/itemCard";
import axios from "axios";

export default function Home() {
  const { darkmode, getCategoriesObj, search, itemsArr } = useProjectContext();

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const categoryObj = getCategoriesObj(itemsArr);

  return (
    <main
      className={`min-h-screen ${
        darkmode
          ? "bg-darkmodePrimary text-white"
          : "bg-[#F0F8FF] text-darkmodePrimary"
      } py-8 md:pl-24 pl-20 space-y-8 h-screen overflow-y-scroll  sm:pr-80 font-[family-name:var(--font-geist-sans)]`}
    >
      {itemsArr.length > 0 ? (
        <div className="md:pr-8 pr-4 gap-y-5 w-full flex flex-col">
          <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row md:justify-between items-center">
            <h1 className="md:text-xl text-lg md:w-[40%] w-full font-semibold">
              <span className="text-orange-400 ">Shoppingify</span> allows you
              to take your shopping list wherever you go.
            </h1>

            <form
              onSubmit={(e) => search(e, text)}
              className="relative md:w-[50%] w-full h-12"
            >
              <input
                type="text"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="Search item"
                className={`${
                  darkmode ? "bg-darkmodeSec" : "bg-white"
                } w-full rounded-md ${isFocused ? "px-3" : "px-12"}  h-full`}
              />

              <button
                className={`absolute ${
                  isFocused ? "hidden" : ""
                } left-4 translate-y-[-50%] top-1/2`}
              >
                <GoSearch className="" />
              </button>

              <button
                disabled={!text}
                type="submit"
                className={`absolute right-4 h-1/2 w-7 translate-y-[-50%] top-1/2`}
              >
                <IoSendSharp className="h-full w-full" />
              </button>
            </form>
          </div>

          <div className="flex flex-col w-full gap-y-12  md:pr-8">
            {Object.entries(categoryObj).map(([category, items]): any => {
              return (
                <div
                  key={category}
                  className="flex flex-col w-full items-start gap-y-3"
                >
                  <h3 className="text-xl capitalize">{category}</h3>
                  <div className="flex flex-wrap w-full md:gap-5 gap-3">
                    <ItemCard key={category} items={items} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex text-xl font-semibold justify-center items-center pt-24">
          Loading...
        </div>
      )}
    </main>
  );
}
