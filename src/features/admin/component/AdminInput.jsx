import React from "react";

export default function AdminInput({
  type = "text",
  placeholder = "Type here",
  className,
  id,
  content,
}) {
  return (
    <div className=" flex justify-center">
      <label htmlFor={id}>{content}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={`${
          className ? className : ""
        } input input-bordered w-full max-w-xs outline-none`}
      />
    </div>
  );
}
