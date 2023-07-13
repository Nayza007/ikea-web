import { useState } from "react";

import { HiEye, HiEyeOff } from "react-icons/hi";
import RegisterInput from "./RegisterInput";
import validateRegister from "../../../validator/validate-register";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../component/Button";
import { registerAsync } from "../slice/auth-slice";
import InputErrorMessage from "./InputErrorMessage";
import useForm from "../../../hooks/useForm";
import Loader from "../../../component/Loader";

const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};
export default function RegisterForm() {
  const { input, error, handleChangeInput, handleSubmitForm } = useForm(
    initialInput,
    validateRegister
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const onSubmit = async (input) => {
    try {
      await dispatch(registerAsync(input)).unwrap();

      navigate("/");
    } catch (err) {}
  };

  return (
    <>
      {loading && <Loader />}
      <form
        className="w-full flex my-2 mx-2 flex-1"
        onSubmit={handleSubmitForm(onSubmit)}
      >
        {/* right from */}
        <div className="flex-1 flex flex-col gap-3 px-4">
          <div className="flex-1 font-semibold text-[14px] py-2">
            สร้างมุมที่คุณถูกใจในอิเกียเราบอกคุณหรือยังว่าสมัครสมาชิกฟรี
          </div>
          <div className="flex flex-col gap-2 ">
            <div>
              <RegisterInput
                className="w-full max-w-[430px] outline-none border border-[#c7c2c2] rounded-[8px] h-[40px] pl-2  focus:border-gray-500"
                id="firstName"
                content="ชื่อจริง"
                value={input.firstName}
                name="firstName"
                onChange={handleChangeInput}
              />
              <InputErrorMessage message={error?.firstName} />
            </div>
            <div>
              <RegisterInput
                className="w-full max-w-[430px] outline-none border border-[#c7c2c2] rounded-[8px] h-[40px] pl-2  focus:border-gray-500"
                id="lastName"
                content="นามสกุล"
                value={input.lastName}
                name="lastName"
                onChange={handleChangeInput}
              />
              <InputErrorMessage message={error?.lastName} />
            </div>
            <div>
              <RegisterInput
                className="w-full max-w-[430px] outline-none border border-[#c7c2c2] rounded-[8px] h-[40px] pl-2  focus:border-gray-500"
                id="email"
                content="อีเมล"
                value={input.email}
                name="email"
                onChange={handleChangeInput}
              />
              <InputErrorMessage message={error?.email} />
            </div>
            <div>
              <RegisterInput
                className="w-full max-w-[430px] outline-none border border-[#c7c2c2] rounded-[8px] h-[40px] pl-2  focus:border-gray-500"
                id="phoneNumber"
                content="เบอร์โทร"
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={handleChangeInput}
              />
              <InputErrorMessage message={error?.phoneNumber} />
            </div>
            <div className="relative">
              <RegisterInput
                className="w-full max-w-[430px] outline-none border border-[#c7c2c2] rounded-[8px] h-[40px] pl-2  focus:border-gray-500"
                id="password"
                content="รหัสผ่าน"
                value={input.password}
                name="password"
                onChange={handleChangeInput}
              />
              <InputErrorMessage message={error?.password} />
              <div
                onClick={() => setShowPassword(!showPassword)}
                role="button"
                className="absolute top-[70%] left-[60%]"
              >
                {showPassword ? (
                  <HiEyeOff className="h-3.5 w-3.5" onClick />
                ) : (
                  <HiEye className="h-3.5 w-3.5" />
                )}
              </div>
            </div>
            <div className="relative">
              <RegisterInput
                className="w-full max-w-[430px] outline-none border border-[#c7c2c2] rounded-[8px] h-[40px] pl-2  focus:border-gray-500"
                id="confirmPassword"
                content="ยืนยันรหัสผ่าน"
                value={input.confirmPassword}
                name="confirmPassword"
                onChange={handleChangeInput}
              />
              <InputErrorMessage message={error?.confirmPassword} />
              <div
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                role="button"
                className="absolute top-[70%] left-[60%]"
              >
                {showConfirmPassword ? (
                  <HiEyeOff className="h-3.5 w-3.5" />
                ) : (
                  <HiEye className="h-3.5 w-3.5" />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 py-10 px-2">
              <Button
                type="submit"
                content="สร้างบัญชี"
                styles="bg-black text-white max-w-[400px] hover:bg-gray-800"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
