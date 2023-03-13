import Image from "next/image";
import Link from "next/link";
import LogoWhite from "@/assets/logo-white.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Auth() {
  return (
    <>
      <div className=" bg-slate-600 bg-no-repeat bg-auth bg-cover bg-center  h-screen">
        <div className="flex items-end justify-between md:justify-start gap-4 max-w-[90%] m-auto pt-20">
          <Image src={LogoWhite} alt="some" className="w-24 md:w-40" />
          <p className="text-slate-700 md:text-[#A6AEB7] text-[9px] md:text-sm">
            Инструмент для предпринимателей <br /> по поиску и работе с
            партнёрами
          </p>
        </div>
        <div className="flex items-center justify-center h-[55%] md:h-[70%]">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-4 w-auto md:w-[425px] bg-white p-6 rounded-md shadow-md">
              <h1 className="text-xs md:text-sm">Вход на платформу</h1>
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
                    className="text-xs md:text-sm min-w-full"
                    variant="outline"
                  >
                    Войти с Google
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
