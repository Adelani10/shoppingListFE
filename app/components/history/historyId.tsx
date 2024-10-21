"use client";
import { useProjectContext } from "@/context";
import React from "react";
import { MdCalendarMonth } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import Link from "next/link";

function HistoryId({ item }: any) {
  const { darkmode, weekdays } = useProjectContext();
  const { id, completed, title, items, localDate } = item;
  

  const date = new Date(localDate);

  return (
    <Link
      href={`/history/${id}`}
      className={`${
        darkmode ? "bg-darkmodeTertiary" : "bg-white"
      } flex items-center font-semibold rounded-lg justify-between sm:p-3 md:p-6 p-2 py-4`}
    >
      <p className="capitalize">{title}</p>
      <div className="flex items-center sm:gap-x-1 lg:gap-x-5 gap-x-5">
        <div className="text-gray-400 hidden gap-x-1 md:flex items-center">
          <MdCalendarMonth className="text-lg" />
          <p>{`${weekdays[date.getDay()].slice(
            0,
            3
          )} ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}</p>
        </div>

        <h3
          className={`w-20 text-center p-1 rounded-lg ${
            completed
              ? "text-sky-400 border-sky-400"
              : "text-gray-400 border-gray-400"
          }  border text-xs `}
        >
          {completed ? "completed" : "open"}
        </h3>

        <button className="text-xl font-bold text-orange-400">
          <GrFormNext />
        </button>
      </div>
    </Link>
  );
}

export default HistoryId;
