export default function CartList({
  name,
  quantity,
  price,
  src,
  onClick,
  onClickNe,
}) {
  return (
    <div className="p-4 flex flex-col gap-4">
      <hr />
      <div className="flex gap-5 items-center ">
        <img
          src={src}
          alt="ikea"
          className="block object-cover h-[100px] w-[100px] border shadow-sm rounded-md"
        />

        <p>{name}</p>

        <button onClick={onClickNe}>-</button>
        <p className="text-[16px]">{quantity} amount</p>
        <button onClick={onClick}>+</button>
        <p>{price}</p>
      </div>
      <hr />
    </div>
  );
}
