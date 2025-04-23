import Background from "@/app/ui/dashboard/background";
import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen overflow-hidden">
      
      <Background />

      <div className="flex h-full">
        <SideNav />
        <main className="flex-1 overflow-y-auto p-6 md:p-12">
          {children}
        </main>
      </div>
    </div>
  );
}