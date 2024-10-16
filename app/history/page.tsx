"use client";
import { useProjectContext } from "@/context";
import React from "react";
import HistoryCard from "../components/history/historyCard";

function History() {
  const { darkmode } = useProjectContext();

  return (
    <main
    
      className={`min-h-screen ${
        darkmode
          ? "bg-darkmodePrimary text-white"
          : "bg-[#F0F8FF] text-darkmodePrimary"
      } py-8 pl-24 space-y-8 pr-80 font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="mr-8 space-y-8">
        <h1 className="text-xl font-semibold">Shopping history</h1>

        <section className="w-full space-y-8 mr-8">
          <div className="flex flex-col gap-y-3">
            <h4 className="text-sm font-semibold">October 2022</h4>
            <HistoryCard />
          </div>
          <div className="flex flex-col gap-y-3">
            <h4 className="text-sm font-semibold">August 2022</h4>
            <HistoryCard />
          </div>
          <div className="flex flex-col gap-y-3">
            <h4 className="text-sm font-semibold">July 2022</h4>
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
          </div>
          <div className="flex flex-col gap-y-3">
            <h4 className="text-sm font-semibold">June 2022</h4>
            <HistoryCard />
          </div>
          <div className="flex flex-col gap-y-3">
            <h4 className="text-sm font-semibold">May 2022</h4>
            <HistoryCard />
          </div>
        </section>
      </div>
    </main>
  );
}

export default History;
