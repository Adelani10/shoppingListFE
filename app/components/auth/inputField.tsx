import { useProjectContext } from "@/context";
import React, { useState } from "react";

const InputField = ({ name, placeholder }: any) => {
  const { darkmode } = useProjectContext();
  const [text, setText] = useState<string>("");
  return (
    <section className="flex w-full  flex-col gap-y-2 md:w-80 sm:w-[70%] items-start">
      <h5 className="text-xs font-semibold ">{name}</h5>

      <input
        onChange={(e: any) => setText(e.target.value)}
        type="text"
        placeholder={placeholder}
        className={`text-sm px-3 h-12 w-full ${
          darkmode ? "bg-darkmodeSec" : "bg-white"
        } rounded-lg`}
        name="collection name"
        value={text}
      />
    </section>
  );
};

export default InputField;
