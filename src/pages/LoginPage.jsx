import LoginForm from "../features/auth/component/LoginForm";

export default function LoginPage() {
  return (
    <main className="w-full flex my-2 mx-2 flex-1 mt-[150px]">
      {/* left */}
      <div className="flex-1 flex flex-col gap-2 px-4">
        <div className=" font-extrabold text-[24px] pt-2 ">เข้าสู่ระบบ</div>
        <div className=" font-medium text-sm">
          สัมผัสประสบการณ์ที่ดียิ่งขึ้น เพราะคุณไม่ต้องกรอกข้อมูลส่วนตัวทุกครั้ง
        </div>
      </div>
      {/*right from */}
      <LoginForm />
    </main>
  );
}
