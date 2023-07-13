// import React from "react";

// export default function AdminInput({
//   type = "text",
//   placeholder = "Type here",
//   className,
//   value,
//   name,
//   onChange,
// },ref) {
//   return (
//     <div className=" flex justify-center">
//       <input
//         onChange={onChange}
//         value={value}
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         className={`${
//           className ? className : ""
//         } input input-bordered w-full max-w-xs outline-none`}
//       />
//     </div>
//   );
// }
import React from "react";

const AdminInput = React.forwardRef(
  (
    {
      type = "text",
      placeholder = "Type here",
      className,
      value,
      name,
      onChange,
    },
    ref
  ) => {
    return (
      <div className=" flex justify-center">
        <input
          ref={ref}
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
);

export default AdminInput;
