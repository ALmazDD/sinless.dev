import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function GeneralProfileData() {
  return (
    <>
      <div className="mb-7">
        <div className=" text-2xl  mb-5 font-semibold">Название профиля</div>
        <Input placeholder="Юрист" className=" w-6/12" />
      </div>

      <div className="mb-7">
        <div className=" text-2xl  mb-5 font-semibold">
          Основаная информация о вас
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Cтрана" className=" " />
          <Input placeholder="Профессия" className="" />
          <Input placeholder="Город" className=" " />
          <Input placeholder="Сфера деятельности" className=" " />
        </div>
      </div>
      <div>
        <div className=" text-2xl  mb-5 font-semibold">Обо мне</div>
        <Textarea placeholder="Расскажите о себе" />
      </div>
    </>
  );
}
