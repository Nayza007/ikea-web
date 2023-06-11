import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  return (
    <div className="w-full flex my-2 mx-2 flex-1">
      <div className="flex-1 flex flex-col gap-2 px-4">
        {/* left */}
        <div className=" font-extrabold text-[24px] pt-2 ">สร้างบัญชี</div>
        <div className=" font-medium text-sm flex gap-2">
          <span>มีบัญชีแล้วหรือยัง?</span>
          <Link to="/login">
            <span className="underline">เข้าสู่ระบบที่นี่</span>
          </Link>
        </div>
      </div>
      {/* right from */}
      <div className="flex-1 flex flex-col gap-3 px-4">
        <RegisterForm />
      </div>
    </div>
  );
}
