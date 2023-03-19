import {
  AlignHorizontalDistributeCenter,
  LayoutGrid,
  Search,
} from "lucide-react";
import { MainNavigation } from "@/components/main-nav";
import { ProjectTest } from "@/components/projects/project-test";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function All() {
  return (
    <div>
      <div className="bg-slate-50 h-screen">
        <MainNavigation />

        <div className="container max-w-screen-xl mx-auto px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Проекты</span>
          </h1>
          <div className="flex justify-between items-baseline mb-16">
            <h1 className="text-5xl pt-7  font-extrabold">Проекты</h1>

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
            <ProjectTest />
            <ProjectTest />
            <ProjectTest />
            <ProjectTest />
            <ProjectTest />
            <ProjectTest />
            <ProjectTest />
            <ProjectTest />
          </div>
        </div>
      </div>
    </div>
  );
}
