import React from "react";

export default function Searchbar({ className, value, name, placeholder }) {
  return (
    <div className="w-[80%] h-[40px] display flex justify-center ">
      <input
        type="text"
        className={className}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
