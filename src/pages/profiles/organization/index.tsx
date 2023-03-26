import { Files, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnalyzingMarket from "@/assets/analyzingMarket.svg";
import OnLaptop from "@/assets/onLaptop.svg";
import { MainNavigation } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function All() {
  const isTrue = true;
  return (
    <>
      <div className="h-screen bg-slate-50">
        <MainNavigation />
        <div className="container mx-auto max-w-screen-xl px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Профили </span>
          </h1>
          <div className="mb-16 flex items-baseline justify-between">
            <h1 className="pt-7 text-5xl  font-extrabold	">Закупки</h1>

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
                  <div className="flex flex-col items-center rounded-lg border hover:border-black">
                    <Image src={OnLaptop} alt="Нет профилей" />
                    <div className="mb-3 flex flex-col items-center">
                      <p className=" text-lg font-bold">Личный профиль</p>
                      <p>физического лица</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border  hover:border-black">
                    <Image src={AnalyzingMarket} alt="Нет профилей" />
                    <div className="mb-3 flex flex-col items-center">
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
              <div className="flex max-w-[400px] flex-col items-center justify-center rounded-lg border-[1px] bg-white py-9 text-xl font-semibold">
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
