"use client"

import React from "react";
import CheckOut from "./checkout";
import ItemFeature from "./itemFeature";
import Form from "./form";
import { useProjectContext } from "@/context";

function Render() {

  const {isItemClicked, addItem} = useProjectContext()

  return (
    <>
      <CheckOut />
      {isItemClicked && <ItemFeature />}
      {addItem && <Form />}
    </>
  );
}

export default Render;
