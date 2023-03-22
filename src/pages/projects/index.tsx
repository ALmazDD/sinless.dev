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
