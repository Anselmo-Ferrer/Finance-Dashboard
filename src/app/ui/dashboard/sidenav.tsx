'use client';

import { BiSolidDashboard, BiTable, BiSolidCreditCard, BiSolidUser } from "react-icons/bi";
import { inter } from "@/app/ui/fonts";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';



const dashBoardItens = [
  {title: 'Dashboard', href: '/dashboard', icon: BiSolidDashboard},
  {title: 'Tables', href: '/dashboard/tables', icon: BiTable},
  {title: 'Billing', href: '/dashboard/billing', icon: BiSolidCreditCard},
  {title: 'Profile', href: '/dashboard/profile', icon: BiSolidUser},
]

export default function SideNav() {

  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen p-2">
      <div className="w-full h-full relative bg-transparent">

      {/* blur */}
        <div className=" rounded-xl absolute inset-0 backdrop-blur-[140px] bg-[linear-gradient(112deg,_rgba(6,_11,_38,_0.94)_59.3%,_rgba(26,_31,_55,_0)_100%)] z-0" />

      {/* component */}
        <div className="relative z-10 p-4 w-full h-full">
          {dashBoardItens.map(item => {
            const Icon = item.icon;
            return (
              <Link 
                key={item.title} 
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 hover:bg-sky-100 hover:text-blue-600 mb-3 px-4 py-1 rounded-xl", 
                  {
                    'bg-sky-100 text-blue-600': pathname === item.href,
                  },
                )}
              >
                <div className="flex items-center justify-center w-[30px] h-[30px] rounded-xl bg-[#1A1F37] shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)]">
                  <Icon color="#0075FF"/>
                </div>
                <span className={`${inter.className} font-semibold`}>{item.title}</span>
              </Link>
            )
          })}

        </div>

      </div>
    </aside>
  );
}