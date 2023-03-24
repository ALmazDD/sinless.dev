import {
  AlignHorizontalDistributeCenter,
  ChevronRight,
  LayoutGrid,
  Search,
  Star,
} from "lucide-react";
import { useState } from "react";
import { useQuery } from "react-query";
import { MainNavigation } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import useDebounce from "@/hooks/use-debounce";

export default function Procurement() {
  const [search, setSearch] = useState("");

  const debouncedSearchTerm = useDebounce(search, 1000);

  const { data, isLoading, error } = useQuery({
    queryKey: ["search", debouncedSearchTerm],
    queryFn: () => {
      if (debouncedSearchTerm) {
        return fetch(
          `https://dummyjson.com/products/search?q=${debouncedSearchTerm}`
        ).then((res) => res.json());
      }
      return { products: [] };
    },
  });

  return (
    <>
      <div className="h-screen bg-slate-50">
        <MainNavigation />

        <div className="mx-auto max-w-screen-xl px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Профиль /</span>
            Закупки
          </h1>
          <div className="my-5 flex flex-col items-end justify-end gap-4 md:mb-16 md:flex-row md:items-baseline md:justify-between">
            <h1 className="hidden pt-7  text-5xl font-extrabold md:flex	">
              Закупки
            </h1>
            <div className="flex items-center gap-3">
              <div className="flex rounded-lg border">
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  placeholder="Искать по закупкам"
                  className="border-none focus:ring-0 focus:ring-offset-0"
                />
                <Button type="submit" variant="ghost">
                  <Search />
                </Button>
              </div>

              <Button variant="outline">
                <AlignHorizontalDistributeCenter />
              </Button>
              <Button variant="outline">
                <LayoutGrid />
              </Button>
            </div>
          </div>
          <div className="grid justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    <p className="text-base font-semibold">
                      Менеджер по туризму
                    </p>
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
                    <p className="text-base font-semibold">
                      Менеджер по туризму
                    </p>
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
                    <p className="text-base font-semibold">
                      Менеджер по туризму
                    </p>
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
          </div>
        </div>
      </div>
    </>
  );
}
