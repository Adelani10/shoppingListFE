"use client";
import { mainItemTypes, saved, useProjectContext } from "@/context";
import React from "react";
import HistoryId from "../components/history/historyId";

function History() {
  const { darkmode, savedList, groupedLists } = useProjectContext();

  const sortedGroupedLists = Object.keys(groupedLists)
    .sort((a, b) => {
      const [monthA, yearA] = a.split(" ");
      const [monthB, yearB] = b.split(" ");

      const monthToNumber = (month: any) =>
        new Date(Date.parse(`${month} 1, 1970`)).getMonth();

      const yearDifference = parseInt(yearA) - parseInt(yearB);
      if (yearDifference === 0) {
        return monthToNumber(monthB) - monthToNumber(monthA);
      }
      return yearDifference;
    })
    .reduce((acc: any, key: any) => {
      acc[key] = groupedLists[key];
      return acc;
    }, {});

  return (
    <main
      className={`min-h-screen ${
        darkmode
          ? "bg-darkmodePrimary text-white"
          : "bg-[#F0F8FF] text-darkmodePrimary"
      } py-8 md:pl-24 pl-20 space-y-8 h-screen overflow-y-scroll sm:pr-80 font-[family-name:var(--font-geist-sans)]`}
    >
      {savedList.length > 0 ? (
        <div className="md:mr-8 mr-4 space-y-8">
          <h1 className="text-xl font-semibold">Shopping history</h1>

          <section className="w-full space-y-8">
            {Object.keys(sortedGroupedLists).map((monthYear: any) => {
              return (
                <div key={monthYear} className="flex flex-col gap-y-3">
                  <h4 className="text-sm font-semibold">{monthYear}</h4>
                  {sortedGroupedLists[monthYear].map(
                    (item: any) => {
                      return <HistoryId key={item.id} item={item} />;
                    }
                  )}
                </div>
              );
            })}
          </section>
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

export default History;
