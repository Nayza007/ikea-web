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
      <div className="flex gap-5 items-center">
        <img
          src={src}
          alt="ikea"
          className="block object-cover h-[100px] w-[100px] border shadow-sm rounded-md"
        />

        <p className="w-[250px] flex-shrink-0 font-medium">{name}</p>

        <button onClick={onClickNe} className="w-1">
          -
        </button>
        <p className="text-[16px] w-15 text-center">{quantity} ชิ้น</p>
        <button onClick={onClick} className="w-1">
          +
        </button>
        <p className="flex-1">
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} บาท
        </p>
      </div>
      <hr />
    </div>
  );
}
