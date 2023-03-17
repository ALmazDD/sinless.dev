import { ChevronRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function ProcurementTest() {
  return (
    <div className="bg-white w-[400px] border border-slate-200 rounded-2xl">
      <div className="px-4 py-4">
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex flex-row justify-between mb-2.5">
              <div className="flex gap-2">
                <p className="text-sm">#120</p>
                <p className="text-base text-slate-400">Поехали с нами</p>
              </div>
              <p className=" text-sm text-slate-400">02.01.2023</p>
            </div>
            <div className="flex flex-row justify-between mb-2.5">
              <p className="text-base font-semibold">Менеджер по туризму</p>
              <p className="text-slate-100 text-xs font-bold py-1 px-2 bg-lime-500 rounded-2xl">
                в ТОПе
              </p>
            </div>
            <div className="grid grid-cols-2 gap-y-2.5">
              <p className="text-sm text-slate-400">Заявки</p>
              <p className="bg-sky-50 text-xs text-sky-500 w-fit rounded-2xl px-2 pt-0.5 items-center justify-center text-center">
                5
              </p>
              <p className="text-sm text-slate-400">Статус</p>
              <p className="bg-sky-50 text-xs text-sky-500 w-fit rounded-2xl px-2 pt-0.5 items-center justify-center text-center">
                опубликован
              </p>
              <p className="text-sm text-slate-400">Прием заявок</p>
              <p className="bg-sky-50 text-xs text-sky-500 w-fit rounded-2xl px-2 pt-0.5 items-center justify-center text-center">
                до 24.01.2023, 14:00
              </p>
            </div>
          </div>
        </div>
        <Separator className="m-6" />
        <div className="flex items-center justify-between">
          <div className="flex items-center j gap-3">
            <Button className="rounded-full py-1.5 px-2 bg-lime-100">
              <Star className="text-lime-500" />
            </Button>
            <p>Добавить в избранное</p>
          </div>
          <Button className="rounded-full py-1.5 px-2 bg-slate-300 hover:bg-black">
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
