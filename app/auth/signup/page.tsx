"use client";
import InputField from "@/app/components/auth/inputField";
import { useProjectContext } from "@/context";
import Link from "next/link";
import React, { useState } from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";

export interface credType {
  username: string;
  password: string;
  currentList: any[];
  savedList: any[];
}

const SignUp = () => {
  const { darkmode, setDarkmode, router, getCurrentUser } = useProjectContext();
  const [credentials, setCredentials] = useState<credType>({
    username: "",
    password: "",
    currentList: [],
    savedList: [],
  });

  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  const signUp = async () => {
    setIsAuthenticating(true);
    try {
      if (credentials.username && credentials.password) {
        const result = await axios.post(
          "https://shoppinglist-yw62.onrender.com/api/v1/user/register",
          credentials
        );
        if (result.status === 200) {
          localStorage.setItem("authToken", result.data);
          toast.success("Signed up & Logged in successfully");
          router.replace("/");
          setCredentials({
            username: "",
            password: "",
            currentList: [],
            savedList: [],
          });
          setIsAuthenticating(false);
          getCurrentUser();
        }
      } else {
        toast.error("Enter username and password");
        setIsAuthenticating(false);
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401) {
          toast.error("Authentication Failed: Invalid username or password.");
        } else {
          toast.error(
            `"Login Error":
              ${error.response.data || "An error occurred."}`
          );
        }
      } else if (error.request) {
        toast.error("No Response: Server did not respond. Please try again.");
      } else {
        toast.error("Error: An unexpected error occurred.");
      }

      setIsAuthenticating(false);
    }
  };

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
          <InputField
            name="Username"
            placeholder="Enter a username"
            handleChange={(e: any) => {
              setCredentials((prev: any) => {
                return {
                  ...prev,
                  username: e.target.value,
                };
              });
            }}
            value={credentials.username}
          />

          <InputField
            name="Password"
            placeholder="Enter a strong password"
            password={true}
            handleChange={(e: any) => {
              setCredentials((prev: any) => {
                return {
                  ...prev,
                  password: e.target.value,
                };
              });
            }}
            value={credentials.password}
          />

          <div className="w-full md:w-80 sm:w-[70%] flex flex-col gap-y-2">
            <button
              onClick={signUp}
              disabled={isAuthenticating}
              className="bg-orange-400 disabled:cursor-not-allowed disabled:bg-orange-200 w-full rounded-lg font-bold h-12"
            >
              {isAuthenticating ? "Signing up..." : "SignUp"}
            </button>
            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link href={"/auth/login"} className="text-orange-400 font-bold">
                LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
