"use client";

import { icons, images } from "@/constants";
import { useProjectContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMoonOutline, IoMoonSharp, IoRefreshOutline } from "react-icons/io5";
import { IoMdMenu, IoIosStats } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";

export default function Nav() {
  const {
    darkmode,
    setDarkmode,
    setAddItem,
    setIsItemClicked,
    showCheckout,
    setShowCheckout,
    currentList,
    pathName,
    setIsAuthenticated,
  } = useProjectContext();

  return (
    <div
      className={`h-screen flex flex-col ${
        darkmode ? "bg-darkmodeSec text-white" : "bg-white text-darkmodePrimary"
      } ${
        pathName.startsWith("/auth") ? "hidden" : "flex"
      } justify-between fixed items-center h-screen py-4 w-16`}
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
          onClick={() => {
            setIsItemClicked(false);
            setAddItem(false);
            setShowCheckout(false);
          }}
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
          onClick={() => {
            setIsItemClicked(false);
            setAddItem(false);
            setShowCheckout(false);
          }}
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
          onClick={() => {
            setIsItemClicked(false);
            setAddItem(false);
            setShowCheckout(false);
          }}
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

      <div className="flex flex-col items-center gap-y-6">
        <button
          onClick={() => {
            setIsItemClicked(false);
            setAddItem(false);
            setShowCheckout(!showCheckout);
          }}
          className="bg-orange-400 relative text-white p-3 rounded-full"
        >
          <BsCart3 />

          {currentList.length > 0 && (
            <p className="absolute top-0 w-4 font-bold flex justify-center items-center h-4 rounded-md text-[8px] bg-red-600 right-0">
              {currentList.length}
            </p>
          )}
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("authToken");
            setIsAuthenticated(false);
          }}
        >
          <HiOutlineLogout className="h-full text-red-500 w-8 mx-auto object-contain" />
        </button>
      </div>
    </div>
  );
}
