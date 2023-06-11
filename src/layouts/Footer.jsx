import { Facebook, Instagram, LineChat } from "../icons";

export default function Footer() {
  return (
    <footer className="h-[200px] mt-5">
      <div className="px-5 py-5 flex justify-between bg-[#f1eeee]  h-[95%] mx-auto">
        {/* ช่องทางการติดต่อ */}
        <div>
          <span className="font-bold text-sm">ช่องทางติดต่อ</span>
          <ul className="font-light text-[12px] flex gap-3">
            <li>
              <Facebook className="h-[20px] w-[20px]" />
            </li>
            <li>
              <Instagram className="h-[20px] w-[20px]" />
            </li>
            <li>
              <LineChat className="h-[20px] w-[20px]" />
            </li>
          </ul>
        </div>
        {/* 2 */}
        <div>
          <span className="font-bold text-sm">แผนกบริการลูกค้า</span>
          <ul className="font-light text-[12px]">
            <li>นโยบายเปลี่ยนสินค้า</li>
            <li>การรับประกันสินค้า</li>
          </ul>
        </div>
        {/* 3 */}
        <div>
          <span className="font-bold text-sm">เรื่องราวของอิเกีย</span>
          <ul className="font-light text-[12px]">
            <li>เกี่ยวกับเรา</li>
          </ul>
        </div>
        {/* 4 */}
        <div>
          <span className="font-bold text-sm">ข่าวสาร</span>
          <ul className="font-light text-[12px]">
            <li>ห้องข่าวประชาสัมพันธ์</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
