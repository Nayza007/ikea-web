import React from "react";

export default function Searchbar({
  className,
  value,
  name,
  placeholder,
  onChange,
}) {
  return (
    <div className="w-[100%] h-[40px] display flex justify-center focus:outline-slate-500 ">
      <input
        type="text"
        className={className}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
