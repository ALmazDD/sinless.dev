import { Files, Plus } from "lucide-react";
import Link from "next/link";
import { MainNavigation } from "@/components/main-nav";
import { NoProfiles } from "@/components/profiles/no-profiles";
import { Button } from "@/components/ui/button";

export default function All() {
  const isTrue = true;
  return (
    <>
      <div className="bg-slate-50 h-screen">
        <MainNavigation />
        <div className="container max-w-screen-xl mx-auto px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Профили </span>
          </h1>
          <div className="flex justify-between items-baseline mb-16">
            <h1 className="text-5xl pt-7  font-extrabold	">Закупки</h1>
            <Button
              variant="outline"
              className="flex gap-2 bg-slate-900 text-white"
            >
              <Plus /> Создать профиль
            </Button>
          </div>
          {isTrue ? (
            <Link href="profiles/view">
              <div className="max-w-[400px] bg-white text-xl font-semibold flex flex-col items-center justify-center py-9 border-[1px] rounded-lg">
                <Files />
                <p className="w-[203px] text-center">Консультационные услуги</p>
              </div>
            </Link>
          ) : (
            <NoProfiles />
          )}
        </div>
      </div>
    </>
  );
}
