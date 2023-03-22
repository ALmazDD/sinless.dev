import { PlusIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import NoProfile from "@/assets/noProfiles.svg";
import { Button } from "../ui/button";

export function NoProfiles() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8">
        <Image src={NoProfile} alt="Нет профилей" />
        <p className=" text-2xl font-semibold">У вас нет профиля</p>
        <Button
          variant="outline"
          className="flex gap-2 bg-slate-900 text-white"
        >
          <PlusIcon /> Создать профиль
        </Button>
      </div>
    </>
  );
}
