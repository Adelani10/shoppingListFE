"use client";
import HistoryItemCard from "@/app/components/history/historyItemCard";
import { useProjectContext } from "@/context";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";

function HistoryDetails() {
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
        <Link
          href="/history"
          className="text-orange-400 font-bold flex items-center gap-x-2"
        >
          <IoArrowBackOutline />
          <p>Back</p>
        </Link>

        <div className="flex flex-col gap-y-3">
          <h1 className="text-xl max-w-[40%] font-semibold">
            Ola's birthday party
          </h1>
          <div className="text-gray-400 gap-x-1 flex items-center">
            <MdCalendarMonth className="text-lg" />
            <p>Sat 29.10.2022</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold">Beverages</h2>

          <div className="flex gap-x-4">
            <HistoryItemCard />
            <HistoryItemCard />
            <HistoryItemCard />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold">Fruit & Vegetables</h2>

          <div className="flex gap-x-4">
            <HistoryItemCard />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className=" font-semibold">Protein</h2>

          <div className="flex gap-x-4">
            <HistoryItemCard />
            <HistoryItemCard />
            <HistoryItemCard />
            <HistoryItemCard />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HistoryDetails;
