import { MainNavigation } from "@/components/main-nav";
import GeneralProfileData from "@/components/profiles/general-profile-data";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Create() {
  return (
    <>
      <div className="bg-slate-50 h-screen">
        <MainNavigation />

        <div className="container max-w-screen-xl mx-auto px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Портфолио /</span>
            Создание профиля
          </h1>

          <div className="flex justify-between items-baseline">
            <h1 className="text-5xl pt-7  font-extrabold	">Профиль</h1>

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
              <GeneralProfileData />

              <div className="flex pt-5 pb-7 gap-3 justify-end">
                <Button variant="ghost">Назад</Button>
                <Button>Далее</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
