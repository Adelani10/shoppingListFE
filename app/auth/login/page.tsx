"use client";
import InputField from "@/app/components/auth/inputField";
import { useProjectContext } from "@/context";
import Link from "next/link";
import React from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

const LogIn = () => {
  const { darkmode, setDarkmode, router } = useProjectContext();
  return (
    <section
      className={`${
        darkmode
          ? "bg-darkmodePrimary text-white"
          : "bg-[#F0F8FF] text-darkmodePrimary"
      }  h-screen py-8 px-2 `}
    >
      <div className="flex flex-col h-full container mx-auto gap-y-12">
        <div className=" w-full self-start items-center flex justify-between">
          <h1 className="text-orange-400 font-bold text-2xl md:text-3xl">
            Shoppingify
          </h1>
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

        <div className="flex flex-col gap-y-4 items-center justify-center">
          <InputField name="Username" placeholder="Enter a username" />
          <InputField name="Password" placeholder="Enter a strong password" />

          <div className="w-full md:w-80 sm:w-[70%] flex flex-col gap-y-2">
            <button
              onClick={() => {
                localStorage.setItem("authToken", "abcdefgh")
                router.replace("/")
              }}
              className="bg-orange-400  w-full rounded-lg font-bold h-12"
            >
              Login
            </button>
            <p className="text-sm text-center">
              Don't have an account?{" "}
              <Link href={"/auth/signup"} className="text-orange-400 font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
