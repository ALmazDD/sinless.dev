import { ChevronRight, Eye, MessageSquare, Star } from "lucide-react";
import Image from "next/image";
import Techno from "@/assets/techno.svg";
import TestAva from "@/assets/testAva.jpg";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function ProjectTest() {
  return (
    <div className="bg-white min-w-[400px] border border-slate-200 rounded-2xl">
      <div className="px-4 py-4">
        <div className="grid grid-cols-10 gap-4 w-full">
          <div className="col-span-2">
            <Image src={Techno} alt="test" />
          </div>
          <div className="col-span-8 flex flex-col gap-1">
            <div className="flex justify-between">
              <p>Техно пространство</p>
              <div className="flex gap-4 items-center text-sm text-slate-400">
                <p>26.06.2023</p>
                <p className="flex gap-1 items-center text-sm">
                  <Eye /> 17
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="w-[300px] text-xs">
                производство одежды, текстильных изделий, обуви
              </p>
              <div className="flex items-center text-sm text-slate-400">
                <p className="text-slate-100 text-xs font-bold py-1 px-2 bg-lime-500 rounded-2xl">
                  в ТОПе
                </p>
              </div>
            </div>
            <div className="flex gap-4 text-xs mt-2">
              <div className="flex items-center gap-4 px-2 py-2 w-fit bg-slate-100 rounded-xl">
                <Image
                  src={TestAva}
                  alt="test"
                  width={20}
                  height={20}
                  className="rounded-lg "
                />{" "}
                Сара Алтынбекова
              </div>
              <div className="flex items-center gap-2 px-2 py-2 w-fit bg-slate-100 rounded-xl">
                <MessageSquare width={20} height={20} /> Чат проекта
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-6" />
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
