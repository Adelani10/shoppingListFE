import { icons, images } from "@/constants";
import { useProjectContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

export default function Sidebar() {
    console.log(useProjectContext())
  const { darkmode } = useProjectContext();

  return (
    <div className="h-screen flex flex-col justify-between items-center py-4 w-16 bg-white border">
      <div className="flex flex-col items-center gap-y-6">
        <Image
          src={images.avatar}
          alt="avatar"
          className="h-8 w-8 object-contain"
        />
        <button className="h-6 w-6">
          {darkmode ? (
            <IoMoonOutline className="h-full w-full" />
          ) : (
            <IoMoonSharp className="h-full w-full" />
          )}
        </button>
      </div>

      <div className="flex flex-col items-center gap-y-10">
        <Link href={"/home"} className="h-8 w-full">
          <Image
            src={icons.menu}
            alt="avatar"
            className="h-full w-8 object-contain"
          />
        </Link>

        <Link href={"/history"} className="h-8 w-full">
          <Image
            src={icons.history}
            alt="avatar"
            className="h-full w-8 object-contain"
          />
        </Link>

        <Link href={"/stats"} className="h-8 w-full">
          <Image
            src={icons.stats}
            alt="avatar"
            className="h-full w-8 object-contain"
          />
        </Link>
      </div>

      <button className="bg-orange-400 rounded-full">
        <Image src={icons.cart} alt="cart" className="h-6 w-6" />
      </button>
    </div>
  );
}
