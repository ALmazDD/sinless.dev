import {
  ChevronRight,
  Edit,
  Eye,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Power,
  Star,
  Trash2,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CoffeLibrary from "@/assets/coffeLibrary.png";
import Test from "@/assets/testAva.png";
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
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function View() {
  const isAuthor = true;
  return (
    <div className="h-screen bg-slate-50">
      <MainNavigation />
      <div className="mx-auto max-w-screen-xl px-5 pt-8">
        <h1 className="text-sm">
          <span className="text-slate-300">Профиль / </span>
          Консультационные услуги
        </h1>

        <div className="my-7 flex flex-col items-end justify-end gap-4 sm:mb-0 md:mb-11 md:flex-row md:items-baseline md:justify-between">
          <h1 className="hidden text-5xl font-extrabold md:flex">
            Консультационные услуги
          </h1>

          {isAuthor ? (
            <div className="flex gap-5">
              <Button className="bg-slate-700 hover:bg-black">
                Редактировать
              </Button>
              <AlertDialog>
                <AlertDialogTrigger className="rounded-lg border p-2 hover:bg-slate-100">
                  <Trash2 />
                </AlertDialogTrigger>
                <AlertDialogContent className="flex flex-col items-center justify-center">
                  <AlertDialogHeader className="mb-3">
                    <AlertDialogTitle className="text-center">
                      Удалить профиль?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center text-slate-900">
                      Восстановить профиль будет невозможно
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Отмена</AlertDialogCancel>
                    <AlertDialogAction className=" bg-rose-500 hover:bg-rose-700">
                      Удалить
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ) : (
            <div className="flex gap-5">
              <Button variant="outline">Добавить в избранное</Button>
              <Button className="bg-black hover:bg-slate-600">
                Написать в чате
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-10 ">
          <div className="rounded-lg border sm:col-span-3">
            <div className="h-full bg-white px-6">
              <div className="flex flex-col items-center justify-center pt-12">
                <Image
                  src={Test}
                  alt="Photo by Alvaro Pinot"
                  className="h-[106px] w-auto rounded-md object-cover pb-6"
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
                <p className="pt-3  text-sm">
                  2 года 9 месяцев общий стаж работы в сфере туризма. Работала с
                  интересными компаниями, которые являются ведущими турагентами
                  Казахстана
                </p>
              </div>
              <Separator className="mt-3 mb-5" />
              <div>
                <p className=" mb-4 text-lg font-semibold"> Социальные сети</p>
                <div className="flex gap-6 pb-5">
                  <Linkedin />
                  <Youtube />
                  <Instagram />
                </div>
              </div>

              <div />
            </div>
          </div>

          <div className="rounded-lg border bg-white sm:col-span-7">
            <div className="bg-white">
              <Tabs defaultValue="job">
                <TabsList className="flex justify-around border border-slate-100 bg-white p-9 text-lg font-semibold text-slate-300">
                  <div className="flex flex-row flex-nowrap gap-10 overflow-x-auto md:w-full md:justify-around">
                    <TabsTrigger value="job">Опыт работы</TabsTrigger>
                    <TabsTrigger value="degree">Образование</TabsTrigger>
                    <TabsTrigger value="sertification">
                      Сертификаты и навыки
                    </TabsTrigger>
                    <TabsTrigger value="projects">Проекты</TabsTrigger>
                  </div>
                </TabsList>

                {/* job experience */}
                <div className="flex justify-center">
                  <TabsContent className="w-full border-none" value="job">
                    <div className="grid gap-8 sm:grid-cols-10">
                      <div className="sm:col-span-2">
                        <div className="flex flex-col gap-1.5">
                          <p className=" text-lg font-semibold">
                            Апрель, 2022 - по настоящее время
                          </p>
                          <p className="text-sm text-slate-400">11 месяцев</p>
                        </div>
                      </div>
                      <div className="sm:col-span-8">
                        <div>
                          <p className=" text-lg font-semibold">ht.kz</p>
                          <p className=" mb-3 text-sm font-normal">Astana</p>
                          <p className=" mb-2 text-sm font-semibold">
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
                    <div className="grid gap-8 sm:grid-cols-10">
                      <div className="sm:col-span-2">
                        <div className="flex flex-col gap-1.5">
                          <p className=" text-lg font-semibold">
                            Апрель, 2022 - по настоящее время
                          </p>
                          <p className="text-sm text-slate-400">11 месяцев</p>
                        </div>
                      </div>
                      <div className="sm:col-span-8">
                        <div>
                          <p className=" text-lg font-semibold">ht.kz</p>
                          <p className=" mb-3 text-sm font-normal">Astana</p>
                          <p className=" mb-2 text-sm font-semibold">
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
                    <p className=" pb-4 text-xl font-semibold text-slate-400">
                      Высшее образование
                    </p>
                    <div className="grid grid-cols-10 gap-4">
                      <div className="col-span-3">
                        <div className=" text-lg font-semibold">2022</div>
                      </div>
                      <div className="col-span-7">
                        <p className=" text-lg font-semibold">
                          Казахская Академия Спорта и Туризма
                        </p>
                        <p className=" pb-3 text-sm font-normal"> Алматы</p>
                        <p className=" text-sm font-semibold">
                          Туризм (Магистр туризма)
                        </p>
                      </div>
                    </div>
                    <Separator className="mt-4 mb-6" />
                    <div className="grid grid-cols-10 gap-4">
                      <div className="col-span-3">
                        <div className=" text-lg font-semibold">2022</div>
                      </div>
                      <div className="col-span-7">
                        <p className=" text-lg font-semibold">
                          Казахская Академия Спорта и Туризма
                        </p>
                        <p className=" pb-3 text-sm font-normal"> Алматы</p>
                        <p className=" text-sm font-semibold">
                          Туризм (Магистр туризма)
                        </p>
                      </div>
                    </div>
                    <Separator className="mt-4 mb-6" />
                    <p className=" pb-4 text-xl font-semibold text-slate-400">
                      Повышение квалификации
                    </p>
                    <div className="grid grid-cols-10 gap-4">
                      <div className="col-span-3">
                        <div className=" text-lg font-semibold">2022</div>
                      </div>
                      <div className="col-span-7">
                        <p className=" text-lg font-semibold">
                          Казахская Академия Спорта и Туризма
                        </p>
                        <p className=" pb-3 text-sm font-normal"> Алматы</p>
                        <p className=" text-sm font-semibold">
                          Туризм (Магистр туризма)
                        </p>
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
                    <div>
                      <p className="mb-6 text-xl font-semibold text-slate-400">
                        Сертефикаты
                      </p>
                      <div className="w-full rounded-xl bg-slate-100 pt-4 pb-6">
                        <div className="flex flex-col items-center justify-center p-3 sm:p-0">
                          <Image
                            src={Badge}
                            alt="Sertificate"
                            className="m-auto"
                          />
                          <p className="text-center text-base font-semibold sm:text-xl">
                            Онлайн-курс менеджера по туризму от «Поехали с нами»
                          </p>
                          <p className="text-center text-xs  font-normal sm:text-sm">
                            За успешное завершение онлайн-курса "Менеджер по
                            туризму"
                          </p>
                          <Link href="/">
                            <p className="text-sm font-medium text-sky-500">
                              Смотреть сертификат
                            </p>
                          </Link>
                        </div>
                      </div>
                      <p className="mt-12 text-xl font-semibold text-slate-400">
                        Навыки
                      </p>

                      <div className="mt-8 flex">
                        <div className="flex gap-3 rounded-xl bg-slate-100 px-6 py-4">
                          <Power />
                          <p> Работа с Битрикс24</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>

                {/* social */}

                <TabsContent className="h-[500px] border-none" value="projects">
                  <div className="grid gap-5 md:grid-cols-2">
                    {isAuthor ? (
                      <>
                        <div className="grid items-center justify-center gap-4 rounded-lg border py-6 pl-6 pr-4 sm:grid-cols-10">
                          <div className="sm:col-span-4 ">
                            <Image
                              src={CoffeLibrary}
                              className="m-auto w-[126px]"
                              alt="test"
                            />
                          </div>
                          <div className="sm:col-span-6">
                            <div className="flex flex-col gap-1">
                              <h1 className=" text-lg font-semibold">
                                Кофейня-библиотека
                              </h1>
                              <p className=" text-sm">
                                рестораны, кафе, бары и т.д.
                              </p>
                              <div className="flex items-center gap-4 text-sm text-slate-400">
                                <p>26.06.2023</p>
                                <p className="flex items-center gap-1 text-sm">
                                  <Eye /> 17
                                </p>
                              </div>
                              <div className="flex justify-end gap-1 sm:justify-start">
                                <Button
                                  className="m-0 rounded-full py-0 px-3"
                                  variant="ghost"
                                >
                                  <Trash2 className="w-[16px]" />
                                </Button>
                                <Button
                                  className="m-0 rounded-full py-0 px-3"
                                  variant="ghost"
                                >
                                  <Edit className="w-[16px]" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid items-center justify-center gap-4 rounded-lg border py-6 pl-6 pr-4 sm:grid-cols-10">
                          <div className="sm:col-span-4 ">
                            <Image
                              src={CoffeLibrary}
                              className="m-auto w-[126px]"
                              alt="test"
                            />
                          </div>
                          <div className="sm:col-span-6">
                            <div className="flex flex-col gap-1">
                              <h1 className=" text-lg font-semibold">
                                Кофейня-библиотека
                              </h1>
                              <p className=" text-sm">
                                рестораны, кафе, бары и т.д.
                              </p>
                              <div className="flex items-center gap-4 text-sm text-slate-400">
                                <p>26.06.2023</p>
                                <p className="flex items-center gap-1 text-sm">
                                  <Eye /> 17
                                </p>
                              </div>
                              <div className="flex justify-end gap-1 sm:justify-start">
                                <Button
                                  className="m-0 rounded-full py-0 px-3"
                                  variant="ghost"
                                >
                                  <Trash2 className="w-[16px]" />
                                </Button>
                                <Button
                                  className="m-0 rounded-full py-0 px-3"
                                  variant="ghost"
                                >
                                  <Edit className="w-[16px]" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid items-center justify-center gap-4 rounded-lg border py-6 pl-6 pr-4 sm:grid-cols-10">
                          <div className="sm:col-span-4 ">
                            <Image
                              src={CoffeLibrary}
                              className="m-auto w-[126px]"
                              alt="test"
                            />
                          </div>
                          <div className="sm:col-span-6">
                            <div className="flex flex-col gap-1">
                              <h1 className=" text-lg font-semibold">
                                Кофейня-библиотека
                              </h1>
                              <p className=" text-sm">
                                рестораны, кафе, бары и т.д.
                              </p>
                              <div className="flex items-center gap-4 text-sm text-slate-400">
                                <p>26.06.2023</p>
                                <p className="flex items-center gap-1 text-sm">
                                  <Eye /> 17
                                </p>
                              </div>
                              <div className="flex justify-end gap-1 sm:justify-start">
                                <Button
                                  className="m-0 rounded-full py-0 px-3"
                                  variant="ghost"
                                >
                                  <Trash2 className="w-[16px]" />
                                </Button>
                                <Button
                                  className="m-0 rounded-full py-0 px-3"
                                  variant="ghost"
                                >
                                  <Edit className="w-[16px]" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid items-center justify-center gap-4 rounded-lg border py-6 pl-6 pr-4 sm:grid-cols-10">
                          <div className="sm:col-span-4 ">
                            <Image
                              src={CoffeLibrary}
                              className="m-auto w-[126px]"
                              alt="test"
                            />
                          </div>
                          <div className="sm:col-span-6">
                            <div className="flex flex-col gap-1">
                              <h1 className=" text-lg font-semibold">
                                Кофейня-библиотека
                              </h1>
                              <p className=" text-sm">
                                рестораны, кафе, бары и т.д.
                              </p>
                              <div className="flex items-center gap-4 text-sm text-slate-400">
                                <p>26.06.2023</p>
                                <p className="flex items-center gap-1 text-sm">
                                  <Eye /> 17
                                </p>
                              </div>
                              <div className="flex justify-end gap-1 sm:justify-start">
                                <Button
                                  className="m-0 rounded-full py-0 px-3"
                                  variant="ghost"
                                >
                                  <Trash2 className="w-[16px]" />
                                </Button>
                                <Button
                                  className="m-0 rounded-full py-0 px-3"
                                  variant="ghost"
                                >
                                  <Edit className="w-[16px]" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="min-w-[320px] rounded-lg border border-slate-200 bg-white">
                        <div className="p-4">
                          <div className="grid w-full grid-cols-10 gap-4">
                            <div className="col-span-4 items-center justify-center">
                              <Image
                                src={CoffeLibrary}
                                alt="test"
                                className=" w-full"
                              />
                            </div>
                            <div className="col-span-6 flex flex-col gap-1">
                              <div>
                                <p>Тепличный комплекс</p>
                              </div>
                              <div className="flex justify-between">
                                <p className=" w-44 overflow-hidden text-ellipsis whitespace-nowrap text-xs">
                                  сельское, лесное и рыбное хозяйство
                                  квсаемпниргтольдботрипмаесвкчсаемпритольдб
                                </p>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-slate-400">
                                <p>26.06.2023</p>
                                <p className="flex items-center gap-1 text-sm">
                                  <Eye /> 17
                                </p>
                              </div>
                              <div className="mt-2 flex gap-4 text-xs">
                                <div className="flex w-fit items-center gap-2 rounded-xl bg-slate-100 p-2">
                                  <MessageSquare width={20} height={20} />
                                  Чат проекта
                                </div>
                              </div>
                            </div>
                          </div>
                          <Separator className="my-6" />
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Button className="rounded-full bg-lime-100 py-1.5 px-2">
                                <Star className="text-lime-500" />
                              </Button>
                              <p>Добавить в избранное</p>
                            </div>
                            <Button className="rounded-full bg-slate-300 py-1.5 px-2 hover:bg-black">
                              <ChevronRight />
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
