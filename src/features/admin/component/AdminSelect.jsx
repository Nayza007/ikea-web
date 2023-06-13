import { useSelector } from "react-redux";

export default function AdminSelect({ onChange, name }) {
  const { type } = useSelector((state) => state.admin);

  return (
    <div className="flex justify-center">
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={onChange}
        name={name}
      >
        <option value="">type</option>
        {type.map((el) => {
          return (
            <option value={el} key={el}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
}
