import { Files, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnalyzingMarket from "@/assets/analyzingMarket.svg";
import NoProfile from "@/assets/noProfiles.svg";
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
        <div className="mx-auto max-w-screen-xl px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Профили </span>
          </h1>
          <div className="mb-16 flex items-baseline justify-between">
            <h1 className="pt-7 text-5xl  font-extrabold">
              <p className="hidden sm:flex">Профили</p>
            </h1>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex gap-1 bg-black text-xs hover:bg-slate-700 sm:text-sm">
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
                      <p className="text-sm font-bold sm:text-lg">
                        Личный профиль
                      </p>
                      <p className="text-xs">физического лица</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border  hover:border-black">
                    <Image src={AnalyzingMarket} alt="Нет профилей" />
                    <div className="mb-3 flex flex-col items-center">
                      <p className="text-sm font-bold sm:text-lg">
                        Профиль компании
                      </p>
                      <p className="text-xs">для юридического лица</p>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    className=" bg-black hover:bg-slate-700 "
                    type="submit"
                  >
                    Создать
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          {isTrue ? (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Link className=" block sm:max-w-[400px] " href="./user/1">
                <div className="flex w-auto flex-col items-center justify-center rounded-lg border-[1px] bg-white py-9 font-semibold hover:border-slate-700">
                  <Files />
                  <p className="w-[203px] text-center text-base sm:text-xl ">
                    Консультационные услуги
                  </p>
                </div>
              </Link>
              <Link className=" block sm:max-w-[400px] " href="./user/1">
                <div className="flex w-auto flex-col items-center justify-center rounded-lg border-[1px] bg-white py-9 font-semibold hover:border-slate-700">
                  <Files />
                  <p className="w-[203px] text-center text-base sm:text-xl ">
                    Консультационные услуги
                  </p>
                </div>
              </Link>
              <Link className=" block sm:max-w-[400px] " href="./user/1">
                <div className="flex w-auto flex-col items-center justify-center rounded-lg border-[1px] bg-white py-9 font-semibold hover:border-slate-700">
                  <Files />
                  <p className="w-[203px] text-center text-base sm:text-xl ">
                    Консультационные услуги
                  </p>
                </div>
              </Link>
              <Link className=" block sm:max-w-[400px] " href="./user/1">
                <div className="flex w-auto flex-col items-center justify-center rounded-lg border-[1px] bg-white py-9 font-semibold hover:border-slate-700">
                  <Files />
                  <p className="w-[203px] text-center text-base sm:text-xl ">
                    Консультационные услуги
                  </p>
                </div>
              </Link>
              <Link className=" block sm:max-w-[400px] " href="./user/1">
                <div className="flex w-auto flex-col items-center justify-center rounded-lg border-[1px] bg-white py-9 font-semibold hover:border-slate-700">
                  <Files />
                  <p className="w-[203px] text-center text-base sm:text-xl ">
                    Консультационные услуги
                  </p>
                </div>
              </Link>
              <Link className=" block sm:max-w-[400px] " href="./user/1">
                <div className="flex w-auto flex-col items-center justify-center rounded-lg border-[1px] bg-white py-9 font-semibold hover:border-slate-700">
                  <Files />
                  <p className="w-[203px] text-center text-base sm:text-xl ">
                    Консультационные услуги
                  </p>
                </div>
              </Link>
              <Link className=" block sm:max-w-[400px] " href="./user/1">
                <div className="flex w-auto flex-col items-center justify-center rounded-lg border-[1px] bg-white py-9 font-semibold hover:border-slate-700">
                  <Files />
                  <p className="w-[203px] text-center text-base sm:text-xl ">
                    Консультационные услуги
                  </p>
                </div>
              </Link>
              <Link className=" block sm:max-w-[400px] " href="./user/1">
                <div className="flex w-auto flex-col items-center justify-center rounded-lg border-[1px] bg-white py-9 font-semibold hover:border-slate-700">
                  <Files />
                  <p className="w-[203px] text-center text-base sm:text-xl ">
                    Консультационные услуги
                  </p>
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-8">
              <Image src={NoProfile} alt="Нет профилей" />
              <p className=" text-2xl font-semibold">У вас нет профиля</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
