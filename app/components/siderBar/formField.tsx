import { useProjectContext } from "@/context";
import React, { useState } from "react";

interface formFieldTypes {
  name: string;
  placeholder: string;
  height: string;
  value: string;
  handleChange: any;
}

function FormField({
  name,
  placeholder,
  height,
  handleChange,
  value,
}: formFieldTypes) {
  const { darkmode } = useProjectContext();
  return (
    <section className="flex flex-col md:gap-y-2 gap-y-1 items-start">
      <h5 className="text-xs ">{name}</h5>
      {name === "Note (Optional)" ? (
        <textarea
          value={value}
          onChange={handleChange}
          rows={10}
          cols={33}
          placeholder={placeholder}
          className={` ${
            darkmode ? "bg-darkmodePrimary" : "bg-white"
          }  text-sm px-3 py-2 w-full rounded-lg`}
        />
      ) : (
        <input
          onChange={handleChange}
          type="text"
          placeholder={placeholder}
          className={`text-sm px-3 h-${height} ${
            darkmode ? "bg-darkmodePrimary" : "bg-white"
          }  w-full rounded-lg`}
          name="collection name"
          value={value}
        />
      )}
    </section>
  );
}

export default FormField;
