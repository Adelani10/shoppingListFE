"use client";

import { useProjectContext } from "@/context";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { toast } from "react-toastify";

function ItemFeature() {
  const [isAddingToList, setIsAddingToList] = useState<boolean>(false);
  const {
    darkmode,
    itemClickedOn,
    setIsItemClicked,
    setShowCheckout,
    setCurrentList,
    pathName,
    router,
  } = useProjectContext();

  const checkTokenValidity = async () => {
    const token = localStorage.getItem("authToken");

    if (token) {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        localStorage.removeItem("authToken");
        router.push("/auth/login");
      }

      try {
        await axios.get(
          "https://shoppinglist-yw62.onrender.com/api/v1/user/current_user",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } catch (error) {
        localStorage.removeItem("authToken");
        router.push("/auth/login");
      }
    } else {
      router.push("/auth/login");
    }
    return;
  };

  const addItemToCurrentList = async () => {
    setIsAddingToList(true);
    const token = localStorage.getItem("authToken");
    try {
      checkTokenValidity();
      const res = await axios.put(
        "https://shoppinglist-yw62.onrender.com/api/v1/user/add_to_current_list",
        itemClickedOn,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCurrentList(res.data);
    } catch (error) {
      toast.error("Error: Couldn't add Item");
    } finally {
      setIsItemClicked(false);
      setIsAddingToList(false);
      setShowCheckout(true);
    }
  };

  return (
    <section
      className={`sm:w-80 fixed ${
        darkmode ? "bg-darkmodeSec text-white" : "bg-white text-darkmodePrimary"
      } ${
        pathName.startsWith("/auth") ? "hidden" : "flex"
      } p-7 right-0 top-0 bottom-0 overflow-y-scroll w-screen-minus-16 z-50 flex-col justify-between `}
    >
      <button
        className="text-orange-400 flex items-center gap-x-2"
        onClick={() => setIsItemClicked(false)}
      >
        <IoArrowBackOutline />
        <p>Back</p>
      </button>

      <div className="flex flex-col gap-y-6">
        <div className="w-[85%] h-40 self-center">
          <Image
            alt={`${itemClickedOn?.name} image`}
            src={itemClickedOn?.image || ""}
            className="object-cover h-full w-full rounded-xl"
            width={80}
            height={40}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-gray-400 text-xs">name</p>
          <p className=" text-xl capitalize">{itemClickedOn?.name}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-gray-400 text-xs">category</p>
          <p className="capitalize">{itemClickedOn?.category}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-gray-400 text-xs">note</p>
          <p className="text-xs">{itemClickedOn?.note}</p>
        </div>
      </div>

      <div className="flex items-center self-center text-lg">
        <button
          // onClick={() => setIsItemClicked(false)}
          className="p-3 text-sm font-semibold disabled:text-gray-400 "
          disabled
        >
          delete
        </button>

        <button
          disabled={isAddingToList === true}
          onClick={addItemToCurrentList}
          className={`text-white rounded-xl disabled:cursor-not-allowed disabled:bg-orange-200 disabled:text-gray-700 bg-orange-400 font-semibold p-3 text-sm tracking-wider`}
        >
          {isAddingToList ? "Adding..." : "Add to List"}
        </button>
      </div>
    </section>
  );
}

export default ItemFeature;
