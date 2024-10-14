"use client";
import { useProjectContext } from "@/context";
import Body from "./components/body";

export default function Home() {
  const { darkmode } = useProjectContext();
  return (
    <main
      className={`min-h-screen ${
        darkmode ? "bg-darkmodePrimary text-white" : "bg-[#F0F8FF] text-darkmodePrimary"
      } font-[family-name:var(--font-geist-sans)]`}
    >
      <Body />
    </main>
  );
}
