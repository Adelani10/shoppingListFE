import React, { FormEvent, useState } from "react";
import FormField from "./formField";
import { mainItemTypes, useProjectContext } from "@/context";
import axios from "axios";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

export interface itemTypes {
  name: string;
  image: string;
  category: string;
  note: string;
  quantity: number;
  creatorId: any;
}

function Form() {
  const {
    darkmode,
    pathName,
    setIsItemClicked,
    setAddItem,
    setShowCheckout,
    loadAvailItems,
  } = useProjectContext();
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [itemData, setItemData] = useState<itemTypes>({
    name: "",
    image: "",
    category: "",
    note: "",
    quantity: 1,
    creatorId: null,
  });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setIsAdding(true);
    try {
      const { name, image, category, note } = itemData;
      if (name && image && category && note) {
        const res = await axios.post(
          `https://shoppinglist-yw62.onrender.com/api/v1/items`,
          itemData
        );

        res.status === 200
          ? toast.success("Item Added")
          : toast.error("Failed");
      }
    } catch (error: any) {
      toast.error("Error: Cannot add item, try again!");
      throw new Error(error);
    } finally {
      setIsAdding(false);
      loadAvailItems();
      setIsItemClicked(false);
      setAddItem(false);
      setShowCheckout(false);
      setItemData({
        name: "",
        image: "",
        category: "",
        note: "",
        quantity: 1,
        creatorId: null,
      });
    }
  };

  return (
    <form
      onSubmit={(e) => submit(e)}
      className={`sm:w-80 fixed ${
        darkmode
          ? "bg-darkmodeSec text-white"
          : "bg-[#F0F8FF] text-darkmodePrimary"
      } ${
        pathName.startsWith("/auth") ? "hidden" : "flex"
      } p-6 right-0 top-0 bottom-0 z-50 w-screen-minus-16 justify-between flex-col  `}
    >
      <div className="w-full flex flex-col  gap-y-5">
        <h1 className="font-semibold mb-3">Add a new Item</h1>
        <FormField
          name="Name"
          value={itemData.name}
          handleChange={(e: any) =>
            setItemData((prev) => {
              return {
                ...prev,
                name: e.target.value,
              };
            })
          }
          placeholder="Enter a name"
          height="12"
        />
        <FormField
          name="Note (Optional)"
          placeholder="Enter a note"
          height="24"
          value={itemData.note}
          handleChange={(e: any) =>
            setItemData((prev) => {
              return {
                ...prev,
                note: e.target.value,
              };
            })
          }
        />
        <FormField
          name="Image"
          placeholder="Enter a url"
          height="12"
          value={itemData.image}
          handleChange={(e: any) =>
            setItemData((prev) => {
              return {
                ...prev,
                image: e.target.value,
              };
            })
          }
        />
        <FormField
          name="Category"
          placeholder="Choose a category"
          height="12"
          value={itemData.category}
          handleChange={(e: any) =>
            setItemData((prev) => {
              return {
                ...prev,
                category: e.target.value,
              };
            })
          }
        />
        <h4 className="text-xs italic text-">NB:All fields must be filled</h4>
      </div>

      <div className="flex items-center self-center text-lg">
        <button
          onClick={() => {
            setIsItemClicked(false);
            setAddItem(false);
            setShowCheckout(true);
          }}
          className="p-3 text-sm font-semibold "
        >
          cancel
        </button>
        <button
          disabled={isAdding}
          type="submit"
          className={`text-white disabled:bg-gray-400 rounded-xl font-semibold p-3 text-xs md:text-sm ${
            isAdding ? "bg-orange-700" : "bg-orange-400"
          }   `}
        >
          {isAdding ? "Saving..." : "Save & Send"}
        </button>
      </div>
    </form>
  );
}

export default Form;
