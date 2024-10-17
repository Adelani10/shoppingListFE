"use client";

import { icons, images } from "@/constants";
import { useProjectContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMoonOutline, IoMoonSharp, IoRefreshOutline } from "react-icons/io5";
import { IoMdMenu, IoIosStats } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function Nav() {
  const { darkmode, setDarkmode } = useProjectContext();
  const pathName = usePathname();

  return (
    <div
      className={`h-screen flex flex-col ${
        darkmode ? "bg-darkmodeSec text-white" : "bg-white text-darkmodePrimary"
      } justify-between fixed items-center py-4 w-16`}
    >
      <div className="flex flex-col items-center gap-y-6">
        <Image
          src={images.avatar}
          alt="avatar"
          className="h-8 w-8 object-contain"
        />
        <button
          onClick={() => setDarkmode(!darkmode)}
          className={`${darkmode ? "text-white" : "text-black"} h-6 w-6 `}
        >
          {darkmode ? (
            <IoMoonOutline className="h-full w-full" />
          ) : (
            <IoMoonSharp className="h-full w-full" />
          )}
        </button>
      </div>

      <div className="flex flex-col w-full items-center gap-y-10">
        <Link
          href={"/"}
          className={`${darkmode ? "text-white" : "text-black"} ${
            pathName.endsWith("/")
              ? "border-l-4 rounded-sm border-orange-400"
              : "border-none"
          } h-8 w-full`}
        >
          <IoMdMenu className="h-full w-8 mx-auto object-contain" />
        </Link>

        <Link
          href={"/history"}
          className={`${darkmode ? "text-white" : "text-black"} ${
            pathName.startsWith("/history")
              ? "border-l-4 border-orange-400"
              : "border-none"
          }  h-8 w-full`}
        >
          <IoRefreshOutline className="h-full w-8 mx-auto object-contain" />
        </Link>

        <Link
          href={"/stats"}
          className={`${darkmode ? "text-white" : "text-black"} ${
            pathName.startsWith("/stats")
              ? "border-l-4 border-orange-400"
              : "border-none"
          }  h-8 w-full`}
        >
          <IoIosStats className="h-full w-8 mx-auto object-contain" />
        </Link>
      </div>

      <button className="bg-orange-400 text-white p-3  rounded-full">
        <BsCart3 />
      </button>
    </div>
  );
}
