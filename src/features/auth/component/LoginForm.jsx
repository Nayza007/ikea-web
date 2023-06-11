import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import LoginInput from "./LoginInput";
import useForm from "../../../hooks/useForm";
import validateLogin from "../../../validator/validate-login";
import Button from "../../../component/Button";
import { loginAsync } from "../slice/auth-slice";
import InputErrorMessage from "./InputErrorMessage";
const initialInput = {
  email: "",
  password: "",
};
export default function LoginForm() {
  const { input, error, handleChangeInput, handleSubmitForm } = useForm(
    initialInput,
    validateLogin
  );

  const [showPassword, setShowPassword] = useState();
  const dispatch = useDispatch();

  const onSubmit = async (input) => {
    try {
      await dispatch(loginAsync(input)).unwrap();
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <form
      className="w-full flex my-2 mx-2 flex-1"
      onSubmit={handleSubmitForm(onSubmit)}
    >
      <div className="flex-1 flex flex-col gap-3 px-4">
        <div className=" font-semibold text-[14px] py-2">
          เข้าสู่ระบบหรือสมัครสมาชิก IKEA Family วันนี้เพื่อพบกับประสบการณ์
          ที่เป็นส่วนตัวยิ่งขึ้น
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="relative flex flex-col ">
            <LoginInput
              className="w-full max-w-[430px] outline-none border border-[#c7c2c2] rounded-[8px] h-[40px] pl-2  focus:border-gray-500"
              id="Email"
              content="อีเมล"
              value={input.email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>
          <InputErrorMessage message={error?.email} />
          <div>
            <LoginInput
              className="w-full max-w-[430px] outline-none border border-[#c7c2c2] rounded-[8px] h-[40px] pl-2 focus:border-gray-500 "
              id="password"
              content="รหัสผ่าน"
              value={input.password}
              name="password"
              onChange={handleChangeInput}
            />
          </div>
          <InputErrorMessage message={error?.password} />
          <div>
            <div className="flex flex-col gap-4 py-10 px-2">
              <Button
                content="เข้าสู่ระบบ"
                styles="bg-black text-white max-w-[400px] hover:bg-gray-800"
              />
              <Link to="/register" className="w-[430px]">
                <Button
                  content="สร้างบัญชี"
                  styles="bg-white text-black max-w-[400px] hover:border-gray-800"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
