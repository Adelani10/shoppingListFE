"use client"
import { useProjectContext } from "@/context";
import React from "react";

function Stats() {
  const { darkmode } = useProjectContext();
  return (
    <main
      className={`min-h-screen ${
        darkmode
          ? "bg-darkmodePrimary text-white"
          : "bg-[#F0F8FF] text-darkmodePrimary"
      } py-8 pl-24 space-y-8 pr-80 font-[family-name:var(--font-geist-sans)]`}
    >
      <h1 className="text-xl max-w-[40%] font-semibold">
        <span className="text-orange-400 ">Shoppingify</span> allows you to take
        your shopping list wherever you go
      </h1>
    </main>
  );
}

export default Stats;
