"use client";
import { useProjectContext } from "@/context";
import React from "react";
import StatusBar from "../components/stats/statusBar";
import CategoriesBar from "../components/stats/categoriesBar";

function Stats() {
  const { darkmode, getTopItems, getTopCategories } = useProjectContext();
  const topItemsData = getTopItems();
  const topCategoriesData = getTopCategories();
  const total: any = Object.values(topItemsData).reduce(
    (acc: any, cur: any) => acc + cur,
    0
  );

  const totalCats: any = Object.values(topCategoriesData).reduce(
    (acc: any, cur: any) => acc + cur,
    0
  );

  return (
    <main
      className={`min-h-screen ${
        darkmode
          ? "bg-darkmodePrimary text-white"
          : "bg-[#F0F8FF] text-darkmodePrimary"
      } py-8 md:pl-24 pl-20 space-y-8 h-screen overflow-y-scroll sm:pr-80 font-[family-name:var(--font-geist-sans)]`}
    >
      {Object.entries(topItemsData).length > 0 ? (
        <div className="flex gap-x-0 md:pr-8 pr-4 sm:gap-x-8 h-full sm:flex-row flex-col ">
          <div className="flex flex-col items-start gap-y-8 md:w-1/2 w-full">
            <h1 className="text-xl ">Top Items</h1>
            <div className="flex w-full gap-y-6 flex-col">
              {Object.entries(topItemsData).map(([item, count]: any) => {
                const percentage = ((count / total) * 100).toFixed(2);
                return (
                  <StatusBar
                    key={item}
                    label={item}
                    color="orange"
                    percentage={percentage}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-start gap-y-8 md:w-1/2 w-full">
            <h1 className="text-xl ">Top Categories</h1>
            <div className="flex w-full gap-y-6 flex-col">
              {Object.entries(topCategoriesData).map(([item, count]: any) => {
                const percentage = ((count / totalCats) * 100).toFixed(2);
                return (
                  <CategoriesBar
                    key={item}
                    label={item}
                    percentage={percentage}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="md:pr-8 pr-4 flex justify-center items-center h-full">
          <h1 className="text-2xl font-semibold">
            Nothing to see here yet; Create & Complete a list first!
          </h1>
        </div>
      )}
    </main>
  );
}

export default Stats;
