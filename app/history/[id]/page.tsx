"use client";
import HistoryItemCard from "@/app/components/history/historyItemCard";
import { saved, useProjectContext } from "@/context";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";

function HistoryDetails() {
  const { darkmode, savedList, getCategoriesObj, weekdays } =
    useProjectContext();
  const [historyItem, setHistoryItem] = useState<saved>({
    id: nanoid(8),
    title: "",
    items: [],
    completed: false,
    localDate: "2024-07-08",
  });
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const obj = savedList.find((item) => item.id === id);
    setHistoryItem(obj!);
  }, [savedList]);

  const categories = getCategoriesObj(historyItem!.items);
  const date = new Date(historyItem!.localDate);

  console.log(historyItem);

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
          <h1 className="text-xl max-w-[40%] capitalize font-semibold">
            {historyItem!.title}
          </h1>
          <div className="text-gray-400 gap-x-1 flex items-center">
            <MdCalendarMonth className="text-lg" />
            <p>{`${weekdays[date.getDay()].slice(0, 3)} ${date.getDate()}.${
              date.getMonth() + 1
            }.${date.getFullYear()}`}</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-12">
          {Object.entries(categories).map(([category, items]): any => {
            return (
              <div key={category} className="flex flex-col items-start gap-y-3">
                <h3 className="text-xl capitalize">{category}</h3>
                <div className="flex flex-wrap gap-5">
                  <HistoryItemCard items={items} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default HistoryDetails;
