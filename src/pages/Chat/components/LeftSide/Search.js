import React, { useState } from "react";
import { Input } from "../../../../components";

export default function Search({
  searchText, handleOnChange
}) {


  return (
    <div className="search">
      <Input
        placeHolder="Search"
        type="text"
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
      />
    </div>
  );
}
