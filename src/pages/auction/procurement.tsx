import {
  AlignHorizontalDistributeCenter,
  ChevronRight,
  LayoutGrid,
  Search,
  Star,
} from "lucide-react";
import ProcurementTest from "@/components/auction/procurement-test";
import { MainNavigation } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Procurement() {
  return (
    <>
      <div className="bg-slate-50 h-screen">
        <MainNavigation />

        <div className="container max-w-screen-xl mx-auto px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Портфолио /</span>
            Закупки
          </h1>
          <div className="flex justify-between items-baseline mb-16">
            <h1 className="text-5xl pt-7  font-extrabold	">Закупки</h1>

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
          <div className="grid grid-cols-3 gap-6">
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
