"use client";
import { useProjectContext } from "@/context";
import React from "react";
import HistoryId from "../components/history/historyId";

function History() {
  const { darkmode, savedList } = useProjectContext();

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
            <div className="flex flex-col gap-y-3">
              <h4 className="text-sm font-semibold"></h4>
              {savedList.map((item) => {
                return <HistoryId key={item.id} item={item} />;
              })}
            </div>
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
