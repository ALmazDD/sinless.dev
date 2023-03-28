import {
  AlignHorizontalDistributeCenter,
  ChevronRight,
  Eye,
  LayoutGrid,
  MessageSquare,
  Search,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
import NoProfile from "@/assets/noProfiles.svg";
import Techno from "@/assets/techno.svg";
import TestAva from "@/assets/testAva.png";
import { MainNavigation } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import useDebounce from "@/hooks/use-debounce";

export default function All() {
  const isTrue = false;

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
    <div>
      <div className="h-screen bg-slate-50">
        <MainNavigation />

        <div className="mx-auto max-w-screen-xl px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Проекты</span>
          </h1>
          <div className="my-5 flex flex-col items-end justify-end gap-4 md:mb-16 md:flex-row md:items-baseline md:justify-between">
            <h1 className="hidden pt-7 text-5xl font-extrabold md:flex">
              Проекты
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

          {isTrue ? (
            <div className="grid gap-6 sm:grid-cols-2">
              <div className=" rounded-2xl border border-slate-200 bg-white">
                <div className="p-4">
                  <div className="grid w-full grid-cols-10 gap-4">
                    <div className="col-span-2">
                      <Image src={Techno} alt="test" />
                    </div>
                    <div className="col-span-8 flex flex-col gap-1">
                      <div className="flex justify-between">
                        <p className="text-xs font-semibold sm:text-base">
                          Техно пространство
                        </p>
                        <div className="flex items-center gap-4 text-xs text-slate-400 sm:text-sm">
                          <p>26.06.2023</p>
                          <p className="flex items-center gap-1 text-sm">
                            <Eye /> 17
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <p className="max-w-[300px] text-xs sm:text-sm">
                          производство одежды, текстильных изделий, обуви
                        </p>
                        <p className="flex items-center rounded-2xl bg-lime-500 py-1 px-2 text-[9px] font-bold text-slate-100 sm:text-xs">
                          в ТОПе
                        </p>
                      </div>
                      <div className="mt-2 flex gap-4 text-xs">
                        <div className="flex w-fit items-center gap-4 rounded-xl bg-slate-100 p-2">
                          <Image
                            src={TestAva}
                            alt="test"
                            width={20}
                            height={20}
                            className="rounded-lg "
                          />
                          <p className="text-xs sm:text-sm">Сара Алтыбекова</p>
                        </div>
                        <div className="flex w-fit items-center gap-2 rounded-xl bg-slate-100 p-2">
                          <MessageSquare width={20} height={20} /> Чат проекта
                        </div>
                      </div>
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
          ) : (
            <div className="flex flex-col items-center justify-center gap-8">
              <Image src={NoProfile} alt="Нет профилей" />
              <p className=" text-2xl font-semibold">У вас нет проектов</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
