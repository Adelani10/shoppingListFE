import React, { useState } from "react";

interface formFieldTypes {
  name: string;
  placeholder: string;
  height: string;
}
function FormField({ name, placeholder, height }: formFieldTypes) {
  const [text, setText] = useState<string>("");
  return (
    <section className="flex flex-col gap-y-2 items-start">
      <h5 className="text-xs ">{name}</h5>
      <input
        onChange={(e: any) => setText(e.target)}
        type="text"
        placeholder={placeholder}
        className={`border text-sm px-4 h-${height} w-full rounded-lg`}
        name="collection name"
        value={text}
      />
    </section>
  );
}

export default FormField;
