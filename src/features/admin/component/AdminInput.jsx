import React from "react";

export default function AdminInput({
  type = "text",
  placeholder = "Type here",
  className,
  value,
  name,
  onChange,
}) {
  return (
    <div className=" flex justify-center">
      <input
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`${
          className ? className : ""
        } input input-bordered w-full max-w-xs outline-none`}
      />
    </div>
  );
}
