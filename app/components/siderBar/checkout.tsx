"use client";
import { images } from "@/constants";
import { mainItemTypes, saved, useProjectContext } from "@/context";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EditQuantity from "./EditQuantity";
import { nanoid } from "nanoid";

function CheckOut() {
  const {
    darkmode,
    setAddItem,
    currentList,
    setCurrentList,
    getCategoriesObj,
    savedList,
    setShowCheckout
  } = useProjectContext();
  const categories = getCategoriesObj(currentList);
  const month: number = Math.floor(Math.random() * 10) + 1;
  const day: number = Math.floor(Math.random() * 31) + 1
  const [saved, setSaved] = useState<saved>({
    id: nanoid(8),
    title: "",
    items: [],
    completed: false,
    localDate: `2024-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`,
  });
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [failedSave, setFailedSave] = useState<boolean>(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const updatedSaved = {
        ...saved,
        items: [...currentList],
      };

      if (currentList.length > 0 && updatedSaved.title) {
        savedList.push(updatedSaved);
      } else {
        setFailedSave(true);
        setTimeout(() => setFailedSave(false), 4000);
        return;
      }
    } catch (error: any) {
      throw new Error("error", error);
    } finally {
      setIsSaving(false);
    }

    setCurrentList([]);
    setSaved({
      id: nanoid(8),
      title: "",
      items: [],
      completed: false,
      localDate: `2024-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
      }`,
    });
  };

  return (
    <section
      className={`sm:w-80 fixed ${
        darkmode
          ? "bg-darkmodeSec text-white"
          : "bg-butterColor text-darkmodePrimary"
      } pt-8 right-0 top-0 z-50 bottom-0 w-screen-minus-16 flex flex-col justify-between `}
    >
      <div
        className={`px-6 flex flex-col ${
          currentList!.length > 0
            ? "items-start gap-y-4"
            : "items-center gap-y-16"
        } `}
      >
        <div className="bg-[#722f37] rounded-xl gap-x-4 flex justify-between h-28">
          <Image
            src={images.source}
            alt="bottle"
            className="max-w-[30%] min-h-28 object-contain -translate-y-4"
          />
          <article className="py-4 text-sm flex flex-col items-start gap-y-2 pr-6">
            <h3 className="font-semibold text-white">
              Didn't find what you need?
            </h3>
            <button
              onClick={() => {
                setAddItem(true)
                setShowCheckout(false)
              }}
              className="text-darkmodePrimary bg-white font-semibold py-1 px-4 rounded-lg"
            >
              Add Item
            </button>
          </article>
        </div>

        {currentList!.length === 0 ? (
          <div className="">
            <p className="text-center font-bold">No items</p>
          </div>
        ) : (
          <div className="text-lg self-start space-y-3 w-full">
            <h2 className="font-semibold ">Current List</h2>
            {Object.entries(categories).map(([category, items]): any => {
              return (
                <div
                  key={category}
                  className="flex flex-col items-start  w-full"
                >
                  <h3 className=" text-gray-400 text-sm capitalize">
                    {category}
                  </h3>

                  <div
                    className={`flex flex-col ${
                      currentList!.length > 6
                        ? "text-xs gap-y-0"
                        : "text-sm gap-y-2"
                    } w-full `}
                  >
                    <EditQuantity key={category} items={items} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center">
        {currentList?.length === 0 ? (
          <Image
            alt="cart-image"
            src={images.shoppingCart}
            className="self-center"
          />
        ) : (
          <div className="flex items-center gap-x-1 mb-3">
            <input
              type="checkbox"
              name="completed"
              checked={saved.completed}
              onChange={(e) =>
                setSaved((prev: any) => {
                  return {
                    ...prev,
                    completed: e.target.checked,
                  };
                })
              }
              className=""
            />
            <label className="font-bold">Sorted & Completed</label>
          </div>
        )}

        <div
          className={`h-24 w-full rounded-t-2xl p-6 ${
            darkmode ? "bg-darkmodeTertiary" : "bg-white"
          } `}
        >
          <div className="flex items-center h-full w-full">
            <input
              type="text"
              placeholder="Enter a name"
              className={` px-4  h-full w-[70%] ${
                darkmode ? " bg-darkmodePrimary" : " border-2 border-r-0"
              } rounded-l-xl`}
              name="collection name"
              value={saved.title}
              onChange={(e) =>
                setSaved((prev: any) => {
                  return {
                    ...prev,
                    title: e.target.value,
                  };
                })
              }
            />
            <button
              disabled={isSaving === true || currentList.length < 1}
              onClick={() => handleSave()}
              className="h-full bg-orange-400 -ml-2 text-white font-bold w-[30%] rounded-xl disabled:bg-gray-400"
            >
              Save
            </button>
          </div>
          {failedSave && (
            <p className="text-[10px] text-center text-red-500">
              Please provide a name or populate your current list
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default CheckOut;
