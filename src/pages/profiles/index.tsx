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
import TestAva from "@/assets/testAva.png";
import { MainNavigation } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import useDebounce from "@/hooks/use-debounce";

export default function All() {
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

        <div className="container mx-auto max-w-screen-xl px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Профили</span>
          </h1>
          <div className="mb-16 flex items-baseline justify-between">
            <h1 className="pt-7 text-5xl  font-extrabold">Профили</h1>

            <div className="flex items-center gap-3">
              <div className="flex rounded-lg border">
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  placeholder="Поиск"
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
          <div className="grid grid-cols-3 gap-6">
            <div className="min-w-[400px] rounded-lg border border-slate-200 bg-white">
              <div className="p-4">
                <div className="grid w-full grid-cols-10 gap-4">
                  <div className="col-span-4">
                    <Image
                      src={TestAva}
                      alt="test"
                      className="max-h-[126px] max-w-[126px]"
                    />
                  </div>
                  <div className="col-span-6 flex flex-col gap-1">
                    <div>
                      <p>Алмаз Нургали</p>
                    </div>
                    <div className="flex justify-between">
                      <p className=" w-44 overflow-hidden text-ellipsis whitespace-nowrap text-xs">
                        сельское, лесное и рыбное... Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Velit illum quam qui sit,
                        corrupti laboriosam nisi cupiditate nostrum odit quas,
                        nulla a, autem in porro odio? Impedit iure voluptas
                        dolores.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <p>26.06.2023</p>
                      <p className="flex items-center gap-1 text-sm">
                        <Eye /> 17
                      </p>
                    </div>
                    <div className="mt-2 flex gap-4 text-xs">
                      <div className="flex w-fit items-center gap-2 rounded-xl bg-slate-100 p-2">
                        <MessageSquare width={20} height={20} /> Написать
                        сообщение
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
                    <p>Добавить в избранное</p>
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
    </div>
  );
}
