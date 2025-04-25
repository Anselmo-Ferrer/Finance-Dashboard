
import { BiSolidDashboard, BiTable, BiSolidCreditCard, BiSolidUser } from "react-icons/bi";
import { inter } from "@/app/ui/fonts";

export default function DashboardCard() {
  return (
    <div className="flex justify-between p-4 w-[385px] h-[80px] inset-0 backdrop-blur-[140px] bg-[linear-gradient(112deg,_rgba(6,_11,_38,_0.94)_95.3%,_rgba(26,_31,_55,_0)_100%)] rounded-2xl">
      <div>
        <span className={` ${inter.className} text-[#A0AEC0] text-sm`}>Today's earning</span>
        <div className="gap-4">
          <span className={` ${inter.className} font-bold text-white text-lg mr-1`}>$124,021.31</span>
          <span className={` ${inter.className} font-bold text-[#01B574] text-sm`}>+55%</span>
        </div>
      </div>
      <div className="bg-[#0075FF] w-[45px] h-[45px] rounded-md flex items-center justify-center">
        <BiSolidCreditCard color="white" size={20}/>
      </div>
    </div>
  )
}