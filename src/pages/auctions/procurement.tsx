import {
  AlignHorizontalDistributeCenter,
  LayoutGrid,
  Search,
} from "lucide-react";
import { ProcurementTest } from "@/components/auction/procurement-test";
import { MainNavigation } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Procurement() {
  return (
    <>
      <div className="h-screen bg-slate-50">
        <MainNavigation />

        <div className="container mx-auto max-w-screen-xl px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Профиль /</span>
            Закупки
          </h1>
          <div className="my-5 flex flex-col items-end justify-end gap-4 md:mb-16 md:flex-row md:items-baseline md:justify-between">
            <h1 className="hidden pt-7  text-5xl font-extrabold md:flex	">
              Закупки
            </h1>

            <div className="flex items-center gap-3">
              <Input type="search" placeholder="Искать по закупкам" />
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
          <div className="grid justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProcurementTest />
            <ProcurementTest />
            <ProcurementTest />
            <ProcurementTest />
            <ProcurementTest />
            <ProcurementTest />
            <ProcurementTest />
            <ProcurementTest />
            <ProcurementTest />
          </div>
        </div>
      </div>
    </>
  );
}
