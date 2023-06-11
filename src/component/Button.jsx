export default function Button({
  content,
  type,
  onClick,
  styles = "bg-white text-black max-w-[400px] hover:border-black",
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${
        styles ? styles : ""
      }  w-[430px] h-[40px] text-sm font-semibold border rounded-3xl shadow hover:transition-transform`}
    >
      {content}
    </button>
  );
}
