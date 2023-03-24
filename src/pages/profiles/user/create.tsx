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
      <div className="h-screen bg-slate-50">
        <MainNavigation />
        <div className="container mx-auto max-w-screen-xl px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Профиль /</span>
            Создание профиля
          </h1>

          <div className="flex items-baseline justify-between">
            <h1 className="pt-7 text-5xl  font-extrabold	">{/* Профиль */}</h1>

            <div className="flex gap-3 pt-4">
              <Button variant="subtle">Отмена</Button>
              <Button>Сохранить</Button>
            </div>
          </div>

          <div className="rounded-lg bg-white shadow-sm">
            <Tabs defaultValue="general">
              <TabsList className="flex mt-5  border border-slate-100 bg-white py-9 sm:mt-11">
                <div className="flex flex-row flex-nowrap gap-10 overflow-x-auto md:w-full md:justify-around">
                  <TabsTrigger value="general">Общие данные</TabsTrigger>
                  <TabsTrigger value="job">Работа</TabsTrigger>
                  <TabsTrigger value="degree">Образование</TabsTrigger>
                  <TabsTrigger value="sertification">
                    Сертефикаты и навыки
                  </TabsTrigger>
                  <TabsTrigger value="social">Соцсети</TabsTrigger>
                </div>
              </TabsList>

              {/* General info */}
              <div className="m-auto flex w-auto justify-center">
                <TabsContent
                  className="h-[500px] w-[700px] border-none"
                  value="general"
                >
                  <div className="mb-7">
                    <div className=" mb-5  text-2xl font-semibold">
                      Название профиля
                    </div>
                    <Input placeholder="Юрист" className=" w-6/12" />
                  </div>

                  <div className="mb-7">
                    <div className=" mb-5  text-2xl font-semibold">
                      Основаная информация о вас
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input placeholder="Cтрана" className=" " />
                      <Input placeholder="Профессия" className="" />
                      <Input placeholder="Город" className=" " />
                      <Input placeholder="Сфера деятельности" className=" " />
                    </div>
                  </div>
                  <div>
                    <div className=" mb-5  text-2xl font-semibold">Обо мне</div>
                    <Textarea
                      className="bg-slate-100"
                      placeholder="Что будущему партнеру стоит о вас знать? Что вы умеете делать, что будет полезно другим людям?"
                    />
                  </div>
                </TabsContent>
              </div>

              {/* job experience */}
              <div className="m-auto flex w-auto justify-center">
                <TabsContent
                  className=" h-[500px] w-[700px] border-none"
                  value="job"
                >
                  <div className="mb-7">
                    <div className=" mb-5  text-2xl font-semibold">
                      Опыт работы
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
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
              <div className="m-auto flex w-auto justify-center">
                <TabsContent
                  className=" h-[500px] w-[800px] border-none"
                  value="degree"
                >
                  <div className="grid justify-between gap-20 sm:grid-cols-2">
                    <div>
                      <div className=" mb-5  text-2xl font-semibold">
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
                      <div className=" mb-5  text-2xl font-semibold">
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
              <div className="m-auto flex w-auto justify-center">
                <TabsContent
                  className=" h-[500px] w-[900px] border-none"
                  value="sertification"
                >
                  <div className="grid justify-between gap-20 sm:grid-cols-2">
                    <div>
                      <div className=" mb-5  text-2xl font-semibold">
                        Сертификаты
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="flex gap-5">
                          <Input placeholder="Название сертификата" />
                          <Button variant="outline">
                            <Paperclip className="rotate-90 -scale-y-100" />
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
                      <div className=" mb-5  text-2xl font-semibold">
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
              <div className="m-auto flex w-auto justify-center">
                <TabsContent
                  className="h-[500px] w-[700px] border-none "
                  value="social"
                >
                  <div className="flex flex-col">
                    <div className=" mb-5  text-2xl font-semibold">
                      Социальные сети
                    </div>
                    <div className="mb-7 flex items-center gap-3">
                      <Circle />
                      <Input placeholder="Ссылка на Telegram" className="" />
                    </div>
                    <div className="mb-7 flex items-center gap-3">
                      <Circle />
                      <Input placeholder="Ссылка на LinkedIn" className="" />
                    </div>
                    <div className="mb-7 flex items-center gap-3">
                      <Circle />
                      <Input placeholder="Ссылка на Instagram" className="" />
                    </div>
                    <div className="mb-7 flex items-center gap-3">
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
