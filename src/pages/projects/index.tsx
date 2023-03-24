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
import Techno from "@/assets/techno.svg";
import TestAva from "@/assets/testAva.png";
import { MainNavigation } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function All() {
  return (
    <div>
      <div className="h-screen bg-slate-50">
        <MainNavigation />

        <div className="container mx-auto max-w-screen-xl px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Проекты</span>
          </h1>
          <div className="mb-16 flex items-baseline justify-between">
            <h1 className="pt-7 text-5xl  font-extrabold">Проекты</h1>

            <div className="flex items-center gap-3">
              <Input type="search" placeholder="Поиск" />
              <Button type="submit" variant="ghost">
                <Search />
              </Button>
              <Button variant="outline">
                <AlignHorizontalDistributeCenter />
              </Button>
              <Button variant="outline">
                <LayoutGrid />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="min-w-[400px] rounded-2xl border border-slate-200 bg-white">
              <div className="p-4">
                <div className="grid w-full grid-cols-10 gap-4">
                  <div className="col-span-2">
                    <Image src={Techno} alt="test" />
                  </div>
                  <div className="col-span-8 flex flex-col gap-1">
                    <div className="flex justify-between">
                      <p>Техно пространство</p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <p>26.06.2023</p>
                        <p className="flex items-center gap-1 text-sm">
                          <Eye /> 17
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="w-[300px] text-xs">
                        производство одежды, текстильных изделий, обуви
                      </p>
                      <div className="flex items-center text-sm text-slate-400">
                        <p className="rounded-2xl bg-lime-500 py-1 px-2 text-xs font-bold text-slate-100">
                          в ТОПе
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex gap-4 text-xs">
                      <div className="flex w-fit items-center gap-4 rounded-xl bg-slate-100 p-2">
                        <Image
                          src={TestAva}
                          alt="test"
                          width={20}
                          height={20}
                          className="rounded-lg "
                        />{" "}
                        Сара Алтынбекова
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
                    <p>Добавить в избранное</p>
                  </div>
                  <Button className="rounded-full bg-slate-300 py-1.5 px-2 hover:bg-black">
                    <ChevronRight />
                  </Button>
                </div>
              </div>
            </div>
            <div className="min-w-[400px] rounded-2xl border border-slate-200 bg-white">
              <div className="p-4">
                <div className="grid w-full grid-cols-10 gap-4">
                  <div className="col-span-2">
                    <Image src={Techno} alt="test" />
                  </div>
                  <div className="col-span-8 flex flex-col gap-1">
                    <div className="flex justify-between">
                      <p>Техно пространство</p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <p>26.06.2023</p>
                        <p className="flex items-center gap-1 text-sm">
                          <Eye /> 17
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="w-[300px] text-xs">
                        производство одежды, текстильных изделий, обуви
                      </p>
                      <div className="flex items-center text-sm text-slate-400">
                        <p className="rounded-2xl bg-lime-500 py-1 px-2 text-xs font-bold text-slate-100">
                          в ТОПе
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex gap-4 text-xs">
                      <div className="flex w-fit items-center gap-4 rounded-xl bg-slate-100 p-2">
                        <Image
                          src={TestAva}
                          alt="test"
                          width={20}
                          height={20}
                          className="rounded-lg "
                        />{" "}
                        Сара Алтынбекова
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
