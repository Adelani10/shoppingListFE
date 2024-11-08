"use client";
import { mainItemTypes, useProjectContext } from "@/context";
import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { FaMinus, FaPlus } from "react-icons/fa6";
import axios from "axios";

function EditQuantity({ items }: any) {
  const [toBeEdited, setToBeEdited] = useState<boolean>(false);
  const { darkmode, setCurrentList, getCurrentUser } = useProjectContext();
  const [qty, setQty] = useState<number>(1);

  const increaseQuantity = async (item: mainItemTypes) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Not signed in or Token expired, Sign in again");
      throw new Error("Auth token not found");
    }
    try {
      const res = await axios.put(
        `https://shoppinglist-yw62.onrender.com/api/v1/user/increase_item_quantity/${item.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setQty(res.data);
    } catch (error) {
      alert("Error: Failed to increase");
      throw new Error("Error: Failed to increase");
    } finally {
      getCurrentUser();
    }
  };

  const decreaseQuantity = async (item: mainItemTypes) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Not signed in or Token expired, Sign in again");
      throw new Error("Auth token not found");
    }

    try {
      const res = await axios.put(
        `https://shoppinglist-yw62.onrender.com/api/v1/user/decrease_item_quantity/${item.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setQty(res.data);
    } catch (error) {
      alert("Error: Failed to decrease");
      throw new Error("Error: Failed to decrease");
    } finally {
      getCurrentUser();
    }
  };

  const deleteItemFromList = async (item: mainItemTypes) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Not signed in or Token expired, Sign in again");
      throw new Error("Auth token not found");
    }

    try {
      const res = await axios.put(
        `https://shoppinglist-yw62.onrender.com/api/v1/user/remove_from_current_list/${item.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCurrentList(res.data);
    } catch (error) {
      alert("Error: Failed to remove");
      throw new Error("Error: Failed to remove");
    } finally {
      getCurrentUser()
    }
  };

  return (
    <>
      {items.map((item: mainItemTypes) => {
        return (
          <div
            key={item.id}
            className="flex w-full items-center justify-between"
          >
            <h3 className="tracking-tighter capitalize">{item.name}</h3>

            <div
              className={`text-orange-400 flex items-center justify-between h-6  ${
                darkmode ? "bg-darkmodeTertiary" : "bg-white"
              } ${toBeEdited ? "rounded-lg" : "rounded-xl"} rounded-lg text-xs`}
            >
              {toBeEdited && (
                <button
                  onClick={() => deleteItemFromList(item)}
                  className="h-full bg-orange-400 rounded-lg flex p-2 justify-center mr-2 items-center"
                >
                  <FiTrash className="text-white" />
                </button>
              )}

              {toBeEdited && (
                <button
                  disabled={qty === 1}
                  onClick={() => decreaseQuantity(item)}
                  className="mr-2"
                >
                  <FaMinus />
                </button>
              )}

              <button
                onClick={() => setToBeEdited(!toBeEdited)}
                className={`p-2 w-16 flex justify-center items-center ${
                  darkmode ? "" : "border border-orange-400"
                }  h-full ${
                  toBeEdited ? "rounded-lg mr-2" : "rounded-xl"
                } font-bold  `}
              >
                {`${item.quantity} ${item.quantity < 2 ? "pc" : "pcs"}`}
              </button>

              {toBeEdited && (
                <button
                  onClick={() => increaseQuantity(item)}
                  className="h-full mr-2"
                >
                  <FaPlus />
                </button>
              )}

              <button></button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default EditQuantity;
