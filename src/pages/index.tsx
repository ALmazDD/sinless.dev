import { Banner } from "@/components/landing/banner";
import { Skills } from "@/components/landing/skills";
import { MainNavigation } from "@/components/main-nav";

export default function Home() {
  return (
    <>
      <MainNavigation />
      <Banner />
      <Skills />
    </>
  );
}
