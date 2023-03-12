import { Flower, Mail } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Auth() {
  return (
    <>
      <div>
        <div className="grid md:grid-cols-2">
          <div className="bg-white h-screen">
            <div className="flex flex-col gap-3 w-max h-screen m-auto items-start justify-center">
              <div className="flex flex-col gap-3">
                <Image src={Logo} alt="logo" />
                <h1>Добро пожаловать !</h1>
                <p className="lg:hidden">Воплощайте свои мечты в жизнь!</p>
              </div>
              <form className="flex flex-col gap-3">
                <p>Email</p>
                <Input placeholder="Введите ваш email" />
                <Button>Войти</Button>
                <Button variant="outline">
                  <Mail className="mr-3" /> Войти при помощи Gmail
                </Button>
              </form>
            </div>
          </div>
          <div className="hidden md:flex bg-gradient-to-r from-lime-500 to-lime-600  rounded-l-3xl h-screen">
            <div className="flex flex-col gap-3 w-max h-screen m-auto items-start justify-center">
              <div className="flex flex-col gap-3">
                <Flower height={70} width={70} />
                <h1 className="text-[60px] text-slate-200 font-semibold">
                  Начните воплощать свои <br />
                  идеи в реальность !
                </h1>
                <p className=" text-lg">
                  Создайте бесплатную учетную запись и получите полный доступ ко
                  всем функциям <br /> в течение 30 дней. Кредитная карта не
                  требуется. Приступайте к работе через 2 минуты.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
