import { ChevronRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function ProcurementTest() {
  return (
    <div className="min-w-[300px] rounded-2xl border border-slate-200 bg-white md:w-auto">
      <div className="p-4">
        <div className="flex flex-col gap-4">
          <div className="mb-2.5 flex flex-row justify-between">
            <div className="flex gap-2">
              <p className="text-sm">#120</p>
              <p className="text-base text-slate-400">Поехали с нами</p>
            </div>
            <p className=" text-sm text-slate-400">02.01.2023</p>
          </div>
          <div className="mb-2.5 flex flex-row justify-between">
            <p className="text-base font-semibold">Менеджер по туризму</p>
            <p className="rounded-2xl bg-lime-500 py-1 px-2 text-xs font-bold text-slate-100">
              в ТОПе
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-2.5">
            <p className="text-sm text-slate-400">Заявки</p>
            <p className="w-fit items-center justify-center rounded-2xl bg-sky-50 px-2 pt-0.5 text-center text-xs text-sky-500">
              5
            </p>
            <p className="text-sm text-slate-400">Статус</p>
            <p className="w-fit items-center justify-center rounded-2xl bg-sky-50 px-2 pt-0.5 text-center text-xs text-sky-500">
              опубликован
            </p>
            <p className="text-sm text-slate-400">Прием заявок</p>
            <p className="w-fit items-center justify-center rounded-2xl bg-sky-50 px-2 pt-0.5 text-center text-xs text-sky-500">
              до 24.01.2023, 14:00
            </p>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button className="rounded-full bg-lime-100 py-1.5 px-2">
              <Star className="text-lime-500" />
            </Button>
            <p className="text-xs sm:text-sm">Добавить в избранное</p>
          </div>
          <Button className="rounded-full bg-slate-300 py-1.5 px-2 hover:bg-black">
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
