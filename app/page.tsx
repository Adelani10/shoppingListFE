import Image from "next/image";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F8FF] font-[family-name:var(--font-geist-sans)]">
      <Sidebar />
      
    </div>
  );
}
