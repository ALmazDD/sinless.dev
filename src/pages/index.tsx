import Link from "next/link";
import { MainNavigation } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import Auth from "./login/auth";

export default function Home() {
  return (
    <>
      <MainNavigation />
      <div className="container mx-auto pt-20">
        <div className="flex">
          <div className=" w-full lg:w-1/2">
            <div className="lg:pt-0">
              <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                LIM {}
                <span className="text-slate-600">test</span>
              </h2>
              <p className="mt-8 lg:mr-8">
                Найди единомышленников и начни свой бизнес
              </p>
              <div className="mt-10">
                <Link href="login/auth">
                  <Button variant="outline">ЗаLimit</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
