"use client";

import React from "react";
import CheckOut from "./checkout";
import ItemFeature from "./itemFeature";
import Form from "./form";
import { useProjectContext } from "@/context";

function Render() {
  const { isItemClicked, addItem, showCheckout } = useProjectContext();

  return (
    <section
      className={`${
        isItemClicked || addItem || showCheckout ? "inline-block" : "hidden sm:inline-block"
      } sm:flex flex-col"`}
    >
      {!isItemClicked && !addItem && <CheckOut />}
      {isItemClicked && <ItemFeature />}
      {addItem && <Form />}
    </section>
  );
}

export default Render;
