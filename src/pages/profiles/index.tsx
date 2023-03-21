import { Files, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnalyzingMarket from "@/assets/analyzingMarket.svg";
import OnLaptop from "@/assets/onLaptop.svg";
import { MainNavigation } from "@/components/main-nav";
import { NoProfiles } from "@/components/profiles/no-profiles";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex gap-1 bg-slate-700 hover:bg-black">
                  <Plus /> Создать профиль
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[775px]">
                <DialogHeader>
                  <DialogTitle className="text-center">
                    Выберите вид профиля
                  </DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="flex flex-col items-center border hover:border-black rounded-lg">
                    <Image src={OnLaptop} alt="Нет профилей" />
                    <div className="flex flex-col items-center mb-3">
                      <p className=" text-lg font-bold">Личный профиль</p>
                      <p>физического лица</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center border hover:border-black  rounded-lg">
                    <Image src={AnalyzingMarket} alt="Нет профилей" />
                    <div className="flex flex-col items-center mb-3">
                      <p className=" text-lg font-bold">Профиль компании</p>
                      <p>для юридического лица</p>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    className="bg-slate-700 hover:bg-black "
                    type="submit"
                  >
                    Создать
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          {isTrue ? (
            <Link className=" block max-w-[400px]" href="profiles/view">
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
