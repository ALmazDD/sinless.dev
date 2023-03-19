import { Circle, Mail, Power, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Test from "@/assets/testAva.jpg";
import Badge from "@/assets/Vector.svg";
import { MainNavigation } from "@/components/main-nav";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function View() {
  return (
    <div className="bg-slate-50 h-screen">
      <MainNavigation />
      <div className="container max-w-screen-xl mx-auto pt-7">
        <h1 className="text-sm">
          <span className="text-slate-300">Профиль / </span>
          Консультационные услуги
        </h1>

        <div className="flex justify-between items-baseline mb-11">
          <h1 className="text-5xl pt-7  font-extrabold	">
            Консультационные услуги
          </h1>

          <div className="flex gap-2">
            <Button className="bg-slate-700 hover:bg-black">
              Редактировать
            </Button>
            <AlertDialog>
              <AlertDialogTrigger>
                <Trash2 />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Удалить портфолио?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Восстановить портфолио будет невозможно
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Отмена</AlertDialogCancel>
                  <AlertDialogAction>Удалить</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="grid grid-cols-10 gap-4 ">
          <div className="col-span-3">
            <div className="h-full bg-white px-6">
              <div className="flex flex-col justify-center items-center pt-12">
                <Image
                  src={Test}
                  alt="Photo by Alvaro Pinot"
                  className="rounded-md object-cover pb-6 w-auto h-[106px]"
                />
                <p className=" text-2xl font-semibold">Almaz Nurgali</p>
                <p className=" text-sm">Консультационные услуги</p>
                <p className=" text-sm text-sky-500">Отзывы (5)</p>
              </div>
              <Separator className="mt-3 mb-6" />
              <div className="grid grid-cols-2 gap-y-4">
                <div>
                  <p className=" text-sm text-slate-400"> Локация</p>
                  <p className="text-sm">Казахстан</p>
                </div>
                <div>
                  <p className=" text-sm text-slate-400">Профессия</p>
                  <p className="text-sm">Менеджер по туризму</p>
                </div>
                <div>
                  <p className=" text-sm text-slate-400">Город</p>
                  <p className="text-sm">Астана</p>
                </div>
                <div>
                  <p className=" text-sm text-slate-400">Специализация</p>
                  <p className="text-sm">Туризм</p>
                </div>
              </div>
              <Separator className="mt-4 mb-6" />
              <div className="">
                <p className=" text-lg font-semibold">Обо мне</p>
                <p className="text-sm  pt-3">
                  2 года 9 месяцев общий стаж работы в сфере туризма. Работала с
                  интересными компаниями, которые являются ведущими турагентами
                  Казахстана
                </p>
              </div>
              <Separator className="mt-4 mb-6" />
              <div>
                <p className=" text-lg font-semibold mb-4"> Социальные сети</p>
                <div className="flex  gap-6">
                  <Mail />
                  <Mail />
                  <Mail />
                </div>
              </div>

              <div />
            </div>
          </div>

          <div className="bg-white col-span-7">
            <div className="bg-white">
              <Tabs defaultValue="job" className="">
                <TabsList className="flex justify-around text-lg font-semibold bg-white text-slate-300 py-9 border border-slate-100 border-b-1">
                  <TabsTrigger value="job">Опыт работы</TabsTrigger>
                  <TabsTrigger value="degree">Образование</TabsTrigger>
                  <TabsTrigger value="sertification">
                    Сертификаты и навыки
                  </TabsTrigger>
                  <TabsTrigger value="social">Проекты</TabsTrigger>
                </TabsList>

                {/* job experience */}
                <div className="flex justify-center">
                  <TabsContent className="w-full border-none" value="job">
                    <div className="grid grid-cols-10 gap-8">
                      <div className="col-span-2">
                        <div className="flex flex-col gap-1.5">
                          <p className=" text-lg font-semibold">
                            Апрель, 2022 - по настоящее время
                          </p>
                          <p className="text-sm text-slate-400">11 месяцев</p>
                        </div>
                      </div>
                      <div className="col-span-8">
                        <div>
                          <p className=" text-lg font-semibold">ht.kz</p>
                          <p className=" text-sm font-normal mb-3">Astana</p>
                          <p className=" text-sm font-semibold mb-2">
                            Менеджер по туризму
                          </p>
                          <p className="text-sm font-normal">
                            Консультирование клиентов и продажа туристических
                            услуг. Выполнение плана продаж. Ведение отчетности
                            по выполненной работе. Бронирование
                            авиабилетов/туристических пакетов/оформление
                            виз/холодные звонки с клиентами/ведение базы
                            туристов. Переговоры с потенциальными партнёрами
                          </p>
                        </div>
                      </div>
                    </div>
                    <Separator className=" mt-4 mb-6" />
                    <div className="grid grid-cols-10 gap-8">
                      <div className="col-span-2">
                        <div className="flex flex-col gap-1.5">
                          <p className=" text-lg font-semibold">
                            Апрель, 2022 - по настоящее время
                          </p>
                          <p className="text-sm text-slate-400">11 месяцев</p>
                        </div>
                      </div>
                      <div className="col-span-8">
                        <div>
                          <p className=" text-lg font-semibold">ht.kz</p>
                          <p className=" text-sm font-normal mb-3">Astana</p>
                          <p className=" text-sm font-semibold mb-2">
                            Менеджер по туризму
                          </p>
                          <p className="text-sm font-normal">
                            Консультирование клиентов и продажа туристических
                            услуг. Выполнение плана продаж. Ведение отчетности
                            по выполненной работе. Бронирование
                            авиабилетов/туристических пакетов/оформление
                            виз/холодные звонки с клиентами/ведение базы
                            туристов. Переговоры с потенциальными партнёрами
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>

                {/* degree */}
                <div className="w-full">
                  <TabsContent className="border-none" value="degree">
                    <p className=" text-xl text-slate-400 font-semibold pb-4">
                      Высшее образование
                    </p>
                    <div className="grid grid-cols-10 gap-4">
                      <div className="col-span-3">
                        <div className=" font-semibold text-lg">2022</div>
                      </div>
                      <div className="col-span-7">
                        <p className=" font-semibold text-lg">
                          Казахская Академия Спорта и Туризма
                        </p>
                        <p className=" font-normal text-sm pb-3"> Алматы</p>
                        <p className=" font-semibold text-sm">
                          Туризм (Магистр туризма)
                        </p>
                      </div>
                    </div>
                    <Separator className="mt-4 mb-6" />
                    <div className="grid grid-cols-10 gap-4">
                      <div className="col-span-3">
                        <div className=" font-semibold text-lg">2022</div>
                      </div>
                      <div className="col-span-7">
                        <p className=" font-semibold text-lg">
                          Казахская Академия Спорта и Туризма
                        </p>
                        <p className=" font-normal text-sm pb-3"> Алматы</p>
                        <p className=" font-semibold text-sm">
                          Туризм (Магистр туризма)
                        </p>
                      </div>
                    </div>
                    <Separator className="mt-4 mb-6" />
                    <p className=" text-xl text-slate-400 font-semibold pb-4">
                      Повышение квалификации
                    </p>
                    <div className="grid grid-cols-10 gap-4">
                      <div className="col-span-3">
                        <div className=" font-semibold text-lg">2022</div>
                      </div>
                      <div className="col-span-7">
                        <p className=" font-semibold text-lg">
                          Казахская Академия Спорта и Туризма
                        </p>
                        <p className=" font-normal text-sm pb-3"> Алматы</p>
                        <p className=" font-semibold text-sm">
                          Туризм (Магистр туризма)
                        </p>
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
                    <div>
                      <p className="text-slate-400 font-semibold text-xl mb-6">
                        Сертефикаты
                      </p>
                      <div className="w-full bg-slate-100 rounded-xl pt-4 pb-6">
                        <div className="flex flex-col justify-center items-center ">
                          <Image
                            src={Badge}
                            alt="Sertificate"
                            className="m-auto"
                          />
                          <p className="font-semibold text-xl">
                            Онлайн-курс менеджера по туризму от «Поехали с нами»
                          </p>
                          <p className=" font-normal text-sm">
                            За успешное завершение онлайн-курса "Менеджер по
                            туризму"
                          </p>
                          <Link href="/">
                            <p className="text-sky-500 font-medium text-sm">
                              Смотреть сертификат
                            </p>
                          </Link>
                        </div>
                      </div>
                      <p className="text-slate-400 font-semibold text-xl mt-12">
                        Навыки
                      </p>

                      <div className="flex mt-8">
                        <div className="flex gap-3 px-6 py-4 bg-slate-100 rounded-xl">
                          <Power />
                          <p> Работа с Битрикс24</p>
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
                    <div className="flex flex-col" />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
