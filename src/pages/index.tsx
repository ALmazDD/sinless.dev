import Image from "next/image";
import { useEffect, useState } from "react";
import { Banner } from "@/components/landing/banner";
import { Skills } from "@/components/landing/skills";
import { MainNavigation } from "@/components/main-nav";
import Gif from "../assets/2iFb.gif";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex h-[100vh] items-center justify-center">
          <Image src={Gif} alt="snoop" />
        </div>
      ) : (
        <>
          {" "}
          <MainNavigation />
          <Banner />
          <Skills />
        </>
      )}
    </>
  );
}
