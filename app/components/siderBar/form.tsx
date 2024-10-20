import React from "react";
import FormField from "../formField";
import { useProjectContext } from "@/context";

function Form() {
  const { darkmode, setIsItemClicked, setAddItem } = useProjectContext();
  return (
    <section
      className={`w-80 fixed ${
        darkmode
          ? "bg-darkmodeSec text-white"
          : "bg-[#F0F8FF] text-darkmodePrimary"
      } p-8 right-0 top-0 bottom-0 flex flex-col justify-between `}
    >
      <div>
        <h1 className="font-semibold">Add a new Item</h1>
      </div>

      <div className="w-full flex flex-col gap-y-8">
        <FormField name="Name" placeholder="Enter a name" height="12" />
        <FormField
          name="Note (Optional)"
          placeholder="Enter a note"
          height="24"
        />
        <FormField name="Image" placeholder="Enter a url" height="12" />
        <FormField
          name="Category"
          placeholder="Choose a category"
          height="12"
        />
      </div>

      <div className="flex items-center self-center text-lg">
        <button
          onClick={() => {
            setIsItemClicked(false);
            setAddItem(false);
          }}
          className="p-3 text-sm font-semibold "
        >
          cancel
        </button>
        <button className="text-white rounded-xl font-semibold p-3 text-sm bg-orange-400">
          Save & Send
        </button>
      </div>
    </section>
  );
}

export default Form;
