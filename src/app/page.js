import Header from "@/components/Header";
import MapSection from "@/components/MapSection";
import SearchSection from "@/components/SearchSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <h2 className="hidden md:block w-full h-[24px] my-8 leading-6 font-normal text-center font-sans text-[20px] text-[#1B31A8]">
        Let's calculate <span className="font-bold">distance</span> from Google
        maps
      </h2>

      <div className="flex flex-col-reverse md:flex-row items-center justify-around">
        
        <SearchSection />
        <MapSection />
      </div>
    </main>
  );
}
