"use client";
import { saved, useProjectContext } from "@/context";
import React from "react";
import StatusBar from "../components/stats/statusBar";
import CategoriesBar from "../components/stats/categoriesBar";
import MonthlyItemsChart from "../components/stats/monthlyItemsChart";

function Stats() {
  const {
    darkmode,
    getTopItems,
    getTopCategories,
    total,
    dataForGraph,
  } = useProjectContext();
  const topItemsData = getTopItems();
  const topCategoriesData = getTopCategories();


  return (
    <main
      className={`min-h-screen ${
        darkmode
          ? "bg-darkmodePrimary text-white"
          : "bg-[#F0F8FF] text-darkmodePrimary"
      } py-8 md:pl-24 pl-20 md:h-screen space-y-8 h-screen overflow-y-scroll sm:pr-80 font-[family-name:var(--font-geist-sans)]`}
    >
      {Object.entries(topItemsData).length > 0 ? (
        <div className="flex gap-x-0 md:pr-8 pr-4 h-full w-full gap-y-12 flex-col">
          <div className="flex sm:gap-x-8 gap-y-6  md:max-h-[40%] md:gap-y-0 w-full md:flex-row flex-col">
            <div className="flex flex-col items-start md:gap-y-8 gap-y-5 md:w-1/2 w-full">
              <h1 className="text-xl ">Top Items</h1>
              <div className="flex w-full gap-y-6 flex-col">
                {Object.entries(topItemsData).map(([item, count]: any) => {
                  const percentage = (
                    (count / total(topItemsData)) *
                    100
                  ).toFixed(2);
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
                  const percentage = (
                    (count / total(topCategoriesData)) *
                    100
                  ).toFixed(2);
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

          <div className="w-full md:h-[50%] max-h-72 md:gap-y-8 gap-y-5 flex flex-col">
            <h1 className="text-xl">Monthly Summary</h1>
            <MonthlyItemsChart data={dataForGraph} />
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
