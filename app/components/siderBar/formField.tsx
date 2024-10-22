import React, { useState } from "react";

interface formFieldTypes {
  name: string;
  placeholder: string;
  height: string;
}

function FormField({ name, placeholder, height }: formFieldTypes) {
  const [text, setText] = useState<string>("");
  return (
    <section className="flex flex-col gap-y-3 items-start">
      <h5 className="text-xs ">{name}</h5>
      {name === "Note (Optional)" ? (
        <textarea
          value={text}
          onChange={(e: any) => setText(e.target)}
          rows={10}
          cols={33}
          placeholder={placeholder}
          className={`border text-sm px-3 py-2 w-full rounded-lg`}
        />
      ) : (
        <input
          onChange={(e: any) => setText(e.target)}
          type="text"
          placeholder={placeholder}
          className={`border text-sm px-3 h-${height} w-full rounded-lg`}
          name="collection name"
          value={text}
        />
      )}
    </section>
  );
}

export default FormField;
