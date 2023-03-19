import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import Google from "@/assets/google.svg";
import LogoWhite from "@/assets/logo-white.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Auth() {
  return (
    <>
      <div className="bg-auth bg-no-repeat bg-cover bg-center h-screen">
        <div className="max-w-[90%] m-auto flex items-end justify-between lg:justify-start gap-4 pt-20">
          <Image src={LogoWhite} alt="some" className="w-24 md:w-40" />
          <p className="text-slate-700 md:text-[#A6AEB7] text-[9px] md:text-sm">
            Инструмент для предпринимателей <br /> по поиску и работе с
            партнёрами
          </p>
        </div>

        <div className="flex justify-center items-center h-[55%] md:h-[70%]">
          <div className="flex flex-col gap-4 md:w-[425px] bg-white p-6 rounded-md shadow-md shadow-slate-700">
            <h1 className="text-xs md:text-lg font-semibold">
              Вход на платформу
            </h1>
            <Input
              type="email"
              className="text-xs md:text-sm"
              placeholder="Введите ваш email"
            />
            <div className="flex flex-col gap-4 ">
              <Link href="profiles/create" className="">
                <Button className="bg-slate-900 hover:bg-slate-700 min-w-full text-xs md:text-sm">
                  Войти
                </Button>
              </Link>

              <Link href="/">
                <Button
                  className="flex items-center gap-2 text-xs md:text-sm min-w-full"
                  variant="outline"
                >
                  <Image
                    src={Google}
                    height={24}
                    width={24}
                    alt="google login"
                  />
                  Войти c Google
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
