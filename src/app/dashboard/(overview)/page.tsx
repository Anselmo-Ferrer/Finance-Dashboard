import ModeSelect from "@/app/ui/components/modeSelect";
import ChartArea from "@/app/ui/dashboard/areaChart";
import DashboardCard from "@/app/ui/dashboard/dashboardCard";

export default function Page() {
  return (
    <main className="w-full">
      <div className="w-full flex justify-between">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>
      <div className="w-[66%] mt-10">
        <ChartArea />
      </div>
    </main>
  )
}