"use client";
import { useProjectContext } from "@/context";
import React from "react";

const Loading = () => {
  const { darkmode } = useProjectContext();
  return (
    <main
      className={`min-h-screen ${
        darkmode
          ? "bg-darkmodePrimary text-white"
          : "bg-[#F0F8FF] text-darkmodePrimary"
      } py-8 md:pl-24 pl-20 space-y-8 h-screen overflow-y-scroll sm:pr-80 flex justify-center items-center font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="md:mr-8 mr-4 ">
        <p>Loading...</p>
      </div>
    </main>
  );
};

export default Loading;
