import { ChevronRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function ProjectTest() {
  return (
    <div className="bg-white w-[400px] border border-slate-200 rounded-2xl">
      <div className="px-4 py-4">
        <div className="grid col-span-10 w-full">
          <div className="col-span-2">some</div>
          <div className="col-span-8">lorem</div>
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
