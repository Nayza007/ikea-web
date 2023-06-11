export default function AdminSelect() {
  const productType = ["โซฟา", "โต๊ะ", "เก้าอี้"];
  return (
    <div className="flex justify-center">
      <select className="select select-bordered w-full max-w-xs ">
        {productType.map((el) => {
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
