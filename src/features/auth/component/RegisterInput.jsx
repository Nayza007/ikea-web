export default function RegisterInput({
  id,
  type,
  name,
  value,
  content,
  onChange,
  className,
}) {
  const defaultClassName =
    "w-full max-w-[430px] outline-none border border-[#c7c2c2] rounded-[8px] h-[40px] pl-2  focus:border-gray-500";

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="pl-2 text-[#9e9797]">
        {content}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${
          className ? className : ""
        } "w-full max-w-[430px] outline-none border border-[#c7c2c2] rounded-[8px] h-[40px] pl-2  focus:border-gray-500"`}
      />
    </div>
  );
}
