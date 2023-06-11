import React from "react";

export default function LoginInput({
  id,
  type,
  name,
  value,
  onChange,
  content,
  className,
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="p-2 text-[#9e9797]">
        {content}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${className ? className : ""}`}
      />
    </div>
  );
}
