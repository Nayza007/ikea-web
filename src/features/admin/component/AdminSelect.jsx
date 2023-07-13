import { useSelector } from "react-redux";

export default function AdminSelect({ onChange, name, value }) {
  const { type } = useSelector((state) => state.admin.fetchProduct);
  console.log(type);
  return (
    <div className="flex justify-center">
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={onChange}
        name={name}
        value={value}
      >
        <option value="">type</option>
        {type
          ? type.map((el, i) => {
              return (
                <option value={el.type} key={el.type}>
                  {el.type}
                </option>
              );
            })
          : ""}
      </select>
    </div>
  );
}
