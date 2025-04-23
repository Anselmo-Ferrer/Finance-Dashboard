import Image from "next/image";
import BackgroundImage from "@/app/background.png";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F123B] via-[#090D2E] to-[#020515]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F123B] via-[#090D2E] to-[#020515]" />
      <Image
        src={BackgroundImage}
        alt="Blurred effect"
        width={2526}
        height={1875}
        className="absolute -left-[330px] -top-[170px] blur-[120px] pointer-events-none select-none"
        style={{ boxShadow: "272px 272px 272px rgba(0,0,0,0.5)" }}
      />
    </div>
  )
}