import { MainNavigation } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function ProfileCreate() {
  return (
    <>
      <div className="bg-slate-50 h-screen">
        <MainNavigation />

        <div className="container max-w-screen-xl mx-auto px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Портфолио /</span>
            Создание портфолио
          </h1>

          <div className="flex justify-between items-baseline">
            <h1 className="text-5xl pt-7  font-extrabold	">Портфолио </h1>

            <div className="flex gap-3">
              <Button variant="subtle">Отмена</Button>
              <Button>Сохранить</Button>
            </div>
          </div>

          <div className=" bg-white w-full ">
            <div className="flex justify-around text-lg font-semibold text-slate-300 mt-11 py-9 border border-slate-100 border-b-1 ">
              <div className="text-lime-500">Общие данные</div>
              <Separator orientation="vertical" />
              <div>Работа</div>
              <Separator orientation="vertical" />
              <div>Образование</div>
              <Separator orientation="vertical" />
              <div>Сертефикаты и навыки</div>
              <Separator orientation="vertical" />
              <div>Соцсети</div>
            </div>
            <div className=" container max-w-screen-sm m-auto pt-8">
              <div className="mb-7">
                <div className=" text-2xl  mb-5 font-semibold">
                  Название портфолио
                </div>
                <Input placeholder="Юрист" className=" w-6/12" />
              </div>

              <div className="mb-7">
                <div className=" text-2xl  mb-5 font-semibold">
                  Основаная информация о вас
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Cтрана" className=" " />
                  <Input placeholder="Профессия" className="" />
                  <Input placeholder="Город" className=" " />
                  <Input placeholder="Сфера деятельности" className=" " />
                </div>
              </div>

              <div>
                <div className=" text-2xl  mb-5 font-semibold">Обо мне</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
