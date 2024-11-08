"use client";
import ItemCard from "@/app/components/itemCard";
import { useProjectContext } from "@/context";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoSendSharp } from "react-icons/io5";

const Query = () => {
  const { darkmode, getCategoriesObj, search, searchData } =
    useProjectContext();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const params = useParams();
  const { query } = params;

  const categoryObj = getCategoriesObj(searchData);

  return (
    <main
      className={`min-h-screen ${
        darkmode
          ? "bg-darkmodePrimary text-white"
          : "bg-[#F0F8FF] text-darkmodePrimary"
      } py-8 md:pl-24 pl-20 space-y-8 h-screen overflow-y-scroll sm:pr-80 font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="md:pr-8 pr-4 gap-y-5 w-full  flex flex-col">
        <form
          onSubmit={(e) => search(e, text)}
          className="relative w-full h-12"
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

        <h2 className="text-xl font-bold capitalize">{query}</h2>

        <div className="flex flex-col w-full gap-y-12 pr-4 md:pr-8">
          {Object.entries(categoryObj).map(([category, items]): any => {
            return (
              <div
                key={category}
                className="flex flex-col w-full items-start gap-y-3"
              >
                <h3 className="text-lg capitalize">{category}</h3>
                <div className="flex flex-wrap md:gap-5 gap-3">
                  <ItemCard key={category} items={items} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Query;
