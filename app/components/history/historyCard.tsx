"use client";
import { useProjectContext } from "@/context";
import React from "react";
import { MdCalendarMonth } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import Link from "next/link";

function HistoryId() {
  const { darkmode } = useProjectContext();
  const id = 123
  return (
    <Link
    href={`/history/${id}`}
      className={`${
        darkmode ? "bg-darkmodeTertiary" : "bg-white"
      } flex items-center font-semibold rounded-lg justify-between p-6 py-4`}
    >
      <p className="">Ola's birthday party</p>
      <div className="flex items-center gap-x-5">
        <div className="text-gray-400 gap-x-1 flex items-center">
          <MdCalendarMonth className="text-lg" />
          <p>Sat 29.10.2022</p>
        </div>

        <h3 className="p-1 rounded-lg text-sky-400 border text-xs border-sky-400">
          completed
        </h3>

        <button className="text-xl font-bold text-orange-400">
          <GrFormNext />
        </button>
      </div>
    </Link>
  );
}

export default HistoryId;
