import { Circle, Paperclip, Plus } from "lucide-react";
import { MainNavigation } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function Create() {
  return (
    <>
      <div className="bg-slate-50 h-screen">
        <MainNavigation />
        <div className="container max-w-screen-xl mx-auto px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Портфолио /</span>
            Создание профиля
          </h1>

          <div className="flex justify-between items-baseline">
            <h1 className="text-5xl pt-7  font-extrabold	">Профиль</h1>

            <div className="flex gap-3">
              <Button variant="subtle">Отмена</Button>
              <Button>Сохранить</Button>
            </div>
          </div>

          <div className="bg-white">
            <Tabs defaultValue="general" className="">
              <TabsList className="flex justify-around text-lg font-semibold bg-white text-slate-300 mt-11 py-9 border border-slate-100 border-b-1">
                <TabsTrigger value="general">Общие данные</TabsTrigger>
                <TabsTrigger value="job">Работа</TabsTrigger>
                <TabsTrigger value="degree">Образование</TabsTrigger>
                <TabsTrigger value="sertification">
                  Сертефикаты и навыки
                </TabsTrigger>
                <TabsTrigger value="social">Соцсети</TabsTrigger>
              </TabsList>

              {/* General info */}
              <div className="flex justify-center w-auto m-auto">
                <TabsContent
                  className="h-[500px] w-[700px] border-none"
                  value="general"
                >
                  <div className="mb-7">
                    <div className=" text-2xl  mb-5 font-semibold">
                      Название профиля
                    </div>
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
                    <Textarea
                      className="bg-slate-100"
                      placeholder="Что будущему партнеру стоит о вас знать? Что вы умеете делать, что будет полезно другим людям?"
                    />
                  </div>
                </TabsContent>
              </div>

              {/* job experience */}
              <div className="flex justify-center w-auto m-auto">
                <TabsContent
                  className=" h-[500px] w-[700px] border-none"
                  value="job"
                >
                  <div className="mb-7">
                    <div className=" text-2xl  mb-5 font-semibold">
                      Опыт работы
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Компания" className=" " />
                      <Input placeholder="Должность" className="" />
                      <Input placeholder="Локация" className="" />
                      <div className="flex w-auto gap-3">
                        <Select>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Начало" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Конец" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Textarea
                      className="bg-slate-100"
                      placeholder="Расскажите какие у вас были обязанности, какие задачи вы выполняли во время работы в компании?"
                    />
                    <Button variant="outline">
                      <Plus /> Добавить место работы
                    </Button>
                  </div>
                </TabsContent>
              </div>

              {/* degree */}
              <div className="flex justify-center w-auto m-auto">
                <TabsContent
                  className=" h-[500px] w-[800px] border-none"
                  value="degree"
                >
                  <div className="grid grid-cols-2 justify-between gap-20">
                    <div>
                      <div className=" text-2xl  mb-5 font-semibold">
                        Образование
                      </div>
                      <div className="flex flex-col gap-5">
                        <Input placeholder="Локация" />
                        <Input placeholder="Учебное завидение" />
                        <Input placeholder="Специализация" />
                        <Input placeholder="Степень" />
                        <div className="flex w-auto gap-3">
                          <Select>
                            <SelectTrigger className="">
                              <SelectValue placeholder="Начало" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                              <SelectItem value="dark">Dark</SelectItem>
                              <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select>
                            <SelectTrigger className="">
                              <SelectValue placeholder="Конец" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                              <SelectItem value="dark">Dark</SelectItem>
                              <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button variant="outline">
                          <Plus /> Добавить место работы
                        </Button>
                      </div>
                    </div>
                    <div>
                      <div className=" text-2xl  mb-5 font-semibold">
                        Повышение квалификации
                      </div>

                      <div className="flex flex-col gap-5">
                        <Input placeholder="Организация" />
                        <Input placeholder="Курс" />
                        <Input placeholder="Специализация" />
                        <Input placeholder="Год окончания" />
                        <Button variant="outline">
                          <Plus /> Добавить место работы
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>

              {/* sertification */}
              <div className="flex justify-center w-auto m-auto">
                <TabsContent
                  className=" h-[500px] w-[900px] border-none"
                  value="sertification"
                >
                  <div className="grid grid-cols-2 justify-between gap-20">
                    <div>
                      <div className=" text-2xl  mb-5 font-semibold">
                        Сертификаты
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="flex gap-5">
                          <Input placeholder="Название сертификата" />
                          <Button variant="outline">
                            <Paperclip className="transform rotate-90 -scale-y-100  " />
                          </Button>
                        </div>

                        <Textarea
                          className="bg-slate-100"
                          placeholder="За что получен сертификат? За какое достижение получена награда?"
                        />

                        <Button variant="outline">
                          <Plus /> Добавить сертификат
                        </Button>
                      </div>
                    </div>
                    <div>
                      <div className=" text-2xl  mb-5 font-semibold">
                        Навыки
                      </div>

                      <div className="flex flex-col gap-5">
                        <Input placeholder="Навык" />
                        <Button variant="outline">
                          <Plus /> Добавить навык
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>

              {/* social */}
              <div className="flex justify-center w-auto m-auto">
                <TabsContent
                  className="h-[500px] w-[700px] border-none "
                  value="social"
                >
                  <div className="flex flex-col">
                    <div className=" text-2xl  mb-5 font-semibold">
                      Социальные сети
                    </div>
                    <div className="flex gap-3 items-center mb-7">
                      <Circle />
                      <Input placeholder="Ссылка на Telegram" className="" />
                    </div>
                    <div className="flex gap-3 items-center mb-7">
                      <Circle />
                      <Input placeholder="Ссылка на LinkedIn" className="" />
                    </div>
                    <div className="flex gap-3 items-center mb-7">
                      <Circle />
                      <Input placeholder="Ссылка на Instagram" className="" />
                    </div>
                    <div className="flex gap-3 items-center mb-7">
                      <Circle />
                      <Input placeholder="Ссылка на HeadHunter" className="" />
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
