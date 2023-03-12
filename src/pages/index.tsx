import Link from "next/link";
import { MainNavigation } from "@/components/main-nav";

export default function Home() {
  return (
    <>
      <MainNavigation />
      <Link href="/profiles/profile-create">test</Link>
    </>
  );
}
